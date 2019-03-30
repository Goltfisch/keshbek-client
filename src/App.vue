<template>
  <div id="app">
    <router-view></router-view>
    <div class="notifications">
      <notifications />
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style>
  #app {
    min-height: 100%;
    height: 100%;
  }
 
  .notifications {
    padding: 15px;
  }
</style>
