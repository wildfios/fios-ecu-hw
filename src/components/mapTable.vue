<template>
  <div class="map-outer-frame">
      <div class="map-table-row">
        <div class="map-cell-frame scale">
          <div class="map-row-desc">
            {{scaleText}}
          </div>
        </div>
        <div v-for="(el, indexCol) in mapData[0]" 
            class="map-cell-frame" 
            :key="'key-col-' + indexCol"
            :id="'map-col-' + indexCol"
          >
          <div class="map-col-desc">
            {{axisValX.start + (indexCol * axisValX.step) + axisValX.postfix}}
          </div>
        </div>
      </div>
      <div v-for="(mapRow, indexRow) in mapData" 
          class="map-table-row" 
          :key="'key-row-' + indexRow"
        >
        <div class="map-cell-frame scale"
          :id="'map-row-' + indexRow"
        >
          <div class="map-row-desc">
            {{axisValY.start + (indexRow * axisValY.step) + axisValY.postfix}}
          </div>
        </div>
        <div v-for="(el, indexCol) in mapRow" 
          class="map-cell-frame" 
          :id="'map' + indexRow + '-' + indexCol" 
          :key="'map-' + indexRow + '-' + indexCol" 
          :style="{backgroundColor: 'hsl('+ (250 - (el * (250 / (maxVal - minVal)))) +' , 100%, 65%)'}">
            <input 
              class="map-table-cell" 
              type="text"
              v-model="mapData[indexRow][indexCol]"
              v-on:keydown="noKeyDown($event, indexRow, indexCol)"
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
    hiLightCel: String,
    mapData: Array
  },
  data() {
    return {};
  },
  watch: {
    hiLightCel: function(newCel, oldCel) {
      let newEl = document.getElementById('map' + newCel);
      let oldEl = document.getElementById('map' + oldCel);
      let coordsNew = newCel.split('-');
      let coordsOld = oldCel.split('-');
      if (oldEl != null) {
        oldEl.classList.remove('active-cell');
        document.getElementById('map-row-' + coordsOld[0]).classList.remove('active-cell')
        document.getElementById('map-col-' + coordsOld[1]).classList.remove('active-cell')
      }
      if (newEl != null) {
        newEl.classList.add('active-cell');
        document.getElementById('map-col-' + coordsNew[1]).classList.add('active-cell')
        document.getElementById('map-row-' + coordsNew[0]).classList.add('active-cell')
      }
    }
  },
  methods: {
    getAscii(a) {
      return a.charCodeAt(0);
    },
    noKeyDown(event, x, y) {
      if (
        (this.getAscii(event.key) > 0x29 && this.getAscii(event.key) < 0x3a) ||
        'ArrowLeft' == event.key ||
        'Delete' == event.key ||
        'ArrowRight' == event.key ||
        'Backspace' == event.key
      ) {
        return;
      }
      if ('Enter' == event.key) {
        this.$emit('change', {
            value: event.target.value,
            cordX: x,
            cordY: y
          });
        event.target.blur();
        return;
      }
      event.preventDefault();
    },
    validateFld(e, row, col) {
      let val = e.target.value;
      if (val > this.maxVal) {
        this.mapData[row][col] = this.maxVal;
      } else if (val < this.minVal) {
        this.mapData[row][col] = this.minVal;
      } else if (val == '') {
        this.mapData[row][col] = this.minVal;
      }
      this.$set(this.mapData[row], col, parseInt(this.mapData[row][col], 10));
    },
  }
};
</script>

<style scoped>
.active-cell {
  background-color: red !important;
  text-shadow: -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff,
  1px 1px 0 #fff;
}

.map-table-row {
  display: flex;
}

.map-table-cell {
  background: inherit;
  border: none;
  color: black;
  width: 40px;
  text-align: center;
  font-weight: bold;
  text-shadow: -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff,
    1px 1px 0 #fff;
}

.map-table-cell:focus {
  border: dotted 1px red;
  background: #fff;
  width: 34px;
}

.map-cell-frame {
  border-left: 1px solid gray;
  border-bottom: 1px solid black;
  display: inline-block;
  background-color: floralwhite;
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
  background-color: inherit;
  font-size: 12px;
  font-weight: bold;
}

.map-row-desc {
  padding: 1px;
  background-color: inherit;
  font-size: 12px;
  font-weight: bold;
}

.map-outer-frame {
  border: solid 1px #606060;
  border-radius: 2px;
  display: inline-block;
}
</style>
