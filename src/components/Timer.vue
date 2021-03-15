<template>
  <div class="timer">
    <div class="title">{{ timer.title }}</div>
    {{
      `${formattedTime.days} days, ${formattedTime.hours} hours, ${formattedTime.minutes} minutes, ${formattedTime.seconds} seconds`
    }}
  </div>
</template>

<script>
export default {
  props: ["timer"],
  computed: {
    timeLeft() {
      let timeLeft = this.timer.date - this.$store.state.currentTime;
      if (timeLeft > 0) {
        return timeLeft;
      } else return "Time is up!";
    },
    formattedTime() {
      let days = Math.floor(this.timeLeft / (3600 * 24));
      let hours = Math.floor((this.timeLeft - days * 3600 * 24) / 3600);
      let minutes = Math.floor(
        (this.timeLeft - days * 3600 * 24 - hours * 3600) / 60
      );
      let seconds =
        this.timeLeft - days * 3600 * 24 - hours * 3600 - minutes * 60;
      return {
        days,
        hours,
        minutes,
        seconds,
      };
    },
  },
};
</script>

<style lang="sass" scoped>
.timer
  padding: 20px
  border: 1px solid #ddd
  border-radius: 5px
  margin: 10px 0

  .title
</style>