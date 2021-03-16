<template>
  <div class="timers-list">
    <div class="title">
      <p>{{ $t("myTimers") }}</p>
    </div>
    <div class="timers-wrapper">
      <Timer
        v-for="timer of $store.state.timers"
        :key="timer.id"
        :timer="timer"
      />
    </div>
  </div>
</template>

<script>
import Timer from "@/components/Timer.vue";
export default {
  components: {
    Timer,
  },
};
</script>

<style lang="sass" scoped>
.timers-list
  flex-grow: 2
  padding: 40px
  max-width: 1000px

.title
  display: flex
  justify-content: center
  align-items: center
  & >p
    background-color: black
    color: white
    padding: 20px
    transform: skew(-10deg)
    border-radius: 5px

.timers-wrapper
  display: flex
  flex-wrap: wrap
  justify-content: space-between
</style>