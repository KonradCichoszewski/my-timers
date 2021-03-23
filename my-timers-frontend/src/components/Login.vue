<template>
  <div class="login">
    <div class="tile">
      <div class="header-container">
        <div class="header">{{ $t("login") }}</div>
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
      <button @click="handleLogin">{{ $t("submit") }}</button>
      <p class="err" v-if="err">{{ $t("loginErr") }}</p>
      <p class="err" v-if="wrongCredentials">{{ $t("wrongCredentials") }}</p>
    </div>
  </div>
</template>

<script>
// axios import commented out on request to detach frontend from backend
// import axios from "axios";

export default {
  data() {
    return {
      email: null,
      password: null,
      err: false,
      wrongCredentials: false,
    };
  },
  watch: {
    err() {
      if (this.err) {
        setTimeout(() => {
          this.err = false;
        }, 4000);
      }
    },
    wrongCredentials() {
      if (this.wrongCredentials) {
        setTimeout(() => {
          this.wrongCredentials = false;
        }, 4000);
      }
    },
  },
  methods: {
    handleLogin() {
      // API call commented out on request to detach frontend from backend

      // axios
      //   .post("http://localhost:8000/user/login/", {
      //     email: this.email,
      //     password: this.password,
      //   })
      //   .then((res) => {
      //     this.$store.commit("setToken", res.data.token);
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //     this.err = true;
      //   });

      if (this.email == "admin@admin.com" && this.password == "admin") {
        this.$store.commit("setToken", "fakeToken");
      } else {
        this.wrongCredentials = true;
      }
      this.email = null;
      this.password = null;
    },
    checkEnter(e) {
      if (e.key === "Enter" || e.keyCode === 13) this.handleLogin();
    },
  },
};
</script>

<style lang="sass" scoped>
.login
  display: flex
  justify-content: center
  align-items: center

.tile
  background: white
  padding: 20px
  padding-top: 40px
  border: 1px solid var(--border)
  border-radius: 5px
  display: flex
  flex-direction: column
  transition-duration: 0.08s
  background-color: transparent
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
  padding: 4px 0

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
  //   color: var(--font)

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