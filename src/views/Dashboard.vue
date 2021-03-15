<template>
  <div class="dashboard">
    <TimersList />
    <CreateTimer />
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
};
</script>

<style lang="sass" scoped>
.dashboard
  display: flex
  min-height: 100vh
</style>
