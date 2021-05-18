<template>
  <!-- Main container -->
  <nav class="level">
    <!-- Left side -->
    <div class="level-left">
      <h2 class="subtitle"> uuid : {{ operation.uuid  }} </h2>
    </div>
    <div class="level-Right">
      <div class="field is-grouped">
        

        <p class="control">
          <button class="button is-warning" @click="click_DataReload">
            <span class="icon is-small">
              <i class="las la-redo-alt"></i>
            </span>
            <span>Reload</span>
          </button>
        </p>

        <p class="control">
          <button class="button is-success" @click="click_DataSave">
            <span class="icon is-small">
              <i class="las la-check"></i>
            </span>
            <span>Save</span>
          </button>
        </p>

         <p class="control">
          <button class="button is-danger" @click="click_DataDelete">
            <span class="icon is-small">
              <i class="las la-trash-alt"></i>
            </span>
            <span>Delete</span>
          </button>
        </p>

      </div>
    </div>
  </nav>




  <br>
    <br>
      <br>
        <br>




<h1 class="title"> Operation Information </h1>


<div class="field is-horizontal">
  <div class="field-label is-normal">
    <label class="label">Name</label>
  </div>
  <div class="field-body">
    <div class="field">
      <div class="control">
        <input class="input is-medium" type="text" v-model="operation.name">
      </div>
    </div>
  </div>
</div>

<div class="field is-horizontal">
  <div class="field-label is-normal">
    <label class="label">Staion UUID</label>
  </div>
  <div class="field-body">
    <div class="field is-grouped">
      <div class="control is-expanded">
        <div class="select is-small is-fullwidth">
          <select v-model="operation.stationUuid">
            <option disabled value="">Please select one</option>
            <option v-for="station in stations" :value="station.uuid">
              {{ station.name }}
            </option>
          </select>
        </div>
      </div>

      <div class="control is-expanded">
        <input class="input is-small" type="text" v-model="operation.stationUuid" disabled>
      </div>
    </div>

  </div>
</div>





<div class="field is-horizontal">
  <div class="field-label is-normal">
    <label class="label">Description</label>
  </div>
  <div class="field-body">
    <div class="field">
      <div class="control">
        <textarea class="textarea"  v-model="operation.description" placeholder="add multiple lines"></textarea>
      </div>
    </div>
  </div>
</div>


<h1 class="title"> Parameter Options </h1>

<div>

  <div class="step" v-for="(parameter, index) in operation.parameters" :key="parameter" >
    <div class="columns">
      <div class="column step_content">

      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Name, Value</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <input class="input is-small" type="text" v-model="parameter.name">
            </div>
          </div>
          <div class="field">
            <div class="control">
              <input class="input is-small" type="text" v-model="parameter.value">
            </div>
          </div>
        </div>
      </div>

        

     
          <!-- {{ get_station_from_uuid(step.station).uuid }}   -->
        <!-- <div class="select is-medium is-fullwidth">
          <select v-model="parameter.name">
            <option disabled value="">Please select a Param</option>
            <option v-for="parameter in stations" :value="station.uuid">
              {{ station.name }}
            </option>
          </select>
        </div>  -->



          <!-- - {{ get_operation_from_uuid(step.operation).name }} <br> -->
      </div>
      <div class="column is-narrow button_list">
        <button class="button is-small is-info" @click="move_sequence_step_up(index)"> <i class="las la-angle-up"></i> </button>
        <button class="button is-small  is-info" @click="move_sequence_step_down(index)">  <i class="las la-angle-down"></i> </button>
        <button class="button is-small is-danger" @click="delete_sequence_step(index)">  <i class="las la-trash-alt"></i> </button>
        <button class="button is-small is-success" @click="add_sequence_step(index)">  <i class="las la-plus"></i><i class="las la-angle-down"></i> </button>
      </div>
    </div>
  </div>

</div>



</template>
<script>

export default {
  data() { 
    return {
      title : "Hello",
      operation : {},
      stations : {},
      operationUuid : this.$route.params.uuid 
    }
  },

  inject: ['$nanomes','$helpers'],
  async mounted(){
    await this.mounted_function()
  },
  methods : {

    add_sequence_step(id){
      var current = JSON.parse(JSON.stringify(this.operation.parameters[id]))
      this.operation.parameters.splice(id,0,current)
    },
    delete_sequence_step(id){
      this.operation.parameters.splice(id,1)
    },

    move_sequence_step_up(id){
      var removed = this.operation.parameters.splice(id,1)[0]
      if(id > 0){
        this.operation.parameters.splice(id-1,0,removed)
      }else{
        this.operation.parameters.splice(0,0,removed)
      }
    },
    move_sequence_step_down(id){
      var removed = this.operation.parameters.splice(id,1)[0]
      this.operation.parameters.splice(id+1,0,removed)
    },



    async mounted_function(){
      this.operation = await this.$nanomes.Operations.get.one(this.operationUuid).data;
      this.stations = await this.$nanomes.Stations.get.all().data 
      
      if( !this.operation.parameters ){
        this.operation.parameters = [{"name":"Example","value":0}]
      }
    },
    
    async click_DataSave() {
      console.log("@Saving")
      try{
        let resp = await this.$nanomes.Operations.post.one(this.operation);
        if(resp.name == "success"){

          this.$swal.fire({
            title: 'Update Successful'
          });

          this.operation = resp.data
          
        }else{
          this.$swal.fire({
            title: 'Error Updating',
            text: "Server rejected the update",
            icon: 'warning'
          });
        }
      }catch{
        this.$swal.fire({
            title: 'Error Updating',
            text: "Server is not responding",
            icon: 'warning'
          });
      }

    },

    async click_DataReload(){
      this.$swal.fire({
        title: 'Are you sure?',
        text: "You will loose any changes",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Reload',
        cancelButtonText: 'Cancel',
      }).then(async (result) => {
        if (result.isConfirmed) {
          await this.mounted_function()
        }
      })
    },

    async click_DataDelete() {
      this.$swal.fire({
        title: 'Are you sure?',
        text: "You will delete this operation, this may break existing workplans",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Delete',
        cancelButtonText: 'Cancel',
      }).then(async (result) => {
        if (result.isConfirmed) {

          try{
            let resp = await this.$nanomes.Operations.delete.one(this.operation);
            if(resp.name == "success"){
              this.$swal.fire({
                title: 'Deletion Succsessful'
              }).then(async (result) => {
                if (result.isConfirmed) {
                  this.$router.push('/data/operations');
                }
              });
            }else{
              this.$swal.fire({
                title: 'Error Updating',
                text: "Server rejected the update",
                icon: 'warning'
              });
            }
          }catch{
            this.$swal.fire({
                title: 'Error Updating',
                text: "Server is not responding",
                icon: 'warning'
              });
          }

        }
      })

    }


  }
}
</script>

<style scoped>
.button_list button{
  margin-right:2px
}
</style>