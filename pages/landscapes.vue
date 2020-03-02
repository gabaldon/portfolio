<template>
  <div class="container">
    <div class="row">
      <div class="colum">
        <img v-lazy="images[0]" alt="abuela en Vietnam">
      </div>
      <div class="colum">
        <img v-lazy="images[1]" alt="Paisaje de Nueva York">
      </div>
    </div>
    <div class="row">
      <div class="colum">
        <img v-lazy="images[2]" alt="Kenia">
      </div>
    </div>
    <div class="row">
      <div class="colum">
        <img v-lazy="images[3]" alt="Vacas">
      </div>
      <div class="colum">
        <img v-lazy="images[4]" alt="Montaña del Cáucaso">
      </div>
    </div>
    <div class="row">
      <div class="colum">
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

export default {
  head () {
    return {
      title: 'Landscapes - Elisa S Fernández',
      meta: [
        { hid: 'description', name: 'description', content: 'Hola! My name is Elisa and I am a photographer based in Madrid.' }
      ]
    }
  },
  data () {
    return {
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
  created () {
    this.scrollToTop()
  },
  methods: {
    scrollToTop () {
      window.scrollTo(0, 0)
    }
  }
}
</script>

<style lang="scss" scoped>
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
