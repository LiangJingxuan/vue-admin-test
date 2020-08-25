<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: "App",
  components: {
    
  },
};
</script>

<style lang="scss">
  @import url("assets/scss/reset.scss");
  #app{
    height: 100vh;
  }
</style>
