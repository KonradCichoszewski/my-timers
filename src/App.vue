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
  computed: {
    colorTheme() {
      return this.$store.state.colorTheme;
    },
  },
  mounted() {
    setInterval(
      () =>
        this.$store.dispatch("updateTime", Date.now().toString().slice(0, -3)),
      1000
    );

    let app = document.getElementById("app");
    this.$store.state.colorTheme.forEach((property) => {
      app.style.setProperty(property.name, property.value);
    });
  },
  watch: {
    colorTheme() {
      let app = document.getElementById("app");
      this.$store.state.colorTheme.forEach((property) => {
        app.style.setProperty(property.name, property.value);
      });
    },
  },
};
</script>

<style lang="sass">
*
  margin: 0
  box-sizing: border-box

#app
  min-height: 100vh
  background-color: var(--bg)
</style>
