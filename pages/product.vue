<template>
  <div class="container">
    <div class="row page-centered last">
      <div class="img-container last">
        <img v-lazy="images[0]" alt="portada Retina producto de colores">
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
  scrollToTop: false,
  head () {
    return {
      title: 'Product - Elisa S Fernández',
    }
  },
  data () {
    return {
      images: [
        {
          src: require('@/assets/images/product/retina_product.jpg'),
          loading: require('@/assets/images/product/retina_product_LQ.jpg')
        }
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
  },
}
</script>

<style lang="scss" scoped>
.container {
  padding-top: 30px;

  img[lazy=loading]{
    min-height: 200px;
    min-width: 200px;
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
      min-height: 0;
      min-width: 0;
      padding: 8px;
      width: 13px;
    }
  }
}
@media (max-width: 1024px) {
  .container {
    height: 95vh;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding-left: 0px;
  }
}
</style>
