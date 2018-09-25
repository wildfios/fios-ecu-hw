<template>
  <div>
    <div 
      v-bind:style="{'left': leftPos + 'px', 'top': topPos + 'px'}"
      class="window-body"  
    >
      <div class="window-header" v-on:mousedown="onDragStart($event)">
      </div>
      <div>
        <slot></slot>
      </div>
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
      event.preventDefault();
      this.leftPosStart = event.clientX;
      this.topPosStart = event.clientY;
      this.clicked = true;
      window.addEventListener('mousemove', this.onDrag);
      window.addEventListener('mouseup', this.onDragStop);
    },
    onDrag(event) {
      if (this.clicked) {
        event.preventDefault();
        
        let pos1 = - this.leftPosStart + event.clientX;
        let pos2 = - this.topPosStart + event.clientY;
      
        this.leftPosStart = event.clientX;
        this.topPosStart = event.clientY; 

        this.leftPos += pos1;
        this.topPos += pos2;
      }
    },
    onDragStop(event) {
      this.clicked = false;
      window.removeEventListener('mousemove', this.onDrag);
      window.removeEventListener('mouseup', this.onDragStop);
    }
  }
};
</script>

<style scoped>
  .window-header {
    padding-top: 26px;
    background: lightblue;
    border: 1px solid gray;
    display: block;
  }

  .window-body {
    position: absolute;
    background: white;
    border-radius: 2px;
    border: solid 1px lightgray;
  }
</style>
