<template>
  <div class="create-timer">
    <div class="tile">
      <div class="header-container">
        <div class="header">{{ $t("newTimer") }}</div>
      </div>
      <div class="field-wrapper">
        <input
          type="text"
          :placeholder="$t('timerPlaceholder')"
          v-model="name"
        />
        <label>{{ $t("timerName") }}</label>
      </div>
      <div class="triple-input">
        <div class="field-wrapper">
          <input type="number" v-model="year" />
          <label>{{ $t("year") }}</label>
        </div>
        <div class="field-wrapper">
          <input type="number" placeholder="01" v-model="month" />
          <label>{{ $t("month") }}</label>
        </div>
        <div class="field-wrapper">
          <input type="number" placeholder="01" v-model="day" />
          <label>{{ $t("day") }}</label>
        </div>
      </div>
      <div class="triple-input">
        <div class="field-wrapper">
          <input type="number" placeholder="00" v-model="hours" />
          <label>{{ $t("hours") }}</label>
        </div>
        <div class="field-wrapper">
          <input type="number" placeholder="00" v-model="minutes" />
          <label>{{ $t("minutes") }}</label>
        </div>
        <div class="field-wrapper">
          <input type="number" placeholder="00" v-model="seconds" />
          <label>{{ $t("seconds") }}</label>
        </div>
      </div>
      <button @click="createTimer">{{ $t("addTimer") }}</button>
      <p class="smallDate" v-if="tooLong">
        {{ $t("tooLong") }}
      </p>
      <p class="smallDate" v-if="smallDate">
        {{ $t("smallDate") }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    let date = new Date();
    return {
      name: "",
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate(),
      hours: date.getHours(),
      minutes: date.getMinutes(),
      seconds: date.getSeconds(),
      smallDate: false,
      tooLong: false,
    };
  },
  methods: {
    createTimer() {
      this.name = this.name.trim();
      if (!this.name) this.name = "No title";
      let date = Math.floor(
        new Date(
          this.year,
          this.month - 1,
          this.day,
          this.hours,
          this.minutes,
          this.seconds
        ).getTime() / 1000
      );
      if (date < Math.floor(Date.now() / 1000)) {
        this.smallDate = true;
      } else if (this.name.length > 40) {
        console.log(this.name.length);
        this.tooLong = true;
      } else {
        this.$store.dispatch("addTimer", {
          date: Math.floor(
            new Date(
              this.year,
              this.month - 1,
              this.day,
              this.hours,
              this.minutes,
              this.seconds
            ).getTime() / 1000
          ),
          title: this.name,
          token: this.$store.state.token,
        });
        this.name = "";
      }
    },
  },
  watch: {
    smallDate() {
      if (this.smallDate) {
        setTimeout(() => (this.smallDate = false), 3000);
      }
    },
    tooLong() {
      if (this.tooLong) {
        setTimeout(() => (this.tooLong = false), 3000);
      }
    },
    year() {
      if (this.year > 10000) this.year = 10000;
    },
    month() {
      if (this.month > 12) this.month = 12;
    },
    day() {
      if (this.day > 31) this.day = 31;
    },
    hours() {
      if (this.hours > 23) this.hours = 23;
    },
    minutes() {
      if (this.minutes > 59) this.minutes = 59;
    },
    seconds() {
      if (this.seconds > 59) this.seconds = 59;
    },
  },
};
</script>

<style lang="sass" scoped>
.create-timer
  display: flex
  align-items: flex-start
  justify-content: center
  padding: 40px
  width: 40vw
  padding-top: 100px

.tile
  flex-grow: 1
  background-image: var(--bg)
  padding: 20px
  padding-top: 40px
  border: 1px solid var(--border)
  border-radius: 5px
  display: flex
  flex-direction: column
  transition-duration: 0.08s
  max-width: 500px
  position: sticky
  top: 100px
  &:hover
    border-color: #ccc

.header-container
  position: relative

.header
  position: absolute
  bottom: 20px
  background-color: var(--accent)
  padding: 10px 20px
  border-radius: 5px
  transform: skew(-10deg)
  color: var(--font)

.field-wrapper
  display: flex
  flex-direction: column
  transition-duration: .8s

  &:hover
    > label
      transform: translateX(5px)
      color: var(--accent)

input
  outline: none
  border: none
  background: transparent
  border-bottom: 1px solid var(--border)
  transition-duration: .08s
  color: var(--font)
  &::placeholder
    color: var(--font)

label
  padding: 3px 0px 20px 0px
  transition-duration: .08s
  color: var(--font)

.triple-input
  display: flex
  justify-content: space-between
  & input
    max-width: 100px

button
  border: none
  outline: none
  background-color: var(--accent)
  padding: 10px
  cursor: pointer
  transition-duration: .08s
  border-radius: 5px
  color: var(--font)
  &:hover
    transform: scale(1.02, 1.02)

.smallDate
  color: red
  position: absolute
  bottom: -40px
</style>