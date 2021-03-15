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
  height: 100vh
  justify-content: space-evenly
  background-color: #ffffff
  background-image: linear-gradient(135deg, #ffffff 0%, #e2e2e2 100%)
</style>