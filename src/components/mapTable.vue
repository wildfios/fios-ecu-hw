<template>
  <div class="map-outer-frame">
      <div class="map-table-row">
        <div class="map-cell-frame scale">
          <div class="map-row-desc">{{scaleText}}</div>
        </div>
        <div v-for="(el, indexCol) in mapData[0]" class="map-cell-frame" :key="'key-col-' + indexCol">
          <div class="map-col-desc">{{axisValX.start + (indexCol * axisValX.step) + axisValX.postfix}}</div>
        </div>
      </div>
      <div v-for="(mapRow, indexRow) in mapData" class="map-table-row" :key="'key-row-' + indexRow">
        <div class="map-cell-frame scale">
          <div class="map-row-desc">{{axisValY.start + (indexRow * axisValY.step) + axisValY.postfix}}</div>
        </div>
        <div v-for="(el, indexCol) in mapRow" 
          class="map-cell-frame" 
          :id="'map-' + indexRow + '-' + indexCol" 
          :key="'map-' + indexRow + '-' + indexCol" 
          :style="{backgroundColor: 'hsl('+ (250 - (el * (250 / (maxVal - minVal)))) +' , 100%, 65%)'}">
            <input 
              class="map-table-cell" 
              type="text" 
              v-model="mapData[indexRow][indexCol]"
              v-on:keydown="noKeyDown($event)"
              v-on:keyup="validateFld($event, indexRow, indexCol)"
            >
        </div>
      </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'map-table',
  props: {
    scaleText: String,
    axisValX: Object,
    axisValY: Object,
    minVal: Number,
    maxVal: Number,
    mapData: Array
  },
  data() {
    return {};
  },
  methods: {
    getAscii(a) {
      return a.charCodeAt(0);
    },
    noKeyDown(e) {
      if (
        (this.getAscii(e.key) > 0x29 && this.getAscii(e.key) < 0x3a) ||
        'ArrowLeft' == e.key ||
        'Delete' == e.key ||
        'ArrowRight' == e.key ||
        'Backspace' == e.key
      ) {
        return;
      }
      e.preventDefault();
    },
    validateFld(e, row, col) {
      let val = e.path[0].value;
      if (val > this.maxVal) {
        this.mapData[row][col] = this.maxVal;
      } else if (val < this.minVal) {
        this.mapData[row][col] = this.minVal;
      } else if (val == '') {
        this.mapData[row][col] = this.minVal;
      }
    }
  }
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
  width: 41px;
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
