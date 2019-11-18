<template>
  <div>
    <NavBar />
    <transition name="slide">
      <nuxt />
    </transition>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
  components: {
    NavBar
  }
}
</script>

<style lang="scss">
@font-face {
  font-family: "00600Regular";
  src: url("/fonts/00600Regular.ttf") format("truetype");
  font-style: normal;
  font-weight: normal;
}
html {
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background-color: rgb(252, 252, 252);
}
.slide-enter {
  transform: translateY(10%);
  transition-property: all;
  transition-duration: 0.02s;
}
.slide-enter-to {
  transform: translateY(0);
  opacity: 0.5;
}
.slide-enter-active {
  position: absolute;
  opacity: 0;
}
.slide-enter-active,
.slide-leave-active { transition: all 500ms ease-in-out }
a {
  text-decoration: none;
  color: rgb(44, 44, 44);
  & :active {
    color: black;
  }
  &:hover,
  &:active {
    text-shadow: 2px 2px  rgb(251, 253, 107);
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
  flex: 1;
}
body {
  margin: 0;
  padding: 0;
  font-size: 13px;
}
@media (max-width: 1024px) {
  img {
    max-width: 90vw;
    max-height: 90vh;
    height: auto;
    padding: 0px;
  }
}
</style>
