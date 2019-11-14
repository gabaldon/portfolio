<template>
  <div class="nav-bar">
    <div class="top-bar">
      <div class="about" @click="toogleSideBar = !toogleSideBar">
        <h1 class="logo">
          <span class="logo-br-pnk">ELISA</span><br><span class="logo-br-in">S</span><span class="logo-br">FERNÁNDEZ </span>
        </h1>
      </div>
    </div>
    <div id="side-bar">
      <transition name="translate-in">
        <ul v-if="windowWidth < 1024 ? toogleSideBar : toogleSideBar = true" class="side-bar">
          <li @click="windowWidth < 1024 ? toogleSideBar = false : toogleSideBar = true">
            <nuxt-link class="nav-link home" to="/">
              HOLA!
            </nuxt-link>
          </li>
          <li @click="windowWidth < 1024 ? toogleSideBar = false : toogleSideBar = true">
            <nuxt-link active-class="active" class="nav-link portraits" to="/portraits">
              PORTRAITS
            </nuxt-link>
          </li>
          <li @click="windowWidth < 1024 ? toogleSideBar = false : toogleSideBar = true">
            <nuxt-link active-class="active" class="nav-link fashion" to="/fashion">
              FASHION
            </nuxt-link>
          </li>
          <li @click="windowWidth < 1024 ? toogleSideBar = false : toogleSideBar = true">
            <nuxt-link active-class="active" class="nav-link landscapes" to="/landscapes">
              LANDSCAPES
            </nuxt-link>
          </li>
          <li @click="windowWidth < 1024 ? toogleSideBar = false : toogleSideBar = true">
            <nuxt-link active-class="active" class="nav-link product" to="/product">
              PRODUCT
            </nuxt-link>
          </li>
          <li @click="windowWidth < 1024 ? toogleSideBar = false : toogleSideBar = true">
            <nuxt-link active-class="active" class="nav-link contact" to="/contact">
              CONTACT
            </nuxt-link>
          </li>
        </ul>
      </transition>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      toogleSideBar: true,
      scrollPosition: null,
      windowWidth: null
      // documentHeight: null
    }
  },
  mounted () {
    this.onScroll()
    window.addEventListener('scroll', this.updateScroll)
    window.addEventListener('window', this.updateWindowWidth)
    this.updateWindowWidth()
    // window.addEventListener('document', this.updateDocumentHeight)
    // this.updateDocumentHeight()
  },
  methods: {
    onScroll () {
      let prevScrollpos = window.pageYOffset
      if (window.innerWidth > 1024) {
        window.onscroll = function () {
          const currentScrollPos = window.pageYOffset
          if (prevScrollpos > currentScrollPos) {
            document.getElementById('side-bar').style.top = '80px'
          } else {
            document.getElementById('side-bar').style.top = '-400px'
          }
          prevScrollpos = currentScrollPos
        }
      }
    },
    // updateDocumentHeight () {
    //   this.documentHeight = document.getElementById('footer').offsetTop
    // },
    updateScroll () {
      this.scrollPosition = window.innerHeight + window.scrollY
    },
    updateWindowWidth () {
      this.windowWidth = window.innerWidth
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-bar,
.nav-bar-mobile {
  position: fixed;
  z-index: 500;
  width: 100vw;
  // background-color: white;
  // display: flex;
  // justify-content: space-between;
  // align-items: center;
  .top-bar {
    padding: 20px 50px;
    // background-color: white;
    display: flex;
    justify-content: space-between;
    .logo {
      padding: 10px 30px;
      margin: 0px;
      font-size: 13px;
      line-height: 1.8;
      text-shadow: none;
      &:hover .logo-br{
        background-image: linear-gradient(to top, rgb(251, 253, 107) 50%, transparent 50%);
        background-position: 0 100%;
        transition: background-position 300ms, color 300ms ease, border-color 300ms ease;
        cursor: pointer;
      }
      &:hover .logo-br-pnk{
        background-image: linear-gradient(to top, #ffc0cb 50%, transparent 50%);
        background-position: 0 100%;
        transition: background-position 300ms, color 300ms ease, border-color 300ms ease;
        cursor: pointer;
      }
      .logo-br {
        border: 1px solid black;
        margin-bottom: 20px;
        padding: 3px;
        background-size: 200% 200%;
        background-image: linear-gradient(to top, rgb(251, 253, 107) 50%, transparent 50%);
        transition: background-position 300ms, color 300ms ease, border-color 300ms ease;
      }
      .logo-br-pnk {
        border: 1px solid black;
        margin-bottom: 20px;
        padding: 3px;
        background-size: 200% 200%;
        background-image: linear-gradient(to top, pink 50%, transparent 50%);
        transition: background-position 300ms, color 300ms ease, border-color 300ms ease;
      }
      .logo-br-in {
        padding: 5px;
      }
    }
  }
  .translate-in-enter-active {
    transition: all .3s ease;
  }
  .translate-in-leave-active {
    transition: top 500ms translateY(80px);
  }
  .translate-in-enter {
    transform: translateY(-400px);
  }
  .tranlate-in-leave-to {
    transform: translateY(80px);
  }
  #side-bar {
    position: fixed;
    top: 80px;
    display: block;
    transition: top 0.3s;
  }
  .side-bar {
    // display: flex;
    & .hidden-navbar {
      box-shadow: none;
      transform: translate3d(0, -100%, 0);
    }
    & li{
      list-style-type: none;
      padding: 10px 40px;
      margin: 0px;
    }
    .active {
      text-shadow: 2px 2px  rgb(251, 253, 107);
    }
    .contact {
      display: none;
    }
  }
}
@media (max-width: 1024px) {
  .nav-bar {
    position: fixed;
    z-index: 500;
    width: 100vw;
    // display: block;
    display: flex;
    justify-content: left;
    flex-direction: column;
    align-items: left;
    .top-bar {
      padding: 20px 35px;
    }
    .side-bar {
      display: block;
      margin: 0 auto;
      // background-color: white;
      text-align: left;
      padding: 50px 50px 50px 30px;

      .nav-link {
        background-color: rgba(251, 253, 107, 0.603);
        text-shadow: none;
      }
      .contact {
        display: inline-block;
      }
    }
    .translate-in-enter-active {
      transition: all .3s ease;
    }
    .translate-in-leave-active {
      transition: top 500ms translateY(80px);
    }
    .translate-in-enter {
      transform: translateY(-400px);
    }
    .tranlate-in-leave-to {
      transform: translateY(80px);
    }
    #side-bar {
      position: absolute;
    }
    .logo-br {
      transition: background-position 2000ms, color 2000ms ease, border-color 2000ms ease;
      background-size: 200% 200%;
      background-image: linear-gradient(to top, rgb(251, 253, 107) 50%, transparent 50%);
      background-position: 0 100%;
    }
    .logo-br-pnk {
      transition: background-position 2000ms, color 2000ms ease, border-color 2000ms ease;
      background-size: 200% 200%;
      background-image: linear-gradient(to top, pink 50%, transparent 50%);
      background-position: 0 100%;
    }
  }
  .nav-bar-mobile {
    position: fixed;
    z-index: 500;
    width: 100vw;
    // height: 100vh;
    // background-color: white;
    display: block;
    display: flex;
    justify-content: left;
    flex-direction: column;
    align-items: left;
    .side-bar {
      display: block;
      margin: 0 auto;
      // background-color: white;
      text-align: left;
      padding: 50px;
      li {
        display: flex;
        justify-content: left;
      }
      .nav-link {
        background-color: rgb(251, 253, 107);
      }
    }
    #side-bar {
      position: absolute;
    }
    .logo-br {
      transition: background-position 2000ms, color 2000ms ease, border-color 2000ms ease;
      background-size: 200% 200%;
      background-image: linear-gradient(to top, rgb(251, 253, 107) 50%, transparent 50%);
      background-position: 0 100%;
    }
    .logo-br-pnk {
      transition: background-position 2000ms, color 2000ms ease, border-color 2000ms ease;
      background-size: 200% 200%;
      background-image: linear-gradient(to top, pink 50%, transparent 50%);
      background-position: 0 100%;
    }
  }
}
</style>
