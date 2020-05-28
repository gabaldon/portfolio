<template>
  <div class="nav-bar">
    <div class="top-bar">
      <div class="about" @click="toogleSideBar = !toogleSideBar">
        <h1 class="logo">
          <span class="logo-br-pnk">ELISA</span>
          <span>
            <span class="logo-br-in">S</span>
            <span class="logo-br">FERNÁNDEZ </span>
          </span>
        </h1>
      </div>
    </div>
    <div id="side-bar">
      <transition name="translate-in">
        <ul v-if="toogleSideBar" class="side-bar">
          <li @click="toogle()">
            <nuxt-link class="nav-link home" to="/">
              HOLA!
            </nuxt-link>
          </li>
          <li @click="toogle()">
            <nuxt-link active-class="active" class="nav-link projects" to="/projects">
              PROJECTS
            </nuxt-link>
          </li>
          <li @click="toogle()">
            <nuxt-link active-class="active" class="nav-link portraits" to="/portraits">
              PORTRAITS
            </nuxt-link>
          </li>
          <li @click="toogle()">
            <nuxt-link active-class="active" class="nav-link fashion" to="/fashion">
              FASHION
            </nuxt-link>
          </li>
          <li @click="toogle()">
            <nuxt-link active-class="active" class="nav-link landscapes" to="/landscapes">
              LANDSCAPES
            </nuxt-link>
          </li>
          <li @click="toogle()">
            <nuxt-link active-class="active" class="nav-link product" to="/product">
              PRODUCT
            </nuxt-link>
          </li>
          <li @click="toogle()">
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
import { mapMutations, mapState } from 'vuex'

export default {
  data () {
    return {
      toogleSideBar: true,
    }
  },
  computed: {
    ...mapState({
      isMobile: state => state.isMobile
    })
  },
  watch: {
    toogleSideBar () {
      this.toogleBar()
    },
  },
  mounted () {
    this.onScroll()
    window.addEventListener('scroll', this.updateScroll)
    if (this.isMobile && this.$route.path !== '/') {
      this.toogleSideBar = false
    }
  },
  methods: {
    ...mapMutations([
      'toogleBar',
      'detectClick',
      'toggleDesktopBar',
      'toggleScrollDown',
    ]),
    toogle () {
      this.detectClick()
      this.isMobile ? this.toogleSideBar = false : this.toogleSideBar = true
    },
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
    updateScroll () {
      this.toggleScrollDown()
      document.getElementById('side-bar').style.top === '80px' ? this.toggleDesktopBar({ toggle: false }) : this.toggleDesktopBar({ toggle: true })
    },
  }
}
</script>

<style lang="scss" scoped>
.nav-bar,
.nav-bar-mobile {
  width: max-content;
  position: fixed;
  z-index: 500;
  .top-bar {
    width: max-content;
    padding: 20px 50px;
    display: flex;
    justify-content: space-between;
    .logo {
      padding: 10px 30px;
      margin: 0px;
      font-size: 14px;
      font-weight: 500;
      line-height: 1.7;
      text-shadow: none;
      display: grid;
      &:hover .logo-br {
        background-image: linear-gradient(to top, #fbfd6b 50%, transparent 50%);
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
        padding: 0px 3px;
        width: min-content;
        background-size: 200% 200%;
        background-image: linear-gradient(to top, pink 50%, transparent 50%);
        transition: background-position 300ms, color 300ms ease, border-color 300ms ease;
      }
    }
  }
  .translate-in-enter-active {
    -webkit-transition: all .3s ease;
    -moz-transition: all .3s ease;
    -o-transition: all .3s ease;
    transition: all .3s ease;
  }
  .translate-in-leave-active {
    -webkit-transition: 500ms;
    -moz-transition: 500ms;
    -o-transition: 500ms;
    transition: 500ms;
  }
  .translate-in-enter,
  .translate-in-leave-active {
    transform: translateY(-400px);
  }
  #side-bar {
    position: fixed;
    top: 80px;
    display: block;
    transition: top 0.3s;
    -webkit-transition: top 0.3s;
    -moz-transition: top 0.3s;
    -o-transition: top 0.3s;
  }
  .side-bar {
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
      text-shadow: 2px 2px  #ffc0cb94;
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
      text-align: left;
      padding: 50px 50px 50px 30px;

      .nav-link {
        background-color: rgba(251, 253, 107, 0.603);
        text-shadow: none;
      }
      .contact {
        display: inline-block;
      }
      .active {
        background-color: #ffc0cb94;
      }
    }
    .translate-in-enter-active {
      -webkit-transition: all .3s ease;
      -moz-transition: all .3s ease;
      -o-transition: all .3s ease;
      transition: all .3s ease;
    }
    .translate-in-leave-active {
      transition: top 500ms translateY(80px);
      -webkit-transition: top 500ms translateY(80px);
      -moz-transition: top 500ms translateY(80px);
      -o-transition: top 500ms translateY(80px);
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
    display: block;
    display: flex;
    justify-content: left;
    flex-direction: column;
    align-items: left;
    .side-bar {
      display: block;
      margin: 0 auto;
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
