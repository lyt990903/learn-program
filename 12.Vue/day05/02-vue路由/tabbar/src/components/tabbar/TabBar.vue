<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
 export default {
   name: "tabbar"
 }
</script>

<style scoped>
  #tab-bar {
    widows: 100%;
    height: 49px;
    background-color: #f6f6f6;
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    border-top: 1px #ccc solid;
    box-shadow: 0 -1px 3px #f1f1f1;
    display: flex;
  }
</style>
