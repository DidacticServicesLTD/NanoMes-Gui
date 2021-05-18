<template>
    <nav class="level">
          <!-- Left side -->
          <div class="level-left">
            <div>
            <h1 class="title"> Stations</h1>
            <p> 
              Stations are physical locations in a i4.0 system <br>
            
            </p>
            </div>
          </div>
          <div class="level-Right">
            <div class="field is-grouped">

              <p class="control">
                <a class="button is-warning" href="/data/station/new">
                  <span class="icon is-small">
                    <i class="las la-plus"></i>
                  </span>
                  <span>Add New Station</span>
                </a>
              </p>

            </div>
          </div>
    </nav>



    <article class="message  is-lightish" v-for="station in stations" :key="station.id" >
      <div class="message-header">
        <span>
          <small class="has-text-weight-light"> {{ station.uuid }} </small>
        </span>
         <span>
           <div v-if="station.status == 1">
             <span class="tag is-success">{{ station.ip_address }} </span>
            
          </div>
          <div v-else>
            <span class="tag is-danger">{{ station.ip_address }}</span>
          </div>
        </span>
      </div>
      <div class="message-body is-info">

        <div class="block is-size-7">
          <span class="is-size-4 has-text-weight-bold"> {{ station.name }} </span> <br>
           {{station.description}}  
        </div>

      </div>
      <div class="message-header message-footer">
        <div></div>
        <div>
          <router-link class="button is-small" :to="{ name: 'data/station/', params: { uuid: station.uuid }}">Edit</router-link>
        </div>

      </div>
    </article>

    <!-- <pre><code class="is-size-7"> {{ JSON.stringify(coredatatypes, null, 2) }} </code></pre> -->

</template>

<script>


export default {
  data() { 
    return {
      title : "Hello",
      stations : {},
      timer : {}
    }
  },
  inject: ['$nanomes','$helpers'],



  methods: {
        async updateData () {
            this.stations = await this.$nanomes.Stations.get.all().data 
        },
        cancelAutoUpdate () {
          console.log("cancelling timer")
          clearInterval(this.timer);
        }
  },

  async mounted(){
    this.updateData()
    this.timer = setInterval(this.updateData, 2500);
  },

  onBeforeUnmount () {
    console.log("unmounting")
    this.cancelAutoUpdate();
  }
}
</script>



<style scoped>

.message-footer{
  border-radius : 0 0 4px 4px;
}
</style>