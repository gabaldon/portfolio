<template>
  <div class="container">
    <div class="responsive-container">
      <div class="row">
        <div class="colum">
          <img v-lazy="images[0]" alt="Chica en silla">
        </div>
        <div class="colum">
          <img v-lazy="images[1]" alt="Yung Beef">
        </div>
      </div>
      <div class="row">
        <div class="colum">
          <img v-lazy="images[2]" alt="Chico en blanco y negro">
        </div>
      </div>
      <div class="row">
        <div class="colum">
          <img v-lazy="images[3]" alt="Chico con ropa verde">
        </div>
        <div class="colum">
          <img v-lazy="images[4]" alt="Chica con ropa amarilla">
        </div>
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

export default {
  head () {
    return {
      title: 'Fashion - Elisa S Fernández',
      meta: [
        { hid: 'description', name: 'description', content: 'Hola! My name is Elisa and I am a photographer based in Madrid.' }
      ]
    }
  },
  data () {
    return {
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

.container {
    padding-top: 70px;
    padding-left: 100px;
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
