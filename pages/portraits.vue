<template>
  <div class="container">
    <div class="row">
      <div class="colum">
        <img v-lazy="images[0]" alt="prueba">
      </div>
      <div class="colum">
        <img v-lazy="images[1]" alt="prueba">
      </div>
    </div>
    <div class="row">
      <div class="colum">
        <img v-lazy="images[2]" alt="prueba">
      </div>
      <div class="colum">
        <img v-lazy="images[3]" alt="prueba">
      </div>
    </div>
    <div class="row">
      <div class="colum">
        <img v-lazy="images[4]" alt="prueba">
      </div>
    </div>
    <div class="row">
      <div class="colum">
        <img v-lazy="images[5]" alt="prueba">
      </div>
      <div class="colum">
        <img v-lazy="images[6]" alt="prueba">
      </div>
    </div>
    <div class="row">
      <div class="colum">
        <img v-lazy="images[7]" alt="prueba">
      </div>
      <div class="colum">
        <img v-lazy="images[8]" alt="prueba">
      </div>
    </div>
    <div class="row">
      <div class="colum">
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
  created () {
    this.scrollToTop()
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0,0);
    }
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
