<template>
  <div>
    <ProjectCard title="FLACA" description="description for FLACA Project" :images="images" @close-project="closeProject" />
  </div>
</template>

<script>
import ProjectCard from '@/components/ProjectCard.vue'

export default {
  head () {
    return {
      title: 'Flaca - Elisa S Fernández',
    }
  },
  components: {
    ProjectCard,
  },
  data () {
    return {
      images: [
        {
          src: require('@/assets/images/projects/flaca/ALTAS/FLACA_CUADROS_ALTA.jpg'),
          loading: require('@/assets/images/projects/flaca/BAJAS/FLACA_CUADROS_BAJA.jpg')
        },
        {
          src: require('@/assets/images/projects/flaca/ALTAS/FLACA_MECHERO_ALTA.jpg'),
          loading: require('@/assets/images/projects/flaca/BAJAS/FLACA_MECHERO_BAJA.jpg')
        },
        {
          src: require('@/assets/images/projects/flaca/ALTAS/FLACA_CELESTE.jpg'),
          loading: require('@/assets/images/projects/flaca/BAJAS/FLACA_CELESTE.jpg')
        },
        {
          src: require('@/assets/images/projects/flaca/ALTAS/FLACA_BURDEOS.jpg'),
          loading: require('@/assets/images/projects/flaca/BAJAS/FLACA_BURDEOS.jpg')
        },
        {
          src: require('@/assets/images/projects/flaca/ALTAS/FLACA_CHINA.jpg'),
          loading: require('@/assets/images/projects/flaca/BAJAS/FLACA_CHINA.jpg')
        },
        {
          src: require('@/assets/images/projects/flaca/ALTAS/FLACA_MARRON_HUMO_ALTA.jpg'),
          loading: require('@/assets/images/projects/flaca/BAJAS/FLACA_MARRON_HUMO_BAJA.jpg')
        },
        {
          src: require('@/assets/images/projects/flaca/ALTAS/FLACA_RUEDA.jpg'),
          loading: require('@/assets/images/projects/flaca/BAJAS/FLACA_RUEDA.jpg')
        },
        {
          src: require('@/assets/images/projects/flaca/ALTAS/FLACA_LILA_ALTA.jpg'),
          loading: require('@/assets/images/projects/flaca/BAJAS/FLACA_LILA_BAJA.jpg')
        },
      ],
      show: true
    }
  },
  methods: {
    closeProject() {
      this.$emit('close-project')
    }
  }
}
</script>