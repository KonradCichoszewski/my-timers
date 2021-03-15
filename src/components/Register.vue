<template>
  <div class="register">
    <div class="tile">
      <div class="header-container">
        <div class="header">REGISTER</div>
      </div>
      <div class="field-wrapper">
        <input type="text" placeholder="Johnny" v-model="name" />
        <label>name</label>
      </div>
      <div class="field-wrapper">
        <input type="text" placeholder="johnny123@domain.com" v-model="email" />
        <label>email</label>
      </div>
      <div class="field-wrapper">
        <input type="password" placeholder="iamdaboss" v-model="password" />
        <label>password</label>
      </div>
      <button @click="register">CREATE ACCOUNT</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    register() {
      console.log(this.name, this.email, this.password);
      this.name = null;
      this.email = null;
      this.password = null;
      this.$router.push("/");
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
  background: white
  padding: 20px
  padding-top: 40px
  border: 1px solid #ddd
  border-radius: 5px
  display: flex
  flex-direction: column
  transition-duration: 0.08s
  &:hover
    transform: scale(1.1)
    border-color: #ccc

.header-container
  position: relative

.header
  position: absolute
  bottom: 20px
  background-color: yellow
  padding: 10px 20px
  border-radius: 5px
  transform: skew(-10deg)

.field-wrapper
  display: flex
  flex-direction: column
  transition-duration: .8s

  &:hover
    > label
      transform: translateX(5px)
      color: #222

input
  outline: none
  border: none
  border-bottom: 1px solid #ddd
  transition-duration: .08s

label
  padding: 3px 0px 20px 0px
  transition-duration: .08s
  color: #777

button
  border: none
  outline: none
  background-color: yellow
  padding: 10px
  cursor: pointer
  transition-duration: .08s
  border-radius: 5px
  &:hover
    transform: scale(1.02, 1.02)
</style>