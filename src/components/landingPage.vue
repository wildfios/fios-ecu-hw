<template>
  <div>
    <h1>{{msg}}</h1>
    <modal-window>
      <map-table></map-table>
    </modal-window>
  </div>
</template>

<script>
import modalWindow from './modalWindow.vue';
import MapTable from './mapTable.vue';

export default {
  name: 'landing-page',
  components: {
    MapTable,
    modalWindow
  },
  data() {
    return {
      msg: 'Fuel map'
    };
  }
};
</script>

<style scoped>
</style>
