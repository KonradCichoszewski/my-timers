<template>
  <div class="timers-list">
    <div>MY TIMERS</div>
    <Timer
      v-for="timer of $store.state.timers"
      :key="timer.id"
      :timer="timer"
    />
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
</style>