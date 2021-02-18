<template>
  <PageCard :images="images" :next-page="nextPage" @show-false="hideTitles" />
</template>

<script>
import PageCard from '@/components/PageCard.vue'

export default {
  scrollToTop: false,
  components: {
    PageCard,
  },
  data () {
    return {
      nextPage: {
        title: 'Go to contact',
        path: '/contact',
      },
      images: [
        {
          src: require('@/assets/images/product/retina_product.jpg'),
          loading: require('@/assets/images/product/retina_product_LQ.jpg'),
          text: { 
            title: null,
            show: false, 
          },
          horizontal: true,
        }
      ],
      show: true
    }
  },
  methods: {
    hideTitles() {
      this.images.forEach(image => {
        image.text.show = false
      })
    },
  },
  head () {
    return {
      title: 'Product - Elisa S Fernández',
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
