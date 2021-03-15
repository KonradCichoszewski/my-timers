<template>
  <div class="timers">
    <div>MY TIMERS</div>
    <Timer />
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
.timers
  flex-grow: 2
  background-color: blue
</style>