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
            {
              name: "--bgImage",
              value: "linear-gradient(#fff, #fff)",
            },
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
            { name: "--bg", value: "#001" },
            {
              name: "--bgImage",
              value:
                "radial-gradient(circle at 76.71% 34.58%, #222336 0, #000022 50%, #000010 100%)",
            },
            { name: "--accent", value: "#c00" },
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
        {
          themeName: "greenTheme",
          colorTheme: [
            { name: "--bg", value: "#88bbff" },
            {
              name: "--bgImage",
              value:
                "radial-gradient(circle at 87.5% 12.5%, #b1e357 0, #9ade5e 10%, #82d864 20%, #68d06a 30%, #4cc56e 40%, #28b971 50%, #00ac73 60%, #00a175 70%, #009877 80%, #008f7a 90%, #00897d 100%)",
            },
            { name: "--accent", value: "#000022" },
            { name: "--font", value: "#ffffff" },
            { name: "--nav", value: "#00000010" },
            { name: "--navHover", value: "#00000033" },
            { name: "--border", value: "#ddd" },
            { name: "--borderDelete", value: "red" },
            { name: "--bgDelete", value: "#ff00000e" },
            { name: "--timerShadow", value: "#00000022" },
            { name: "--digitBg", value: "#002" },
            { name: "--digitFont", value: "#fff" },
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
  align-items: center
  padding-left: 40px

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
  background-image: radial-gradient(circle at 73.1% 9.99%, #ffffff 0, #ffffff 25%, #ffffff 50%, #f4ecef 75%, #eadde2 100%)

.darkTheme
  background-image: linear-gradient(220deg, #53519a 0, #262c5c 25%, #000022 50%, #000000 75%, #000000 100%)

.greenTheme
  background-image: radial-gradient(circle at 87.5% 12.5%, #b1e357 0, #9ade5e 10%, #82d864 20%, #68d06a 30%, #4cc56e 40%, #28b971 50%, #00ac73 60%, #00a175 70%, #009877 80%, #008f7a 90%, #00897d 100%)
</style>