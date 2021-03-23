<template>
  <div class="login-view">
    <h1 class="title">{{ $t("welcome") }}</h1>
    <div class="tiles">
      <Register />
      <Login />
    </div>
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
  flex-direction: column
  align-items: center

.tiles
  display: flex
  width: 100%
  justify-content: space-evenly
  max-width: 1300px
  transform: translateY(0vh)

.title
  color: var(--font)
  font-size: 3em
  transform: translateY(0vh)

@media screen and (max-width: 700px)
  .tiles
    flex-direction: column
</style>