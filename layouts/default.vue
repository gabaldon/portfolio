<template>
  <div>
    <NavBar />
    <transition :name="transitionName">
      <nuxt />
    </transition>
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
      transitionName: 'fade',
    }
  },
  watch: {
    $route(to, from) {
      this.loading = false
      window.scrollTo( 0, 0 )
      if (to.path === '/') {
        this.transitionName = 'fade'
      } else {
        window.pageYOffset > 1 ? this.transitionName = 'fade' : this.transitionName = 'translate'
      }
    },
  },
  created() {
    this.$route.path !== '/' 
      ? this.show = true
      : this.show = false
  }
}
</script>

<style lang="scss">
.fade-enter-active {
  transition: all 1s;
}
.fade-enter {
  opacity: 0;
}
.translate-enter-active {
  transition: all 1s;
}
.translate-enter {
  opacity: 0;
  transform: translateY(600px)
}

html {
  font-size: 14px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background-color: #fcfcfc;
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
  display: grid;
  grid-template-columns: 35vw 35vw;
  column-gap: 30px;
  margin-bottom: 30px;
  margin-left: 150px;
  justify-content: center;
  &.last {
    margin-bottom: 0px;
  }
}
.page-centered {
  grid-template-columns: 50vw;
}
.empty {
  background-color: rgb(251, 253, 107);
}
.title {
  position: fixed;
  z-index: 1;
  text-shadow: 2px 2px  rgb(251, 253, 107);
}
img {
  max-width: 100%;
  height: auto;
}
body {
  margin: 0;
  padding: 0;
}
@media (max-width: 1024px) {
  .row {
    grid-template-columns: auto;
    margin: 0px;
  }
  .img-container {
    margin: 0px 30px 0px 30px;
    &.last {
      margin-bottom: 0px;
    }
  }
  .page-centered {
    margin-top: 150px;
  }
  .double-col {
    margin-bottom: 14px;
    column-gap: 14px;
    grid-template-columns: auto auto;
    margin: 0px 30px 30px 30px;
  }
}
</style>
