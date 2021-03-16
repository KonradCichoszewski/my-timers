<template>
  <div id="app">
    <OptionsBar />
    <router-view />
  </div>
</template>

<script>
import OptionsBar from "./components/OptionsBar.vue";
export default {
  components: {
    OptionsBar,
  },
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

#app
  min-height: 100vh
</style>
