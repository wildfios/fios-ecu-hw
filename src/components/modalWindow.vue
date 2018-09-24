<template>
  <div>
    <div
      class="my-drag"
      v-on:mousedown="onDragStart($event)" 
      v-on:mousemove="onDrag($event)"
      v-on:mouseup="onDragStop($event)"
      v-bind:style="{'left': leftPos + 'px', 'top': topPos + 'px'}"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'modal-window',
  data() {
    return {
      leftPos: 10,
      topPos: 10,
      leftPosStart: 0,
      topPosStart: 0,
      clicked: false
    };
  },
  methods: {
    onDragStart(event) {
      this.leftPosStart = event.offsetLeft;
      this.topPosStart = event.offsetTop;
      event.preventDefault();
      this.clicked = true;
      document.onmousemove = this.onDrag;
    },
    onDrag(event) {
      if (this.clicked) {
        event.preventDefault();
        // let pos1 = this.leftPosStart - event.clientX;
        // let pos2 = this.topPosStart - event.clientY;
         
        //this.topPosStart 
        console.log(event.clientX - this.leftPosStart, event.clientX, this.leftPosStart)
        this.leftPos = event.clientX - this.leftPosStart;  //target.offsetLeft - pos2;
        this.topPos = event.clientY - this.topPosStart; //target.offsetTop - pos1;
      }
    },
    onDragStop(event) {
      this.clicked = false;
      document.onmousemove = false
    }
  }
};
</script>

<style scoped>
.my-drag {
  padding-top: 26px;
  background: gray;
  position: absolute;
}
</style>
