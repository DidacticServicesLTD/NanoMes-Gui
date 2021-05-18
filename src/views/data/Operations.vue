<template>
    <nav class="level">
          <!-- Left side -->
          <div class="level-left">
            <div>
            <h1 class="title"> Operations</h1>
            <p>

              Operations are preformed by stations <br>

            </p>
            </div>
          </div>
          <div class="level-Right">
            <div class="field is-grouped">

              <p class="control">
                <a class="button is-warning" href="/data/operation/new">
                  <span class="icon is-small">
                    <i class="las la-plus"></i>
                  </span>
                  <span>Add New Operation </span>
                </a>
              </p>

            </div>
          </div>
    </nav>



    <article class="message  is-lightish" v-for="operation in operations" :key="operation.uuid" >
      <div class="message-header">
        <span>
          <small class="has-text-weight-light"> {{ operation.uuid }} </small>
        </span>
        
      </div>
      <div class="message-body is-info">

        <div class="block is-size-7">
          <span class="is-size-4 has-text-weight-bold"> {{ operation.name }} </span> <br>
           {{operation.description}}  
        </div>

      </div>
      <div class="message-header message-footer">
        <div></div>
        <div>
          <router-link class="button is-small" :to="{ name: 'data/operation/', params: { uuid: operation.uuid }}">Edit</router-link>
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
      operations : {}
    }
  },
  inject: ['$nanomes','$helpers'],


  methods: {
        async updateData () {
            this.operations = await this.$nanomes.Operations.get.all().data 
        },
        cancelAutoUpdate () {
        }
  },

  async mounted(){
    this.updateData()
  },

}
</script>



<style scoped>

.message-footer{
  border-radius : 0 0 4px 4px;
}
</style>