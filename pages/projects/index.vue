<template>
  <div>
    <PageCardUrl :images="images" :next-page="nextPage" @show-false="hideTitles" />
    <nuxt-child />
  </div>
</template>

<script>
import PageCardUrl from '@/components/PageCardUrl.vue'

export default {
  scrollToTop: false,
  components: {
    PageCardUrl,
  },
  data () {
    return {
      nextPage: {
        title: 'Go to portraits',
        path: '/portraits',
      },
      images: {
        flaca: {
          src: require('@/assets/images/projects/flaca/ALTAS/FLACA_NUBES_ALTA.jpg'),
          loading: require('@/assets/images/projects/flaca/BAJAS/FLACA_NUBES_BAJA.jpg'),
          url: 'projects/flaca',
          text: { 
            title: 'FLACA',
            show: false,
          },
        },
        world: {
          src: require('@/assets/images/projects/onto-the-world/ALTA/portada_alta.jpg'),
          loading: require('@/assets/images/projects/onto-the-world/BAJA/portada_baja.jpg'),
          url: 'projects/ontoTheEarth',
          text: { 
            title: 'ONTO THE EARTH',
            show: false,
          },
        },
        arufe: {
          src: require('@/assets/images/projects/arufe/ALTAS/ARUFE_AÑO_NUEVO.jpg'),
          loading: require('@/assets/images/projects/arufe/BAJAS/ARUFE_AÑO_NUEVO.jpg'),
          alt: 'Arufe en año nuevo',
          url: 'projects/arufe',
          text: { 
            title: 'ARUFE',
            show: false,
          },
        },
        sofia: {
          src: require('@/assets/images/projects/sofia/ALTAS/SR_PERFIL.jpg'),
          loading: require('@/assets/images/projects/sofia/BAJAS/SR_PERFIL.jpg'),
          url: 'projects/sofiaRemi',
          text: { 
            title: 'SOFIA',
            show: false,
          },
        },
      },
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
      title: 'Projects - Elisa S Fernández',
    }
  },
}
</script>

<style lang="scss" scoped>
.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 0.75s;
}

.slide-left-enter,
.slide-left-leave-to {
  opacity: 0;
  transform: translateX(-1400px);
}
.slide-up-enter-active {
  transition: all 1s;
}

.slide-up-enter {
  opacity: 0;
  transform: translateY(1400px)
}
.projects-container {
    display: grid;
    grid-template-rows: 1fr auto;
    .projects {
      display: grid;
      grid-template-columns: 35vw 35vw;
      column-gap: 40px;
      margin-left: 150px;
      justify-content: center;
      .project {
        cursor: pointer;
        text-shadow: 2px 2px  rgb(251, 253, 107);
      }
    }
    
  .photo {
    margin-top: 32px;
  }
  img[lazy=loading]{
    min-height: 200px;
    min-width: 200px;
  }
  .arrow-container {
    align-self: flex-end;
    display: flex;
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
  .projects-container {
    .projects {
      grid-template-columns: 300px;
      margin-left: 0px;
      .title {
        display: none;
      }
    }
  }
}
</style>
