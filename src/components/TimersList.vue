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
  width: 60vw
  padding: 40px
  padding-top: 80px

.title
  display: flex
  justify-content: center
  align-items: center
  margin-bottom: 30px
  & >p
    font-size: 40px
    padding: 5px
    border-bottom: 5px solid var(--accent)
    color: var(--font)

.timers-wrapper
  display: flex
  flex-wrap: wrap
  justify-content: space-around
</style>