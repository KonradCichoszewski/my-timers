<template>
  <!-- component disabled on request to detach frontend from backend -->
  <div class="register">
    <div class="tile">
      <div class="header-container">
        <div class="header">{{ $t("register") }}</div>
      </div>
      <div class="field-wrapper">
        <input type="text" placeholder="Johnny" v-model="name" />
        <label>{{ $t("name") }}</label>
      </div>
      <div class="field-wrapper">
        <input type="text" placeholder="johnny123@domain.com" v-model="email" />
        <label>{{ $t("email") }}</label>
      </div>
      <div class="field-wrapper">
        <input
          type="password"
          placeholder="iamdaboss"
          v-model="password"
          @keydown="checkEnter"
        />
        <label>{{ $t("password") }}</label>
      </div>
      <button @click="register">
        {{ $t("createAccount") }}
      </button>
      <p class="info" v-if="message">{{ $t("regSuccess") }}</p>
      <p class="err" v-if="err">{{ $t("regErr") }}</p>
      <p class="err" v-if="registerAttempt">{{ $t("regAttempt") }}</p>
    </div>
  </div>
</template>

<script>
// axios import commented out on request to detach frontend from backend
// import axios from "axios";

export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      message: false,
      err: false,
      registerAttempt: false,
    };
  },
  methods: {
    register() {
      // API call commented out on request to detach frontend from backend

      // axios
      //   .post("http://localhost:8000/user/register/", {
      //     name: this.name,
      //     email: this.email,
      //     password: this.password,
      //   })
      //   .then((res) => {
      //     console.log(res.data);
      //     this.message = true;
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //     this.err = true;
      //   });
      this.registerAttempt = true;
      this.name = null;
      this.email = null;
      this.password = null;
    },
    checkEnter(e) {
      if (e.key === "Enter" || e.keyCode === 13) this.register();
    },
  },
  watch: {
    message() {
      if (this.message) {
        setTimeout(() => {
          this.message = false;
        }, 4000);
      }
    },
    err() {
      if (this.err) {
        setTimeout(() => {
          this.err = false;
        }, 4000);
      }
    },
    registerAttempt() {
      if (this.registerAttempt) {
        setTimeout(() => {
          this.registerAttempt = false;
        }, 4000);
      }
    },
  },
};
</script>

<style lang="sass" scoped>
.register
  display: flex
  justify-content: center
  align-items: center

.tile
  background-color: transparent
  padding: 20px
  padding-top: 40px
  border: 1px solid var(--border)
  border-radius: 5px
  display: flex
  flex-direction: column
  transition-duration: 0.08s
  position: relative
  min-width: 300px
  &:hover
    transform: scale(1.1)
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
  padding: 3px 0
  &:hover
    > label
      transform: translateX(5px)
      color: var(--accent)

input
  background-color: transparent
  outline: none
  border: none
  border-bottom: 1px solid var(--border)
  transition-duration: .08s
  color: var(--font)
  // &::placeholder
    // color: var(--font)

label
  padding: 3px 0px 20px 0px
  transition-duration: .08s
  color: var(--font)

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

.info
  position: absolute
  bottom: -90px
  left: 0
  color: #5f5
  width: 100%
  padding: 10px
  border-radius: 5px
  background-color: transparent

.err
  position: absolute
  bottom: -70px
  left: 0
  background-color: #eeffee
  color: red
  width: 100%
  padding: 10px
  border-radius: 5px
  background-color: transparent
</style>