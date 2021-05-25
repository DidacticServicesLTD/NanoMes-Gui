<template>
  <aside class="menu">
    <p class="menu-label">
      Overview
    </p>
    <ul class="menu-list">
      <li><router-link to="/data/stations" class="navbar-item">Stations</router-link></li>
      <li><router-link to="/data/operations" class="navbar-item">Operations</router-link></li>
      <li><router-link to="/data/products" class="navbar-item">Products</router-link></li>
      <!--
      <li><router-link to="/data/datatypes" class="navbar-item">Datatypes</router-link></li>
      <li><router-link to="/data/templates" class="navbar-item">Templates</router-link></li>
      -->
    </ul>

    
    <p class="menu-label">
      Orders
    </p>
    <ul class="menu-list">
      <li><router-link to="/data/orders" class="navbar-item">Current Orders <span class="tag is-warning is-rounded">{{ orders.length }}</span></router-link></li>
      <li><router-link to="/data/finishedOrders" class="navbar-item">Finished Orders <span class="tag is-warning is-rounded">{{ finishedOrders.length }}</span></router-link> </li>
    </ul>

    <p class="menu-label">
      Logs
    </p>
    <ul class="menu-list">
      <li><router-link to="/data/logs" class="navbar-item">Logs <span class="tag is-warning is-rounded">{{ logs.length }}</span></router-link></li>
    </ul>

    <p class="menu-label">
      Settings / Info
    </p>
    <ul class="menu-list">
      <li><router-link to="/data/systeminfo" class="navbar-item">System Info</router-link></li>
    </ul>
  </aside>
</template>

<script>
  export default {
    name: 'DataSidebar',
    props: {
      msg: String
    },
    data(){
      return {
        orders: {},
        logs: {},
        finishedOrders : 0,
        timer : {}
      }
    },


  inject: ['$nanomes','$helpers'],

  methods: {
        async updateData () {
            this.orders = await this.$nanomes.Orders.get.all().filterData("status","!=","100").data 
            this.logs = await this.$nanomes.Logs.get.all().data 
            this.finishedOrders = await this.$nanomes.Orders.get.all().filterData("status","==","100").data 
      
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
