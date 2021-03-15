<template>
  <div class="create-timer">
    <div class="tile">
      <div class="header-container">
        <div class="header">ADD NEW TIMER</div>
      </div>
      <div class="field-wrapper">
        <input type="text" placeholder="My awesome timer" v-model="name" />
        <label>timer name</label>
      </div>
      <button @click="createTimer">CREATE TIMER</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: null,
    };
  },
  methods: {
    createTimer() {
      console.log(this.name);
      this.name = null;
    },
  },
};
</script>

<style lang="sass" scoped>
.create-timer
  flex-grow: 1
  display: flex
  justify-content: center
  align-items: center
  background-color: orange
  padding: 40px

.tile
  flex-grow: 1
  background: white
  padding: 20px
  padding-top: 40px
  border: 1px solid #ddd
  border-radius: 5px
  display: flex
  flex-direction: column
  transition-duration: 0.08s
  &:hover
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