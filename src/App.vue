<template>
  <div id="app" class=" bg-red-50 ">
    <div class="max-w-screen-md min-h-screen mx-auto p-1 shadow-box-1 rounded-md">
      <TestBlock></TestBlock>
    </div>
  </div>
</template>

<script>
import TestBlock from './components/TestBlock.vue'

export default {
  name: 'App',
  components: {
		TestBlock,
 
  }
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
</style>
