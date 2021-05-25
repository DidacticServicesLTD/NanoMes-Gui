import { createRouter, createWebHistory } from 'vue-router'



import Home from '../views/Home.vue'


// import Login from '../views/Login.vue'

import Data from '../views/Data.vue'

import DefaultData from '../views/data/DefaultData.vue'

import SystemInfo from '../views/data/SystemInfo.vue'


// import Datatypes from '../views/data/Datatypes.vue'

// import Templates from '../views/data/Templates.vue'

// import Documents from '../views/data/Documents.vue'

// import TemplateEditor from '../views/data/TemplateEditor.vue'
// import DocumentEditor from '../views/data/DocumentEditor.vue'

// import DatatypeEditor from '../views/data/DocumentEditor.vue'



import Stations from '../views/data/Stations.vue'
import StationEditor from '../views/data/StationEditor.vue'

import Operations from '../views/data/Operations.vue'
import OperationEditor from '../views/data/OperationEditor.vue'

import Products from '../views/data/Products.vue'
import ProductEditor from '../views/data/ProductEditor.vue'

import Orders from '../views/data/Orders.vue'
import FinishedOrders from '../views/data/FinishedOrders.vue'
// import ProductEditor from '../views/data/ProductEditor.vue'

import Logs from '../views/data/Logs.vue'

let auth = "hello"



const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  


  { path: '/data', 
    beforeEnter(to, from, next) {
      console.log(auth)
      next()
    },
    component: Data,
    
      children: [
        // the default view
        { path: '', component: DefaultData },
        


        {
          // when /data/stations is matched
          path: 'stations',
          component: Stations
        },
        {
          // when /data/stations/xxx is matched
          path: 'station/:uuid',
          name: 'data/station/',
          component: StationEditor
        },



        {
          // when /data/operations is matched
          path: 'operations',
          component: Operations
        },
        {
          // when /data/stations/xxx is matched
          path: 'operation/:uuid',
          name: 'data/operation/',
          component: OperationEditor
        },



        {
          // when /data/operations is matched
          path: 'products',
          component: Products
        },
        {
          // when /data/stations/xxx is matched
          path: 'product/:uuid',
          name: 'data/product/',
          component: ProductEditor
        },



        {
          // when /data/orders is matched
          path: 'orders',
          component: Orders
        },
        {
          // when /data/finishedOrders is matched
          path: 'finishedOrders',
          component: FinishedOrders
        },



        {
          path: 'systeminfo',
          component: SystemInfo
        },

        {
          path: 'logs',
          component: Logs
        },
      ]
    }
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


export default router
