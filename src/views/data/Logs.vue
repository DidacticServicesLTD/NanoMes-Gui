<template>
    <nav class="level">
          <!-- Left side -->
          <div class="level-left">
            <div>
            <h1 class="title"> Logs</h1>
            <p> 
              Logs log things <br>
            
            </p>
            </div>
          </div>
          <div class="level-Right">
            <div class="field is-grouped">

              <p class="control">
                <a class="button is-danger"  @click="deleteAllLogs()">
                  <span class="icon is-small">
                    <i class="las la-trash-alt"></i>
                  </span>
                  <span>Delete All Logs</span>
                </a>
              </p>

            </div>
          </div>
    </nav>



    <article class="message  is-lightish" v-for="log in logs" :key="log.uuid" >
      <div class="message-header" 
        :class="{
          'normal-theme': (log.status == 0),
          'warning-theme': (log.status == 1),
          'error-theme': (log.status == 2)
        }">
        <span>
          <small class="has-text-weight-light" > {{ log.uuid }} - - - {{log.status}} </small>
        </span>
        <span>
          <small class="has-text-weight-light"> {{ generateTime(log.time) }} </small>
        </span>
         
      </div>
      <div class="message-body is-info">

        <div class="block is-size-7">
          <!-- <span class="is-size-4 has-text-weight-bold"> {{ log }} </span> <br> -->
          From : {{log.Station.name}} <br>
          Msg : {{log.msg}}
        </div>

      </div>
      <div class="message-header message-footer" :class="{
          'normal-theme': (log.status == 0),
          'warning-theme': (log.status == 1),
          'error-theme': (log.status == 2)
        }">
      </div>
    </article>

    <!-- <pre><code class="is-size-7"> {{ JSON.stringify(coredatatypes, null, 2) }} </code></pre> -->

</template>

<script>


export default {
  data() { 
    return {
      title : "Hello",
      logs : {},
      timer : {}
    }
  },
  inject: ['$nanomes','$helpers'],



  methods: {

        deleteAllLogs(){
          this.$swal.fire({
            title: 'Are you sure?',
            html: "You will delete all logs",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Delete',
            cancelButtonText: 'Cancel',
          }).then(async (result) => {
            if (result.isConfirmed) {
                let query = await this.$nanomes.Logs.delete.all();
                this.updateData()
            }
          })
        },
        async updateData () {
            this.logs = await this.$nanomes.Logs.get.all().data 
        },
        cancelAutoUpdate () {
          console.log("cancelling timer")
          clearInterval(this.timer);
        },
        generateTime(stamp){
          var date = new Date(parseInt(stamp))
          console.log(stamp)
          console.log(date)
          return date.toLocaleDateString("en-GB") + " " + date.toLocaleTimeString("en-GB");
          // return `${date.getFullYear()}/${date.getMonth()}/${date.getDay()} - ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
        },
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

.normal-theme{
  background-color: #BAE4FF !important;
}
.warning-theme{
  background-color:#FFDA91 !important;
}
.error-theme{
  background-color:#FF9191 !important;
}
</style>