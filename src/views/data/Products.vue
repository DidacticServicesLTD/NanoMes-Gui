<template>
    <nav class="level">
          <!-- Left side -->
          <div class="level-left">
            <div>
            <h1 class="title"> Products </h1>
            <p> 
              Products are defined, as a series of stations and operations <br>
              
            </p>
            </div>
          </div>
          <div class="level-Right">
            <div class="field is-grouped">

              <p class="control">
                <a class="button is-warning" href="/data/product/new">
                  <span class="icon is-small">
                    <i class="las la-plus"></i>
                  </span>
                  <span>Add New Product</span>
                </a>
              </p>

            </div>
          </div>
    </nav>



    <article class="message  is-lightish" v-for="product in products" :key="product.id" >
      <div class="message-header">
        <span>
          <small class="has-text-weight-light"> {{ product.uuid }} </small>
        </span>
        <span>
        
        </span>
      </div>
      <div class="message-body is-info">

        <div class="block is-size-7">
          <span class="is-size-4 has-text-weight-bold"> {{ product.name }} </span> <br>
           {{product.description}}  
        </div>

        <!-- {{product.sequence}} -->

        <div class="block">
          <div class="step" v-for="(step, index) in product.sequence" :key="step" >
            <div class="columns">
              <div class="column is-narrow step_number">
                {{ index }}
              </div>
              <div class="column step_content">
                <b>{{ get_station_from_uuid(step.station).name }}</b><br>
                 - {{ get_operation_from_uuid(step.operation).name }}  :  {{step.parameter}} <br>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div class="message-header message-footer">
        <div></div>
        <div>
          <button class="button is-info is-small" @click="orderProduct(product)"> <i class="las la-shopping-cart"></i> &nbsp; Order </button> &nbsp;
          <router-link class="button is-dark is-small" :to="{ name: 'data/product/', params: { uuid: product.uuid }}">Edit</router-link>
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
      products : {},
      stations : {},
      operations : {}
    }
  },
  inject: ['$nanomes','$helpers'],

  methods: {
        async updateData () {
            this.products = await this.$nanomes.Products.get.all().data
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

        async orderProduct(product){

            console.log("runnissng")
          this.$swal.fire({
            title: 'Confirm Order?',
            html: `How many would you like to order <br> <input type="text" style="text-align:center" id="qty" class="swal2-input" value="1">`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Order',
            cancelButtonText: 'Cancel',
            preConfirm: () => {
              console.log("running")
              const qty = this.$swal.getPopup().querySelector('#qty').value
              if (qty < 0) {
                this.$swal.showValidationMessage(`Please enter a quantity between 0 and 5`)
              }
              if (qty > 5) {
                this.$swal.showValidationMessage(`Please enter a quantity between 0 and 5`)
              }
              if (isNaN(qty)) {
                this.$swal.showValidationMessage(`Please enter an integer`)
              }
              return { qty: qty}
            }
            }).then(async (result) => {
                console.log("Hello")
              if (result.isConfirmed) {
                console.log("Here")
                console.log(result.value.qty)

                  for (let index = 0; index < result.value.qty; index++) {
                    let query = await this.$nanomes.Orders.post.one(product)
                    console.log(query)
                  }
                  
              }
            })
        }
  },

  async mounted(){
    this.updateData()
  },



}
</script>



<style scoped>

#qty{
  text-align: center;
}
.button.is-small{
  font-weight: bold;;
}
.message-footer{
  border-radius : 0 0 4px 4px;
}

.step{
  
  margin: 20px;


}
.step_number{
  text-align: center;
  width:50px;
  font-size:30px;
}
.step_content{
  color:#000;
  background-color : #ECECEC; 
  border-radius: 4px;
}
</style>