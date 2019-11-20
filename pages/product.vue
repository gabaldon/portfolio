<template>
  <div class="container">
    <div class="row">
      <div class="colum">
        <img v-lazy="images[0]" :data-loading="imageslowQuality[0]" alt="portada Retina producto de colores">
      </div>
    </div>
    <div>
      <nuxt-link v-show="show" class="arrow-container" to="/contact">
        <p class="go-next">
          Go to contact
        </p>
        <img v-lazy="require('@/assets/images/arrow-to-right.svg')" class="arrow" alt="arrow to right">
      </nuxt-link>
    </div>
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
        require('@/assets/images/product/retina_product.jpg')
      ],
      imageslowQuality: [
        require('@/assets/images/product/retina_product_LQ.jpg')
      ],
      show: true
    }
  },
  computed: {
    isToogleActive () {
      return this.$store.state.toogleSideBar
    }
  },
  watch: {
    isToogleActive () {
      if (this.isToogleActive) {
        this.show = true
      } else {
        this.show = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
    padding-top: 70px;
    padding-left: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  img {
    max-height: 80vh;
    max-width: 70vw;
    padding: 20px;
  }
  .arrow-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    padding: 14px;
    .go-next {
      text-shadow: 2px 2px  rgb(251, 253, 107);
    }
    .arrow {
      padding: 8px;
      width: 13px;
    }
  }
}
@media (max-width: 1024px) {
  .container {
    height: 100vh;
    padding-left: 0px;
    padding-top: 0px;
    img {
      padding-top: 30vh;
    }
  }
}
</style>
