<template>
  <!-- Main container -->
  <nav class="level">
    <!-- Left side -->
    <div class="level-left">
      <h2 class="subtitle"> uuid : {{ station.uuid  }} </h2>
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

<h1 class="title"> Station Information </h1>


<div class="field is-horizontal">
  <div class="field-label is-normal">
    <label class="label">Name</label>
  </div>
  <div class="field-body">
    <div class="field">
      <div class="control">
        <input class="input is-medium" type="text" v-model="station.name">
      </div>
    </div>
  </div>
</div>


<div class="field is-horizontal">
  <div class="field-label is-normal">
    <label class="label">IP Address, Port</label>
  </div>
  <div class="field-body">
    <div class="field">
      <div class="control">
        <input class="input is-small" type="text" v-model="station.ip_address">
      </div>
    </div>
    <div class="field">
      <div class="control">
        <input class="input is-small" type="text" v-model="station.port">
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
        <textarea class="textarea"  v-model="station.description" placeholder="add multiple lines"></textarea>
      </div>
    </div>
  </div>
</div>

<br><br>

<h1 class="title"> Station Operations </h1>

    <div v-if="station.Operation">
      <article class="message is-lightish" v-for="operation in station.Operation" :key="operation">
        <div class="message-header">
        {{operation.name}}
        </div>
        <div class="message-body">
          {{operation.description}}
        </div>

      </article>
    </div>






</template>
<script>

export default {
  data() { 
    return {
      title : "Hello",
      station : {},
      stationUuid : this.$route.params.uuid,
      
      operations : {},
    }
  },

  inject: ['$nanomes','$helpers'],
  async mounted(){
    
    await this.mounted_function()
  },
  methods : {

    async mounted_function(){
      console.log(this.$route.params.uuid)
      this.station = await this.$nanomes.Stations.get.one(this.$route.params.uuid).data;
      console.log(this.station)
      this.operations = await this.$nanomes.Operations.get.all().data 
    },
    
    async click_DataSave() {
      try{
        let resp = await this.$nanomes.Stations.post.one(this.station);
        if(resp.name == "success"){

          this.$swal.fire({
            title: 'Update Succsessful'
          });

          this.station = resp.data

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
            let resp = await this.$nanomes.Stations.delete.one(this.station);
            if(resp.name == "success"){
              this.$swal.fire({
                title: 'Deletion Succsessful'
              }).then(async (result) => {
                if (result.isConfirmed) {
                  this.$router.push('/data/stations');
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
