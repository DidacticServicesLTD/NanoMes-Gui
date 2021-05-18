<template>
  <Nav />

  <br><br>

  <div class="container">
    <router-view/>
  </div>
  
</template>

<script>
  // @ is an alias to /src
  import Nav from '@/components/Nav.vue'

  export default {
    name: 'Home',
    metaInfo: {
      // if no subcomponents specify a metaInfo.title, this title will be used
      title: 'NanoMes',
      // all titles will be injected into this template
      titleTemplate: '%s | My Awesome Webapp'
    },
    components: {
      Nav
    }
  }
</script>



