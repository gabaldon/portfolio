<template>
  <div class="container" @mousemove="updateCoordinates">
    <div class="row">
      <p v-show="texts[0].show" class="title" :style="{ top: y + 'px', left: x + 'px' }">
        {{ texts[0].title }}
      </p>
      <div class="colum cursor" @mousemove="texts[0].show = true" @mouseleave="texts[0].show = false">
        <img v-lazy="images[0]" alt="prueba">
      </div>
      <div class="colum cursor" @mousemove="texts[1].show = true" @mouseleave="texts[1].show = false">
        <p v-show="texts[1].show" class="title" :style="{ top: y + 'px', left: x + 'px' }">
          {{ texts[1].title }}
        </p>
        <img v-lazy="images[1]" alt="prueba">
      </div>
    </div>
    <div class="row">
      <div class="colum cursor" @mousemove="texts[2].show = true" @mouseleave="texts[2].show = false">
        <p v-show="texts[2].show" class="title" :style="{ top: y + 'px', left: x + 'px' }">
          {{ texts[2].title }}
        </p>
        <img v-lazy="images[2]" alt="prueba">
      </div>
      <div class="colum cursor" @mousemove="texts[3].show = true" @mouseleave="texts[3].show = false">
        <p v-show="texts[3].show" class="title" :style="{ top: y + 'px', left: x + 'px' }">
          {{ texts[3].title }}
        </p>
        <img v-lazy="images[3]" alt="prueba">
      </div>
    </div>
    <div class="row">
      <div class="colum">
        <img v-lazy="images[4]" alt="prueba">
      </div>
    </div>
    <div class="row">
      <div class="colum cursor" @mousemove="texts[5].show = true" @mouseleave="texts[5].show = false">
        <p v-show="texts[5].show" class="title" :style="{ top: y + 'px', left: x + 'px' }">
          {{ texts[5].title }}
        </p>
        <img v-lazy="images[5]" alt="prueba">
      </div>
      <div class="colum cursor" @mousemove="texts[6].show = true" @mouseleave="texts[6].show = false">
        <p v-show="texts[6].show" class="title" :style="{ top: y + 'px', left: x + 'px' }">
          {{ texts[6].title }}
        </p>
        <img v-lazy="images[6]" alt="prueba">
      </div>
    </div>
    <div class="row">
      <div class="colum">
        <img v-lazy="images[7]" alt="prueba">
      </div>
      <div class="colum cursor" @mousemove="texts[8].show = true" @mouseleave="texts[8].show = false">
        <p v-show="texts[8].show" class="title" :style="{ top: y + 'px', left: x + 'px' }">
          {{ texts[8].title }}
        </p>
        <img v-lazy="images[8]" alt="prueba">
      </div>
    </div>
    <div class="row">
      <div class="colum cursor" @mousemove="texts[9].show = true" @mouseleave="texts[9].show = false">
        <p v-show="texts[9].show" class="title" :style="{ top: y + 'px', left: x + 'px' }">
          {{ texts[9].title }}
        </p>
        <img v-lazy="images[9]" alt="prueba">
      </div>
      <div class="colum">
        <img v-lazy="images[10]" alt="prueba">
      </div>
    </div>
    <nuxt-link class="arrow-container" to="/fashion">
      <p class="go-next">
        Go to fashion
      </p>
      <img v-lazy="require('@/assets/images/arrow-to-right.svg')" class="arrow" alt="prueba">
    </nuxt-link>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  head () {
    return {
      title: 'Portraits - Elisa S Fernández',
      meta: [
        { hid: 'description', name: 'description', content: 'Hola! My name is Elisa and I am a photographer based in Madrid.' }
      ]
    }
  },
  data () {
    return {
      x: 0,
      y: 0,
      texts: [
        { 
          title: 'INGRID GARCÍA-JONSSON, RETINA EL PAÍS',
          show: false,
        },
        { 
          title: 'GERMÁN ALCARAZU, ICON EL PAÍS',
          show: false,
        },
        { 
          title: 'MI ABUELA',
          show: false,
        },
        { 
          title: 'BAD GYAL, TENTACIONES EL PAÍS',
          show: false,
        },
        { 
          title: null,
          show: false,
        },
        { 
          title: 'ADEYEMI AJAO, RETINA EL PÁIS',
          show: false,
        },
        { 
          title: 'MEGANSITO EL GUAPO',
          show: false,
        },
        { 
          title: null,
          show: false,
        },
        { 
          title: 'BAD GYAL, TENTACIONES EL PAÍS',
          show: false, 
        },
        { 
          title: 'J-ZOON',
          show: false,
        },
        { 
          title: null,
          show: false, 
        },
      ],
      images: [
        {
          src: require('@/assets/images/portraits/alta/INGRID.jpg'),
          loading: require('@/assets/images/portraits/baja/INGRID.jpg')
        },
        {
          src: require('@/assets/images/portraits/alta/GERMAN.jpg'),
          loading: require('@/assets/images/portraits/baja/GERMAN.jpg')
        },
        {
          src: require('@/assets/images/portraits/alta/lengua.jpg'),
          loading: require('@/assets/images/portraits/baja/lengua.jpg')
        },
        {
          src: require('@/assets/images/portraits/badgyal_candy_8.jpg'),
          loading: require('@/assets/images/portraits/badgyal_candy_8_LQ.jpg')
        },
        {
          src: require('@/assets/images/portraits/coche_3.jpg'),
          loading: require('@/assets/images/portraits/coche_3_LQ.jpg')
        },
        {
          src: require('@/assets/images/portraits/Retina_10.jpg'),
          loading: require('@/assets/images/portraits/Retina_10_LQ.jpg')
        },
        {
          src: require('@/assets/images/portraits/alta/megansito.jpg'),
          loading: require('@/assets/images/portraits/baja/megansito.jpg')
        },
        {
          src: require('@/assets/images/portraits/joon_bn_2.jpg'),
          loading: require('@/assets/images/portraits/joon_bn_2_LQ.jpg')
        },
        {
          src: require('@/assets/images/portraits/Badgyal_white_4.jpg'),
          loading: require('@/assets/images/portraits/Badgyal_white_4_LQ.jpg')
        },
        {
          src: require('@/assets/images/portraits/joon_color_11.jpg'),
          loading: require('@/assets/images/portraits/joon_color_11_LQ.jpg')
        },
        {
          src: require('@/assets/images/portraits/alta/BARBA.jpg'),
          loading: require('@/assets/images/portraits/baja/BARBA.jpg')
        },
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
.fadeInUp {
  opacity: 0;
  transform: translateY(20px);
  transition-property: all;
  transition-duration: 0.5s;
}
.fadeInUp .visible {
  transform: translateY(0);
  opacity: 1;
}
.container {
  padding-top: 70px;
  padding-left: 100px;
  min-height: 100vh;
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
