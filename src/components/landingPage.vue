<template>
  <div>
    <h1 v-on:click="updateData()">{{msg}}</h1>
    <!-- <modal-window>
    </modal-window>v-if="mapReady" -->
      <map-table 
        :scale-text="scaleText"
        :axis-val-x="axisValX"
        :axis-val-y="axisValY"
        :min-val="minVal"
        :max-val="maxVal"
        :map-data="fuelMap"
      ></map-table>
      <button v-on:click="increment()">increment</button>
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
      mapReady: false,
      scaleText: 'RPM/LOAD',
      msg: 'Fuel map',
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
      maxVal: 25,
      fuelMap: [
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
        [500, 600, 700, 23, 123, 123, 12, 312, 3, 123, 123],
        [500, 600, 700, 23, 123, 123, 12, 312, 3, 123, 123]
      ]
    };
  },
  methods: {
    setMapData(i, j, data) {
      this.$set(this.fuelMap[i], j, data);
    },
    updateData() {
      var x = 1,
        y = 1;
      for (var i = 0; i < this.fuelMap.length; i++) {
        x += 0.1;
        for (var j = 0; j < this.fuelMap[0].length; j++) {
          y += 0.1;
          this.setMapData(i, j, Math.floor(x + y));
        }
      }
    },
    increment() {
      this.setMapData(3, 3, Math.floor(Math.random() * 100));
    }
  }
};
</script>

<style scoped>
</style>
