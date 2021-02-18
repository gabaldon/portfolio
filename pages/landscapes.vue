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
        title: 'Go to product',
        path: '/product',
      },
      images: [
        {
          src: require('@/assets/images/landscape/edificio_1.jpg'),
          loading: require('@/assets/images/landscape/edificio_1_LQ.jpg'),
          text: { 
            title: 'MADRID',
            show: false,
          },
        },
        {
          src: require('@/assets/images/landscape/ny_2.jpg'),
          loading: require('@/assets/images/landscape/ny_2_LQ.jpg'),
          text: { 
            title: 'NEW YORK',
            show: false,
          },
        },
        {
          src: require('@/assets/images/landscape/nairobi_3.jpg'),
          loading: require('@/assets/images/landscape/nairobi_3_LQ.jpg'),
          text: { 
            title: 'NAIROBI',
            show: false,
          },
          horizontal: true,
        },
        {
          src: require('@/assets/images/landscape/vacas_4.jpg'),
          loading: require('@/assets/images/landscape/vacas_4_LQ.jpg'),
          text: { 
            title: 'XINALIQ',
            show: false,
          },
        },
        {
          src: require('@/assets/images/landscape/montana_5.jpg'),
          loading: require('@/assets/images/landscape/montana_5_LQ.jpg'),
          text: { 
            title: 'AZERBAIJAN',
            show: false,
          },
        },
        {
          src: require('@/assets/images/landscape/hochiminh_6.jpg'),
          loading: require('@/assets/images/landscape/hochiminh_6_LQ.jpg'),
          text: { 
            title: 'HO CHI MINH',
            show: false,
          },
          horizontal: true,
        }
      ]
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
      title: 'Landscapes - Elisa S Fernández',
      meta: [
        { hid: 'description', name: 'description', content: 'Hola! My name is Elisa and I am a photographer based in Madrid.' }
      ]
    }
  }
}
</script>
