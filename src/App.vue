<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  mounted() {
    setInterval(
      () =>
        this.$store.dispatch("updateTime", Date.now().toString().slice(0, -3)),
      1000
    );
  },
};
</script>

<style lang="sass">
*
  margin: 0
  box-sizing: border-box
</style>
