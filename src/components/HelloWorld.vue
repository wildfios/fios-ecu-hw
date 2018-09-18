<template>
  <div>
    <h1>{{msg}}</h1>
    <map-table></map-table>
  </div>
</template>

<script>
import MapTable from './mapTable.vue'

export default {
  name: 'HelloWorld',
  components: {
    MapTable,
  },
  data () {
    return {
      msg: 'Fuel map'
    }
  }
}
</script>

<style scoped>

</style>
