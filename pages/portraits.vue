<template>
  <PageCard :images="images" :next-page="nextPage" @show-false="hideTexts" />
</template>
<script>
import PageCard from '@/components/PageCard.vue'
export default {
  scrollToTop: false,
  head () {
    return {
      title: 'Portraits - Elisa S Fernández',
      meta: [
        { hid: 'description', name: 'description', content: 'Hola! My name is Elisa and I am a photographer based in Madrid.' }
      ]
    }
  },
  components: {
    PageCard,
  },
  data () {
    return {
      nextPage: {
        title: 'Go to fashion',
        path: '/fashion',
      },
      images: [
        {
          src: require('@/assets/images/portraits/alta/INGRID.jpg'),
          loading: require('@/assets/images/portraits/baja/INGRID.jpg'),
          text: { 
            title: 'INGRID GARCÍA-JONSSON, RETINA EL PAÍS',
            show: false,
          },
        },
        {
          src: require('@/assets/images/portraits/alta/GERMAN.jpg'),
          loading: require('@/assets/images/portraits/baja/GERMAN.jpg'),
          text: { 
            title: 'GERMÁN ALCARAZU, ICON EL PAÍS',
            show: false,
          },
        },
        {
          src: require('@/assets/images/portraits/alta/lengua.jpg'),
          loading: require('@/assets/images/portraits/baja/lengua.jpg'),
          text: { 
            title: 'MI ABUELA',
            show: false,
          },
        },
        {
          src: require('@/assets/images/portraits/badgyal_candy_8.jpg'),
          loading: require('@/assets/images/portraits/badgyal_candy_8_LQ.jpg'),
          text: { 
            title: 'BAD GYAL, TENTACIONES EL PAÍS',
            show: false, 
          },
        },
        {
          src: require('@/assets/images/portraits/coche_3.jpg'),
          loading: require('@/assets/images/portraits/coche_3_LQ.jpg'),
          text: { 
            title: null,
            show: false, 
          },
          horizontal: true,
        },
        {
          src: require('@/assets/images/portraits/alta/ALASKA_RETINA.jpg'),
          loading: require('@/assets/images/portraits/baja/ALASKA_RETINA.jpg'),
          text: { 
            title: 'ALASKA, RETINA EL PAÍS',
            show: false,
          },
        },
        {
          src: require('@/assets/images/portraits/alta/ELENA_LI_CHEN_UNOMODELS.jpg'),
          loading: require('@/assets/images/portraits/baja/ELENA_LI_CHEN_UNOMODELS.jpg'),
          text: { 
            title: 'ELENA LI CHEN, RETINA EL PAÍS',
            show: false,
          },
        },
        {
          src: require('@/assets/images/portraits/Badgyal_white_4.jpg'),
          loading: require('@/assets/images/portraits/Badgyal_white_4_LQ.jpg'),
          text: { 
            title: 'BAD GYAL, TENTACIONES EL PAÍS',
            show: false,
          },
        },
        {
          src: require('@/assets/images/portraits/Retina_10.jpg'),
          loading: require('@/assets/images/portraits/Retina_10_LQ.jpg'),
          text: { 
            title: 'ADEYEMI AJAO, RETINA EL PÁIS',
            show: false,
          },
        },
        {
          src: require('@/assets/images/portraits/alta/megansito.jpg'),
          loading: require('@/assets/images/portraits/baja/megansito.jpg'),
          text: { 
            title: 'MEGANSITO EL GUAPO',
            show: false,
          },
        },
        {
          src: require('@/assets/images/portraits/joon_color_11.jpg'),
          loading: require('@/assets/images/portraits/joon_color_11_LQ.jpg'),
          text: { 
            title: 'J-ZOON',
            show: false,
          },
        },
      ]
    }
  },
  methods: {
    hideTexts() {
      this.images.forEach(image => {
        image.text.show = false
      })
    }
  }
}
</script>
