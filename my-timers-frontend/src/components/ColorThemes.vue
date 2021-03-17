<template>
  <div class="color-themes">
    <div
      v-for="tile of themeTiles"
      :key="tile.id"
      class="theme-tile"
      :class="tile.themeName"
      @click="$store.dispatch('updateTheme', tile.colorTheme)"
    ></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      themeTiles: [
        {
          themeName: "lightTheme",
          colorTheme: [
            { name: "--bg", value: "#fff" },
            { name: "--accent", value: "yellow" },
            { name: "--font", value: "#000" },
            { name: "--nav", value: "#00000010" },
            { name: "--navHover", value: "#00000033" },
            { name: "--border", value: "#ddd" },
            { name: "--borderDelete", value: "red" },
            { name: "--bgDelete", value: "#ff00000e" },
            { name: "--timerShadow", value: "#00000022" },
            { name: "--digitBg", value: "#000" },
            { name: "--digitFont", value: "#fff" },
            { name: "--", value: "" },
          ],
        },
        {
          themeName: "darkTheme",
          colorTheme: [
            { name: "--bg", value: "#000" },
            { name: "--accent", value: "orange" },
            { name: "--font", value: "#fff" },
            { name: "--nav", value: "#ffffff11" },
            { name: "--navHover", value: "#ffffff33" },
            { name: "--border", value: "#444" },
            { name: "--borderDelete", value: "red" },
            { name: "--bgDelete", value: "#ff00000e" },
            { name: "--timerShadow", value: "#00000022" },
            { name: "--digitBg", value: "#fff" },
            { name: "--digitFont", value: "#000" },
            { name: "--", value: "" },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="sass" scoped>
.color-themes
  display: flex

.theme-tile
  height: 30px
  width: 30px
  cursor: pointer
  transition-duration: 0.2s
  border-radius: 5px
  margin: 5px
  &:hover
    transform: scale(1.08)
    opacity: 0.8

.lightTheme
  background-color: white

.darkTheme
  background-color: black
</style>