<template>
  <div class="dashboard">
    <TimersList :timers="timers" @timers-changed="fetchTimers" />
    <CreateTimer @timers-changed="fetchTimers" />
  </div>
</template>

<script>
import CreateTimer from "@/components/CreateTimer.vue";
import TimersList from "@/components/TimersList.vue";

export default {
  name: "Dashboard",
  components: {
    CreateTimer,
    TimersList,
  },
  data() {
    return {
      timers: JSON.parse(localStorage.getItem("timers")) || undefined,
    };
  },
  methods: {
    fetchTimers() {
      this.timers = JSON.parse(localStorage.getItem("timers"));
    },
  },
};
</script>

<style lang="sass" scoped>
.dashboard
  display: flex
</style>
