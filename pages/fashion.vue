<template>
  <div class="container" @mousemove="updateCoordinates">
    <div class="row">
      <p v-show="texts[0].show" class="title" :style="{ top: y + 'px', left: x + 'px' }">
        {{ texts[0].title }}
      </p>
      <div class="colum cursor" @mousemove="texts[0].show = true" @mouseleave="texts[0].show = false">
        <img v-lazy="images[0]" alt="Chica en silla">
      </div>
      <p v-show="texts[1].show" class="title" :style="{ top: y + 'px', left: x + 'px' }">
        {{ texts[1].title }}
      </p>
      <div class="colum cursor" @mousemove="texts[1].show = true" @mouseleave="texts[1].show = false">
        <img v-lazy="images[1]" alt="Yung Beef">
      </div>
    </div>
    <div class="row">
      <p v-show="texts[2].show" class="title" :style="{ top: y + 'px', left: x + 'px' }">
        {{ texts[2].title }}
      </p>
      <div class="colum cursor" @mousemove="texts[2].show = true" @mouseleave="texts[2].show = false">
        <img v-lazy="images[2]" alt="Chico en blanco y negro">
      </div>
    </div>
    <div class="row">
      <p v-show="texts[3].show" class="title" :style="{ top: y + 'px', left: x + 'px' }">
        {{ texts[3].title }}
      </p>
      <div class="colum cursor" @mousemove="texts[3].show = true" @mouseleave="texts[3].show = false">
        <img v-lazy="images[3]" alt="Chico con ropa verde">
      </div>
      <p v-show="texts[4].show" class="title" :style="{ top: y + 'px', left: x + 'px' }">
        {{ texts[4].title }}
      </p>
      <div class="colum cursor" @mousemove="texts[4].show = true" @mouseleave="texts[4].show = false">
        <img v-lazy="images[4]" alt="Chica con ropa amarilla">
      </div>
    </div>
    <nuxt-link class="arrow-container" to="/landscapes">
      <p class="go-next">
        Go to landscapes
      </p>
      <img v-lazy="require('@/assets/images/arrow-to-right.svg')" class="arrow" alt="arrow to right">
    </nuxt-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  head () {
    return {
      title: 'Fashion - Elisa S Fernández',
    }
  },
  data () {
    return {
      x: 0,
      y: 0,
      texts: [
        { 
          title: 'MARIA KE FISHERMAN, TENTACIONES EL PAÍS',
          show: false,
        },
        { 
          title: 'YUNG BEEF, TENTACIONES EL PAÍS',
          show: false,
        },
        { 
          title: 'PALOMO SPAIN, ICON EL PAÍS',
          show: false,
        },
        { 
          title: 'PALOMO SPAIN, ICON EL PAÍS',
          show: false,
        },
        { 
          title: 'SITA ABELLÁN, TENTACIONES EL PAÍS',
          show: false,
        },
      ],
      images: [
        {
          src: require('@/assets/images/fashion/MariaKfisherman_1.jpg'),
          loading: require('@/assets/images/fashion/MariaKfisherman_1_LQ.jpg')
        },
        {
          src: require('@/assets/images/fashion/yung_beef_2.jpg'),
          loading: require('@/assets/images/fashion/yung_beef_2_LQ.jpg')
        },
        {
          src: require('@/assets/images/fashion/Palomo_Spain_BN_3.jpg'),
          loading: require('@/assets/images/fashion/Palomo_Spain_BN_3_LQ.jpg')
        },
        {
          src: require('@/assets/images/fashion/Palomo_Spain_Naranja_4.jpg'),
          loading: require('@/assets/images/fashion/Palomo_Spain_Naranja_4_LQ.jpg')
        },
        {
          src: require('@/assets/images/fashion/Sita_abellan_5.jpg'),
          loading: require('@/assets/images/fashion/Sita_abellan_5_LQ.jpg')
        }
      ]
    }
  },
  computed: {
    ...mapState({
      scrollDown: state => state.scrollDown,
      isMobile: state => state.isMobile,
    }),
  },
  watch: {
    scrollDown () {
      if (this.isMobile) {
        this.texts.forEach(text => {
          text.show = false
        })
      }
    }
  },
  created () {
    this.scrollToTop()
  },
  methods: {
    hideTitles() {
      this.texts.forEach(text => {
        text.show = false
      })
    },
    scrollToTop() {
      window.scrollTo(0,0);
    },
    updateCoordinates(event) {
      this.x = event.clientX;
      this.y = event.clientY;
    },
  }
}
</script>

<style lang="scss" scoped>
.page-enter-active {
  transition: all 1s;
}
.page-enter {
  opacity: 0;
  transform: translateY(600px)
}

.container {
  padding-top: 70px;
  padding-left: 100px;
  .cursor {
    cursor: none;
  }
  img {
    min-height: 70%;
    min-width: 70%;
    max-height: 90vh;
    max-width: 70vw;
    padding: 20px;
  }
  img[lazy=loading]{
    min-height: 200px;
    min-width: 200px;
  }
  .arrow-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    padding-right: 55px;
    padding: 14px;
    .go-next {
      text-shadow: 2px 2px  rgb(251, 253, 107);
    }
    .arrow {
      min-height: 0;
      min-width: 0;
      padding: 8px;
      width: 13px;
    }
  }
}
@media (max-width: 1024px) {
  .container {
    padding-left: 0px;
    padding-top: 0px;
  }
}
</style>
