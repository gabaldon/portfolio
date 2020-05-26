<template>
  <div>
    <NavBar />
    <nuxt />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
  components: {
    NavBar
  },
  data() {
    return {
      show: false,
    }
  },
  created() {
    this.$route.path !== '/' 
      ? this.show = true
      : this.show = false
  }
}
</script>

<style lang="scss">

html {
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background-color: #fcfcfc;
  scroll-behavior: smooth;
}
a {
  text-decoration: none;
  color: rgb(44, 44, 44);
  & :active {
    color: black;
  }
  &:hover,
  &:active {
    text-shadow: 2px 2px  #fbfd6b;
    cursor: pointer;
  }
}
.row {
  justify-content: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
}
.title {
  position: fixed;
  z-index: 1;
  text-shadow: 2px 2px  rgb(251, 253, 107);
}
.column {
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
}
img {
  max-width: 100%;
  height: auto;
}
body {
  margin: 0;
  padding: 0;
}
</style>
