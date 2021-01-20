<template>
  <div>
    <ProjectCard title="ARUFE" description="description for ARUFE Project" :images="images" @close-project="closeProject" />
  </div>
</template>

<script>
import ProjectCard from '@/components/ProjectCard.vue'

export default {
  head () {
    return {
      title: 'ARUFE - Elisa S Fernández',
    }
  },
  components: {
    ProjectCard,
  },
  data () {
    return {
      images: [
        {
          src: require('@/assets/images/projects/arufe/ALTAS/ARUFE_GOOGLE.jpg'),
          loading: require('@/assets/images/projects/arufe/BAJAS/ARUFE_GOOGLE.jpg'),
          alt: 'Arufe en el campo',
        },
        {
          src: require('@/assets/images/projects/arufe/ALTAS/ARUFE_CARA_MORTADELA.jpg'),
          loading: require('@/assets/images/projects/arufe/BAJAS/ARUFE_CARA_MORTADELA.jpg'),
          alt: 'Arufe con cara de mortadela',
        },
        {
          src: require('@/assets/images/projects/arufe/ALTAS/ARUFE_BALONCESTO.jpg'),
          loading: require('@/assets/images/projects/arufe/BAJAS/ARUFE_BALONCESTO.jpg'),
          alt: 'Arufe con una mandarina',
        },
        {
          src: require('@/assets/images/projects/arufe/ALTAS/ARUFE_BLANCO_NEGRO.jpg'),
          loading: require('@/assets/images/projects/arufe/BAJAS/ARUFE_BLANCO_NEGRO.jpg'),
          alt: 'Arufe en blanco y negro',
        },
        {
          src: require('@/assets/images/projects/arufe/ALTAS/ARUFE_MORTADELA_NARIZ.jpg'),
          loading: require('@/assets/images/projects/arufe/BAJAS/ARUFE_MORTADELA_NARIZ.jpg'),
          alt: 'Arufe con una mortadela en la nariz',
        },
        {
          src: require('@/assets/images/projects/arufe/ALTAS/ARUFE_HUEVO.jpg'),
          loading: require('@/assets/images/projects/arufe/BAJAS/ARUFE_HUEVO.jpg'),
          alt: 'Arufe con un huevo',
        },
        {
          src: require('@/assets/images/projects/arufe/ALTAS/ARUFE_AÑO_NUEVO.jpg'),
          loading: require('@/assets/images/projects/arufe/BAJAS/ARUFE_AÑO_NUEVO.jpg'),
          alt: 'Arufe en año nuevo',
        },
        {
          src: require('@/assets/images/projects/arufe/ALTAS/ARUFE_ACEITUNAS_MORTADELA.jpg'),
          loading: require('@/assets/images/projects/arufe/BAJAS/ARUFE_ACEITUNAS_MORTADELA.jpg'),
          alt: 'Arufe con mortadela de aceitunas',
        },
        {
          src: require('@/assets/images/projects/arufe/ALTAS/ARUFE_MASCARILLA.jpg'),
          loading: require('@/assets/images/projects/arufe/BAJAS/ARUFE_MASCARILLA.jpg'),
          alt: 'Arufe con mascarilla',
        },
        {
          src: require('@/assets/images/projects/arufe/ALTAS/ARUFE_RIÑONERA.jpg'),
          loading: require('@/assets/images/projects/arufe/BAJAS/ARUFE_RIÑONERA.jpg'),
          alt: 'Arufe con riñonera',
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
