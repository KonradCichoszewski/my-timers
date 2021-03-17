<template>
  <div class="login-view">
    <Register />
    <Login />
  </div>
</template>

<script>
import Register from "@/components/Register.vue";
import Login from "@/components/Login.vue";
export default {
  components: { Login, Register },
};
</script>

<style lang="sass" scoped>
.login-view
  display: flex
  justify-content: space-evenly
  height: 100vh
</style>