<template>
  <div>
    <h1>{{msg}}</h1>
      <div 
        v-on:mousedown="onDragStart($event)" 
        v-on:mousemove="onDrag($event)"
        v-on:mouseup="onDragStop($event)"
        class="my-drag"
        v-bind:style="{'left': left, 'top': top}"></div>
    <map-table></map-table>
  </div>
</template>

<script>
import MapTable from './mapTable.vue'

export default {
  name: 'landing-page',
  components: {
    MapTable,
  },
  data () {
    return {
      msg: 'Fuel map',
      left: 0,
      top: 0,
      clicked: false
    }
  },
  methods: {
    onDragStart: event => {
      this.clicked = true
    },
    onDrag: event => {
      console.log(this.clicked)
      if (this.clicked) {
        console.log(event)
        this.left = event.clientX
      }
    },
    onDragStop: event => {
      this.clicked = false
    }
  }
}
</script>

<style scoped>
.my-drag {
  width: 100px;
  height: 100px;
  background: gray;
  position: absolute;
}
</style>
