<template>
  <div>
    <ProjectCard 
      title="SOFIA REMI" 
      :images="images" 
      position-right="-8"  
      position-top="50" 
      position-right-desktop="60"
      @close-project="closeProject" 
    />
  </div>
</template>

<script>
import ProjectCard from '@/components/ProjectCard.vue'

export default {
  components: {
    ProjectCard,
  },
  data () {
    return {
      images: [
        {
          src: require('@/assets/images/projects/sofia/ALTAS/SR_PERFIL.jpg'),
          loading: require('@/assets/images/projects/sofia/BAJAS/SR_PERFIL.jpg'),
        },
        {
          src: require('@/assets/images/projects/sofia/ALTAS/SR_PANTALONES.jpg'),
          loading: require('@/assets/images/projects/sofia/BAJAS/SR_PANTALONES.jpg'),
        },
        {
          src: require('@/assets/images/projects/sofia/ALTAS/SR_KAPPA.jpg'),
          loading: require('@/assets/images/projects/sofia/BAJAS/SR_KAPPA.jpg'),
        },
        {
          src: require('@/assets/images/projects/sofia/ALTAS/SR_BYN.jpg'),
          loading: require('@/assets/images/projects/sofia/BAJAS/SR_BYN.jpg'),
        },
        {
          src: require('@/assets/images/projects/sofia/ALTAS/SR_CHUBASQUERO.jpg'),
          loading: require('@/assets/images/projects/sofia/BAJAS/SR_CHUBASQUERO.jpg'),
        },
        {
          src: require('@/assets/images/projects/sofia/ALTAS/SR_COLOR_RETRATO.jpg'),
          loading: require('@/assets/images/projects/sofia/BAJAS/SR_COLOR_RETRATO.jpg'),
        },
        {
          src: require('@/assets/images/projects/sofia/ALTAS/SR_NUBES.jpg'),
          loading: require('@/assets/images/projects/sofia/BAJAS/SR_NUBES.jpg'),
        },
        {
          src: require('@/assets/images/projects/sofia/ALTAS/SR_BAÑADOR_CAMISA.jpg'),
          loading: require('@/assets/images/projects/sofia/BAJAS/SR_BAÑADOR_CAMISA.jpg'),
        },
        {
          src: require('@/assets/images/projects/sofia/ALTAS/SF_SIMPLE.jpg'),
          loading: require('@/assets/images/projects/sofia/BAJAS/SF_SIMPLE.jpg'),
        },
        {
          src: require('@/assets/images/projects/sofia/ALTAS/SR_CAMPO_BLANCO.jpg'),
          loading: require('@/assets/images/projects/sofia/BAJAS/SR_CAMPO_BLANCO.jpg'),
        },
      ],
      show: true
    }
  },
  methods: {
    closeProject() {
      this.$emit('close-project')
    }
  },
  head () {
    return {
      title: 'Sofia - Elisa S Fernández',
    }
  }
}
</script>