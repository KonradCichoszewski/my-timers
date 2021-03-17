<template>
  <div
    class="timer"
    @click="
      $store.dispatch('deleteTimer', {
        timerId: timer.id,
        token: $store.state.token,
      })
    "
  >
    <div class="title">{{ timer.title }}</div>
    <div class="delete"></div>
    <div class="clock">
      <div
        v-for="datePart of dateParts"
        :key="datePart.label"
        class="date-part"
      >
        <div class="digits">
          <span
            class="digit"
            v-for="digit of datePart.number"
            :key="digit.id"
            >{{ digit }}</span
          >
        </div>
        <div class="label">{{ datePart.label }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import i18n from "@/plugins/i18n.js";

export default {
  props: ["timer"],
  computed: {
    timeLeft() {
      return this.timer.date - this.$store.state.currentTime;
    },
    dateParts() {
      let days = Math.floor(this.timeLeft / (3600 * 24));
      let hours = Math.floor((this.timeLeft - days * 3600 * 24) / 3600);
      let minutes = Math.floor(
        (this.timeLeft - days * 3600 * 24 - hours * 3600) / 60
      );
      let seconds =
        this.timeLeft - days * 3600 * 24 - hours * 3600 - minutes * 60;

      let dateParts = [
        {
          number: days.toString().split(""),
          label: i18n.t("noOfDays"),
        },
        {
          number: hours.toString().split(""),
          label: i18n.t("noOfHours"),
        },
        {
          number: minutes.toString().split(""),
          label: i18n.t("noOfMinutes"),
        },
        {
          number: seconds.toString().split(""),
          label: i18n.t("noOfSeconds"),
        },
      ];

      dateParts.forEach((part) => {
        if (part.number.length < 2) {
          part.number.unshift("0");
        }
        if (this.timeLeft <= 0) {
          part.number = ["0", "0"];
        }
      });

      return dateParts;
    },
  },
  watch: {
    timeLeft() {
      if (this.timeLeft <= -3) {
        this.$store.dispatch("deleteTimer", this.timer.id);
      }
    },
  },
};
</script>

<style lang="sass" scoped>
.timer
  padding: 20px
  border: 1px solid var(--border)
  border-radius: 5px
  margin: 10px 0
  position: relative
  margin: 30px 20px
  width: 400px
  cursor: pointer
  transition-duration: 0.15s
  &:hover
    border-color: var(--borderDelete)
    background-color: var(--bgDelete)
    transform: translate3d(-2px, -2px, 0)
    box-shadow: 3px 3px 6px var(--timerShadow)
    .delete
      opacity: 1

.title
  position: absolute
  bottom: 90px
  padding: 5px 15px
  background: var(--accent)
  transform: skew(-10deg)

.delete
  height: 40px
  width: 40px
  position: absolute
  // background-image: url("")
  right: -50px
  top: 20px
  border-radius: 3px
  justify-content: center
  align-items: center
  cursor: pointer
  display: flex
  opacity: 0
  font-size: 50px
  transition-duration: .1s

.clock
  display: flex
  justify-content: center

.date-part
  display: inline-flex
  flex-direction: column
  align-items: center
  justify-content: center
  margin: 0 10px

.digits
  margin-bottom: 5px

.digit
  background: var(--digitBg)
  color: var(--digitFont),
  margin: 2px,
  padding: 2px,
  border-radius: 3px
  font-size: 30px

.label
  color: var(--font)
</style>