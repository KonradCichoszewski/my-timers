<template>
  <div class="login">
    <div class="tile">
      <div class="header-container">
        <div class="header">LOGIN</div>
      </div>
      <div class="field-wrapper">
        <input type="text" placeholder="johnny123@domain.com" v-model="email" />
        <label>email</label>
      </div>
      <div class="field-wrapper">
        <input type="password" placeholder="iamdaboss" v-model="password" />
        <label>password</label>
      </div>
      <button @click="handleLogin">LOGIN</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: null,
      password: null,
    };
  },
  methods: {
    handleLogin() {
      this.$store.dispatch("login", {
        email: this.email,
        password: this.password,
      });
      this.email = null;
      this.password = null;
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
	background-color: var(--bg)
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

.field-wrapper
	display: flex
	flex-direction: column
	transition-duration: .8s

	&:hover
		> label
			transform: translateX(5px)
			color: #222

input
	background-color: var(--bg)
	outline: none
	border: none
	border-bottom: 1px solid var(--border)
	transition-duration: .08s
	&::placeholder
		color: var(--font)

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
	&:hover
		transform: scale(1.02, 1.02)
</style>