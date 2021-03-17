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
              value:
                "radial-gradient(circle at 73.1% 9.99%, #ffffff 0, #ffffff 25%, #ffffff 50%, #f4ecef 75%, #eadde2 100%)",
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
        {
          themeName: "blueTheme",
          colorTheme: [
            { name: "--bg", value: "#88bbff" },
            {
              name: "--bgImage",
              value:
                "radial-gradient(circle at 68.26% 28.24%, #a7ffff 0, #7fe8ff 25%, #45ccf0 50%, #00b1dd 75%, #009ace 100%)",
            },
            { name: "--accent", value: "white" },
            { name: "--font", value: "#000088" },
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
          themeName: "redTheme",
          colorTheme: [
            { name: "--bg", value: "#88bbff" },
            {
              name: "--bgImage",
              value:
                "radial-gradient(circle at 78.37% 16.19%, #f1a240 0, #f79840 7.14%, #fc8d42 14.29%, #ff8045 21.43%, #ff7248 28.57%, #ff624d 35.71%, #ff4f52 42.86%, #ff3858 50%, #fb155f 57.14%, #f60068 64.29%, #ef0073 71.43%, #e6007e 78.57%, #dc008b 85.71%, #d00099 92.86%, #c100a7 100%)",
            },
            { name: "--accent", value: "white" },
            { name: "--font", value: "#000088" },
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

.blueTheme
  background-image: radial-gradient(circle at 68.26% 28.24%, #a7ffff 0, #7fe8ff 25%, #45ccf0 50%, #00b1dd 75%, #009ace 100%)

.redTheme
  background-image: radial-gradient(circle at 78.37% 16.19%, #f1a240 0, #f79840 7.14%, #fc8d42 14.29%, #ff8045 21.43%, #ff7248 28.57%, #ff624d 35.71%, #ff4f52 42.86%, #ff3858 50%, #fb155f 57.14%, #f60068 64.29%, #ef0073 71.43%, #e6007e 78.57%, #dc008b 85.71%, #d00099 92.86%, #c100a7 100%)
</style>