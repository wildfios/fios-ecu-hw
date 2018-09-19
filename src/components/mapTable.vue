<template>
  <div class="map-outer-frame">
      <div class="map-table-row">
        <div class="map-cell-frame scale">
          <div class="map-row-desc">{{scaleText}}</div>
        </div>
        <div v-for="(el, indexCol) in fuelMap[0]" class="map-cell-frame">
          <div class="map-col-desc">{{axisValX.start + (indexCol * axisValX.step) + axisValX.postfix}}</div>
        </div>
      </div>
      <div v-for="(mapRow, indexRow) in fuelMap" class="map-table-row" :key="'key-' + indexRow">
        <div class="map-cell-frame scale">
          <div class="map-row-desc">{{axisValY.start + (indexRow * axisValY.step) + axisValY.postfix}}</div>
        </div>
        <div v-for="(el, indexCol) in mapRow" 
          class="map-cell-frame" 
          :id="'map-' + indexRow + '-' + indexCol" 
          :key="'map-' + indexRow + '-' + indexCol" 
          :style="{backgroundColor: 'hsl('+ (255 - (((el > 250 ? 250 : el) * (250 - 0)) / (maxVal - minVal))) +' , 60%, 60%)'}">
            <vue-numeric class="map-table-cell" type="text" 
              v-model="fuelMap[indexRow][indexCol]"
              v-bind:min="minVal" 
              v-bind:max="maxVal"
              :empty-value="minVal"
              >
            </vue-numeric>
        </div>
      </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'map-table',
  data() {
    return {
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
      maxVal: 250,
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
        [500, 600, 700, 23, 123, 123, 12, 312, 3, 123, 123]
      ]
    };
  },
  methods: {}
};
</script>

<style scoped>
.map-table-row {
  display: flex;
}

.map-table-cell {
  background: inherit;
  border: none;
  color: black;
  width: 42px;
  text-align: center;
  font-weight: bold;
  text-shadow: -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff,
    1px 1px 0 #fff;
}

.map-cell-frame {
  border-left: 1px solid gray;
  border-bottom: 1px solid black;
  display: inline-block;
  width: 42px;
  border-radius: 3px;
}

.map-cell-frame.scale {
  width: 100px;
  background-color: floralwhite;
}

.map-outer- frame {
  border: 2px #4b4b4b solid;
  display: inline-block;
  border-radius: 6px;
}

.map-col-desc {
  width: 42px;
  background-color: floralwhite;
}

.map-row-desc {
  padding: 1px;
  background-color: floralwhite;
}

.map-outer-frame {
  border: solid 1px #606060;
  border-radius: 2px;
  display: inline-block;
}
</style>
