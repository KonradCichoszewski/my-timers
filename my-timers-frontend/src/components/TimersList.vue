<template>
  <div class="timers-list">
    <div class="title">
      <p>{{ $t("myTimers") }}</p>
    </div>
    <div class="timers-wrapper">
      <p class="no-timers" v-if="!(timers instanceof Array)">
        {{ $t("noTimers") }}
      </p>
      <Timer
        v-else
        v-for="timer of reversedTimers"
        :key="timer.id"
        :timer="timer"
        @timers-changed="$emit('timers-changed')"
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
  props: ["timers"],
  computed: {
    reversedTimers() {
      let timersCopy = this.timers;
      return timersCopy.reverse();
    },
  },
  // Commented out on request to detach frontend from backend

  // mounted() {
  //   this.$store.dispatch("fetchTimers", this.$store.state.token);
  // },
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

.no-timers
  color: var(--font)
</style>