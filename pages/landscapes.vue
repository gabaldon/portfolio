<template>
  <div class="container" @mousemove="updateCoordinates">
    <div class="row">
      <p v-show="texts[0].show" class="title" :style="{ top: y + 'px', left: x + 'px' }">
        {{ texts[0].title }}
      </p>
      <div class="colum cursor" @mousemove="texts[0].show = true" @mouseleave="texts[0].show = false">
        <img v-lazy="images[0]" alt="abuela en Vietnam">
      </div>
      <p v-show="texts[1].show" class="title" :style="{ top: y + 'px', left: x + 'px' }">
        {{ texts[1].title }}
      </p>
      <div class="colum cursor" @mousemove="texts[1].show = true" @mouseleave="texts[1].show = false">
        <img v-lazy="images[1]" alt="Paisaje de Nueva York">
      </div>
    </div>
    <div class="row">
      <p v-show="texts[2].show" class="title" :style="{ top: y + 'px', left: x + 'px' }">
        {{ texts[2].title }}
      </p>
      <div class="colum cursor" @mousemove="texts[2].show = true" @mouseleave="texts[2].show = false">
        <img v-lazy="images[2]" alt="Kenia">
      </div>
    </div>
    <div class="row">
      <p v-show="texts[3].show" class="title" :style="{ top: y + 'px', left: x + 'px' }">
        {{ texts[3].title }}
      </p>
      <div class="colum cursor" @mousemove="texts[3].show = true" @mouseleave="texts[3].show = false">
        <img v-lazy="images[3]" alt="Vacas">
      </div>
      <p v-show="texts[4].show" class="title" :style="{ top: y + 'px', left: x + 'px' }">
        {{ texts[4].title }}
      </p>
      <div class="colum cursor" @mousemove="texts[4].show = true" @mouseleave="texts[4].show = false">
        <img v-lazy="images[4]" alt="Montaña del Cáucaso">
      </div>
    </div>
    <div class="row">
      <p v-show="texts[5].show" class="title" :style="{ top: y + 'px', left: x + 'px' }">
        {{ texts[5].title }}
      </p>
      <div class="colum cursor" @mousemove="texts[5].show = true" @mouseleave="texts[5].show = false">
        <img v-lazy="images[5]" alt="Ho Chi Minh">
      </div>
    </div>
    <nuxt-link class="arrow-container" to="/product">
      <p class="go-next">
        Go to product
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
      title: 'Landscapes - Elisa S Fernández',
    }
  },
  data () {
    return {
      x: 0,
      y: 0,
      texts: [
        { 
          title: 'MADRID',
          show: false,
        },
        { 
          title: 'NEW YORK',
          show: false,
        },
        { 
          title: 'NAIROBI',
          show: false,
        },
        { 
          title: 'XINALIQ',
          show: false,
        },
        { 
          title: 'AZERBAIJAN',
          show: false,
        },
        { 
          title: 'HO CHI MINH',
          show: false,
        },
      ],
      images: [
        {
          src: require('@/assets/images/landscape/edificio_1.jpg'),
          loading: require('@/assets/images/landscape/edificio_1_LQ.jpg')
        },
        {
          src: require('@/assets/images/landscape/ny_2.jpg'),
          loading: require('@/assets/images/landscape/ny_2_LQ.jpg')
        },
        {
          src: require('@/assets/images/landscape/nairobi_3.jpg'),
          loading: require('@/assets/images/landscape/nairobi_3_LQ.jpg')
        },
        {
          src: require('@/assets/images/landscape/vacas_4.jpg'),
          loading: require('@/assets/images/landscape/vacas_4_LQ.jpg')
        },
        {
          src: require('@/assets/images/landscape/montana_5.jpg'),
          loading: require('@/assets/images/landscape/montana_5_LQ.jpg')
        },
        {
          src: require('@/assets/images/landscape/hochiminh_6.jpg'),
          loading: require('@/assets/images/landscape/hochiminh_6_LQ.jpg')
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
    scrollToTop () {
      window.scrollTo(0, 0)
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
  img[lazy=loading] {
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
