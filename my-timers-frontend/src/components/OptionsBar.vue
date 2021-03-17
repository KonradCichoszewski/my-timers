<template>
  <div class="options-bar">
    <ColorThemes />
    <div class="flags">
      <div class="flag polish" @click="changeLocale('pl')" />
      <div class="flag english" @click="changeLocale('en')" />
      <button
        @click="() => this.$store.dispatch('logout')"
        v-if="this.$store.state.token"
      >
        Logout
      </button>
    </div>
  </div>
</template>

<script>
import i18n from "@/plugins/i18n.js";
import ColorThemes from "@/components/ColorThemes.vue";

export default {
  name: "OptionsBar",
  components: {
    ColorThemes,
  },
  methods: {
    changeLocale(locale) {
      i18n.locale = locale;
      this.$store.commit("setLanguage", locale);
    },
  },
};
</script>

<style lang="sass" scoped>
.options-bar
  width: 100%
  height: 40px
  position: fixed
  background-color: var(--nav)
  display: flex
  justify-content: space-between
  transition-duration: .3s
  z-index: 1
  &:hover
    background-color: var(--navHover)
    height: 60px

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