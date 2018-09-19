<template>
  <div>
    <h1 v-on:click="updateData()">{{msg}}</h1>
    <modal-window>
      <map-table 
        :scale-text="scaleText"
        :axis-val-x="axisValX"
        :axis-val-y="axisValY"
        :min-val="minVal"
        :max-val="maxVal"
        :map-data="mapData"
      ></map-table>
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
  data: () => {
    return {
      msg: 'Fuel map',
      scaleText: 'RPM/LOAD',
      axisValX: {
        start: 0,
        step: 10,
        postfix: '%'
      },
      axisValY: {
        start: 800,
        step: 400,
        postfix: ' rpm'
      },
      minVal: 0,
      maxVal: 30,
      mapData: [
        [100, 200, 300, 23, 123, 12, 312, 312, 3, 123, 123],
        [100, 200, 300, 23, 123, 123, 312, 312, 3, 123, 123],
        [100, 200, 300, 123, 123, 12, 312, 312, 3, 123, 123],
        [100, 200, 300, 23, 123, 123, 12, 312, 312, 3, 123],
        [100, 200, 23, 123, 123, 12, 312, 312, 3, 123, 123],
        [100, 200, 300, 123, 123, 12, 312, 312, 3, 123, 123],
        [100, 200, 300, 23, 123, 12, 312, 312, 3, 123, 123],
        [100, 200, 300, 23, 123, 123, 312, 312, 3, 123, 123],
        [100, 200, 300, 23, 123, 12, 312, 312, 3, 123, 123],
        [100, 300, 23, 123, 123, 12, 312, 312, 3, 123, 123],
        [500, 600, 700, 23, 123, 123, 12, 312, 3, 123, 123],
        [100, 200, 23, 123, 123, 12, 312, 312, 3, 123, 123],
        [100, 200, 300, 123, 123, 12, 312, 312, 3, 123, 123],
        [100, 200, 300, 23, 123, 12, 312, 312, 3, 123, 123],
        [100, 200, 300, 23, 123, 123, 312, 312, 3, 123, 123],
        [100, 200, 300, 23, 123, 12, 312, 312, 3, 123, 123],
        [100, 300, 23, 123, 123, 12, 312, 312, 3, 123, 123],
        [500, 600, 700, 23, 123, 123, 12, 312, 3, 123, 123]
      ]
    };
  },
  created: () => {

  },
  methods: {
    updateData() {
      var x = 1, y = 1;
      for (var i = 0; i < this.mapData.length; i ++) {
        x += 0.1;
        for (var j = 0; j < this.mapData[0].length; j ++) {
          y += 0.1;
          this.mapData[i][j] = x + y;
        }
      }
      console.log('strange')
    }
  }
};
</script>

<style scoped>
</style>
