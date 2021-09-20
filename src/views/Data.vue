<template>
  <div class="columns">
    <div class="column is-narrow">
      <DataSidebar />
    </div>
    <div class="column">
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import DataSidebar from '@/components/DataSidebar.vue'

export default {
  components: {
    DataSidebar
  }
}
</script>
