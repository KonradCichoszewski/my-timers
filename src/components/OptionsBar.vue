<template>
  <div class="options-bar">
    <div class="skins"></div>
    <div class="flags">
      <div class="flag polish" @click="changeLocale('pl')" />
      <div class="flag english" @click="changeLocale('en')" />
    </div>
  </div>
</template>

<script>
import i18n from "@/plugins/i18n.js";

export default {
  name: "OptionsBar",
  methods: {
    changeLocale(locale) {
      i18n.locale = locale;
    },
  },
};
</script>

<style lang="sass" scoped>
.options-bar
  width: 100%
  height: 40px
  position: absolute
  background-color: #00000011
  display: flex
  justify-content: space-between

.flags
  display: flex
  align-items: center
  margin-right: 40px

.flag
  width: 40px
  height: 30px
  background-size: cover
  background-position: center
  cursor: pointer
  transition-duration: 0.08s
  margin: 0 5px
  &:hover
    opacity: 0.8
    transform: scale(1.05)

.polish
  background-image: url("https://icons.iconarchive.com/icons/icondrawer/flags/48/Poland-icon.png")

.english
  background-image: url("https://icons.iconarchive.com/icons/icondrawer/flags/48/United-Kingdo-icon.png")
</style>