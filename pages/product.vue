<template>
  <div class="container">
    <div class="row">
      <div class="colum">
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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  img {
    max-height: 80vh;
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
    height: 100vh;
    padding-left: 0px;
    padding-top: 0px;
    img {
      padding-top: 30vh;
    }
  }
}
</style>
