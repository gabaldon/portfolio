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
@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap);
@import url(https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap);

html {
  font-family: 'Roboto Mono';
  font-weight: bold;
  font-size: 14px;
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
.column {
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  position: relative;
  flex: 1;
}
img {
  max-width: 100%;
  height: auto;
}
body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}
</style>
