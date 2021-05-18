<template>
  <!-- Main container -->
  <nav class="level">
    <!-- Left side -->
    <div class="level-left">
      <h2 class="subtitle"> uuid : {{ product.uuid  }} </h2>
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

<h1 class="title"> Product Information </h1>


<div class="field is-horizontal">
  <div class="field-label is-normal">
    <label class="label">Name</label>
  </div>
  <div class="field-body">
    <div class="field">
      <div class="control">
        <input class="input is-medium" type="text" v-model="product.name">
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
        <textarea class="textarea"  v-model="product.description" placeholder="add multiple lines"></textarea>
      </div>
    </div>
  </div>
</div>

<br><br>

<h1 class="title"> Product Steps </h1>

<div>

  <div class="step" v-for="(step, index) in product.sequence" :key="step" >
    <div class="columns">
      <div class="column is-narrow step_number">
        {{ index }}
      </div>
      <div class="column step_content">

        <!-- select box -->
          <!-- {{ get_station_from_uuid(step.station).uuid }}   -->
        <div class="select is-medium is-fullwidth">
          <select v-model="step.station">
            <option disabled value="">Please select a Station</option>
            <option v-for="station in stations" :value="station.uuid">
              {{ station.name }}
            </option>
          </select>
        </div>



        <!-- {{step.station}} -->
       
        <!-- select opperation -->
        <!-- - {{ get_operation_from_uuid(step.operation).name }} <br> -->


        <div class="select is-small is-fullwidth">
          <select v-model="step.operation">
            <option disabled value="">Please select an Operation</option>
            <option v-for="operation in get_station_from_uuid(step.station).Operation" :value="operation.uuid">
              {{ operation.name }}
            </option>
          </select>
        </div>

        <div class="select is-small is-fullwidth">
          <select v-model="step.parameter">
            <option disabled value="">Please select an Parameter</option>
            <option v-for="parameter in get_operation_from_uuid(step.operation).parameters" :value="parameter.value">
              {{ parameter.name }}
            </option>
          </select>
        </div> 


        

        
        <!-- {{get_operation_from_uuid(step.operation).parameters }} -->

          <!-- - {{ get_operation_from_uuid(step.operation).name }} <br> -->
      </div>
      <div class="column is-narrow button_list">
        <button class="button is-small is-fullwidth is-info" @click="move_sequence_step_up(index)"> <i class="las la-angle-up"></i> </button>
        <button class="button is-small is-fullwidth is-info" @click="move_sequence_step_down(index)">  <i class="las la-angle-down"></i> </button>
        <button class="button is-small is-fullwidth is-danger" @click="delete_sequence_step(index)">  <i class="las la-trash-alt"></i> </button>
        <button class="button is-small is-fullwidth is-success" @click="add_sequence_step(index)">  <i class="las la-plus"></i> </button>
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
      product : {},
      productUuid : this.$route.params.uuid,
      
      operations : {},
      stations : {},
    }
  },

  inject: ['$nanomes','$helpers'],
  async mounted(){
    console.log("Helo")
    await this.mounted_function()
  },
  methods : {

    async mounted_function(){

      this.product = await this.$nanomes.Products.get.one(this.$route.params.uuid).data;
      console.log(this.product)
      console.log("Helloooooo")

      this.stations = await this.$nanomes.Stations.get.all().data
      this.operations = await this.$nanomes.Operations.get.all().data
    },





    get_station_from_uuid(uuid) { 
      for (let index = 0; index < this.stations.length; index++) {
        const element = this.stations[index];
        if(element.uuid == uuid){
            return element
          }
      }
    },

    get_operation_from_uuid(uuid) { 
      for (let index = 0; index < this.operations.length; index++) {
        const element = this.operations[index];
        if(element.uuid == uuid){
            return element
          }
      }
    },


    add_sequence_step(id){
      var current = JSON.parse(JSON.stringify(this.product.sequence[id]))
      this.product.sequence.splice(id,0,current)
    },
    delete_sequence_step(id){
      this.product.sequence.splice(id,1)
    },

    move_sequence_step_up(id){
      var removed = this.product.sequence.splice(id,1)[0]
      if(id > 0){
        this.product.sequence.splice(id-1,0,removed)
      }else{
        this.product.sequence.splice(0,0,removed)
      }
    },
    move_sequence_step_down(id){
      var removed = this.product.sequence.splice(id,1)[0]

        this.product.sequence.splice(id+1,0,removed)
     
    },



    
    async click_DataSave() {
      try{
        let resp = await this.$nanomes.Products.post.one(this.product);
        if(resp.name == "success"){

          this.$swal.fire({
            title: 'Update Succsessful'
          });

          this.product = resp.data
          console.log("Here")
          console.log(this.product)
          if( this.product.sequence.length == 0 ){
            console.log("yes")
            this.product.sequence = 
            [{
              "station": 0,
              "operation": 0,
              "parameter": 0 
            }]
            console.log(this.product.sequence)
          }

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
        text: "You will delete this Statin, this may break existing workplans",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Delete',
        cancelButtonText: 'Cancel',
      }).then(async (result) => {
        if (result.isConfirmed) {

          try{
            let resp = await this.$nanomes.Products.delete.one(this.product);
            if(resp.name == "success"){
              this.$swal.fire({
                title: 'Deletion Succsessful'
              }).then(async (result) => {
                if (result.isConfirmed) {
                  this.$router.push('/data/products');
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
.step{
  
  margin: 20px;


}
.step_number{
  text-align: center;
  width:50px;
  font-size:30px;
}
.step_content{
  color:#fff;
  background-color : #ECECEC; 
  border-radius: 4px;
}
.step_content .select{
  margin-top:5px
}

.button_list{
  width:55px;
}
.button_list button{
  margin-bottom:5px;
}
</style>