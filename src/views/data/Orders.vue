<template>
    <nav class="level">
          <!-- Left side -->
          <div class="level-left">
            <div>
            <h1 class="title"> Current Orders</h1>
            <p>

              Orders below are currently in the the production queue

            </p>
            </div>
          </div>
          <div class="level-Right">
            <div class="field is-grouped">

              <!-- <p class="control">
                <a class="button is-success" href="/data/order/new">
                  <span class="icon is-small">
                    <i class="las la-plus"></i>
                  </span>
                  <span>Add New Order </span>
                </a>
              </p> -->

            </div>
          </div>
    </nav>



    {{orders_all}}

    <article class="message  is-lightish" v-for="order in orders" :key="order.uuid" >
      <div class="message-header">
        <span>
          <small class="has-text-weight-light"> UUID : {{ order.uuid }} <br> RFID : {{ order.rfid_id }} </small>
        </span>
        <span>
          <span v-if="order.status == 0" class="tag is-dark is-medium">0 : Not Yet Started</span>
          <span v-if="order.status == 50" class="tag is-warning is-medium">50 : In Production</span>
          <span v-if="order.status == 100" class="tag is-success is-medium">100 : Completed Successfully</span>
          <span v-if="order.status == 999" class="tag is-error is-medium">999 : Production Error</span>

          &nbsp; 

          <small class="has-text-weight-light"> {{ generateTime(order.time) }} </small>
      </span>
        
      </div>
      <div class="message-body is-info">

        <div class="block is-size-7">
          <span class="is-size-4 has-text-weight-bold"> {{ order.product_instance.name }} </span> 

        </div>

        <div class="block">
          <div class="step" v-for="(step, index) in order.product_instance.sequence" :key="step" >
            <div class="columns">
              <div class="column is-narrow step_number">
                {{ index }}
              </div>
              <div class="column step_content" :class="{ step_content_orange: (step.status > 0), step_content_green: (step.status == 100), step_content_red: (step.status == 999) } ">
                <!-- {{step.station}}<br>
                {{step.operation}} 
                -->
                <b>{{ get_station_from_uuid(step.station).name }}</b><br>
                 &nbsp; &nbsp; {{ get_operation_from_uuid(step.operation).name }} : 
                 <span class="light">  {{get_parameter_from_operation( get_operation_from_uuid(step.operation) , step.parameter).name }} </span>
                <br>
                <!-- {{ step }} -->
              </div>
            </div>
          </div>

        </div>

      </div>
      <div class="message-header message-footer">
        <div></div>
        <div>
          <button class="button is-danger is-small" @click="deleteOrder(order)"> <i class="las la-trash-alt"></i> &nbsp; Delete </button> &nbsp;
          <button class="button is-warning is-small" @click="finishOrder(order)"> <i class="las la-trash-alt"></i> &nbsp; Mark as Finished with Error </button> &nbsp;
        </div>

      </div>
    </article>


<br><br><br>
    <!-- <pre><code class="is-size-7"> {{ JSON.stringify(coredatatypes, null, 2) }} </code></pre> -->

</template>

<script>


export default {
  data() { 
    return {
      title : "Hello",
      orders : {},
      orders_all : {},
      products : {},
      stations : {},
      operations : {},
      timer : {}
    }
  },
  inject: ['$nanomes','$helpers'],


  methods: {

        async deleteOrder(order){
          this.$swal.fire({
            title: 'Are you sure?',
            html: "You will delete this order, which may be a currently active order. <br> <br> This may cause problems ",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Delete',
            cancelButtonText: 'Cancel',
          }).then(async (result) => {
            if (result.isConfirmed) {
                let query = await this.$nanomes.Orders.delete.one(order);
                this.updateData()
            }
          })
        },

        async finishOrder(order){
          this.$swal.fire({
            title: 'Are you sure?',
            html: "You will finish this order, which may be a currently active order. <br> <br> This may cause problems ",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Delete',
            cancelButtonText: 'Cancel',
          }).then(async (result) => {
            if (result.isConfirmed) {
                order.status = 999
                let query = await this.$nanomes.Orders.post.one(order);
                this.updateData()
            }
          })
        },

        async updateData () {
            this.orders_all = await this.$nanomes.Orders.get.all()
            this.orders = await this.$nanomes.Orders.get.all().filterData("status","<","100").data 
            //heavy - required?
            this.products = await this.$nanomes.Products.get.all().data
            this.stations = await this.$nanomes.Stations.get.all().data
            this.operations = await this.$nanomes.Operations.get.all().data
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

        get_parameter_from_operation(operation,value){
          for (let index = 0; index < operation.parameters.length; index++) {
            const element = operation.parameters[index];
            if(element.value == value){
                return element
              }
          }
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

.step_content_orange{
  background-color : #DF9118; 
}

.step_content_green{
  background-color : #95C920 !important; 
}

.step_content_red{
  background-color : #DF1818 !important;
}

.light{
  color:#555
}
</style>