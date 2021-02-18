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
        title: 'Go to landscapes',
        path: '/landscapes',
      },
      images: [
        {
          src: require('@/assets/images/fashion/MariaKfisherman_1.jpg'),
          loading: require('@/assets/images/fashion/MariaKfisherman_1_LQ.jpg'),
          text: { 
            title: 'MARIA KE FISHERMAN, TENTACIONES EL PAÍS',
            show: false,
          },
        },
        {
          src: require('@/assets/images/fashion/yung_beef_2.jpg'),
          loading: require('@/assets/images/fashion/yung_beef_2_LQ.jpg'),
          text: { 
            title: 'YUNG BEEF, TENTACIONES EL PAÍS',
            show: false,
          },
        },
        {
          src: require('@/assets/images/fashion/Palomo_Spain_BN_3.jpg'),
          loading: require('@/assets/images/fashion/Palomo_Spain_BN_3_LQ.jpg'),
          text: { 
            title: 'PALOMO SPAIN, ICON EL PAÍS',
            show: false,
          },
          horizontal: true,
        },
        {
          src: require('@/assets/images/fashion/Palomo_Spain_Naranja_4.jpg'),
          loading: require('@/assets/images/fashion/Palomo_Spain_Naranja_4_LQ.jpg'),
          text: { 
            title: 'PALOMO SPAIN, ICON EL PAÍS',
            show: false,
          },
        },
        {
          src: require('@/assets/images/fashion/Sita_abellan_5.jpg'),
          loading: require('@/assets/images/fashion/Sita_abellan_5_LQ.jpg'),
          text: { 
            title: 'SITA ABELLÁN, TENTACIONES EL PAÍS',
            show: false,
          },
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
      title: 'Fashion - Elisa S Fernández',
      meta: [
        { hid: 'description', name: 'description', content: 'Hola! My name is Elisa and I am a photographer based in Madrid.' }
      ]
    }
  },
}
</script>