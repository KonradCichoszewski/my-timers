<template>
  <div class="timer">
    <div class="title">{{ timer.title }}</div>
    <div v-for="datePart of dateParts" :key="datePart.label" class="date-part">
      <div class="digits">
        <span class="digit" v-for="digit of datePart.number" :key="digit.id">{{
          digit
        }}</span>
      </div>
      <div class="label">{{ datePart.label }}</div>
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
      });

      return dateParts;
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
  position: relative
  margin: 30px 20px
  width: 400px

.title
  position: absolute
  bottom: 90px
  padding: 5px 15px
  background: yellow
  transform: skew(-10deg)

.date-part
  display: inline-flex
  flex-direction: column
  align-items: center
  justify-content: center
  margin: 0 10px

.digits
  margin-bottom: 5px

.digit
  background: #000
  color: white,
  margin: 2px,
  padding: 2px,
  border-radius: 3px
  font-size: 30px
</style>