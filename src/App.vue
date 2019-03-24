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
    height: 100%;
  }

  .notifications {
    padding: 15px;
  }
</style>
