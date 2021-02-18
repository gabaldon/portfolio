<template>
  <div>
    <ProjectCard 
      title="ONTO THE EARTH" 
      description="'Onto the Earth' is a project which aims to make humans aware of the natural world that surrounds us all. The pictures center on a woman who has just arrived in a new space; the world we used to live in, now devastated by humankind. These pictures are a mirror, a second chance to show ourselves just how important our planet's ecosystems are." 
      :images="images" 
      :mobile-fixed="true" 
      position-right="-18"  
      position-top="65" 
      position-right-desktop="10"
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
          src: require('@/assets/images/projects/onto-the-world/ALTA/1.jpg'),
          loading: require('@/assets/images/projects/onto-the-world/BAJA/1.jpg'),
        },
        {
          src: require('@/assets/images/projects/onto-the-world/ALTA/5.jpg'),
          loading: require('@/assets/images/projects/onto-the-world/BAJA/5.jpg')
        },
        {
          src: require('@/assets/images/projects/onto-the-world/ALTA/3.jpg'),
          loading: require('@/assets/images/projects/onto-the-world/BAJA/3.jpg')
        },
        {
          src: require('@/assets/images/projects/onto-the-world/ALTA/4.jpg'),
          loading: require('@/assets/images/projects/onto-the-world/BAJA/4.jpg')
        },
        {
          src: require('@/assets/images/projects/onto-the-world/ALTA/2.jpg'),
          loading: require('@/assets/images/projects/onto-the-world/BAJA/2.jpg')
        },
        {
          src: require('@/assets/images/projects/onto-the-world/ALTA/6.jpg'),
          loading: require('@/assets/images/projects/onto-the-world/BAJA/6.jpg')
        },
        {
          src: require('@/assets/images/projects/onto-the-world/ALTA/7.jpg'),
          loading: require('@/assets/images/projects/onto-the-world/BAJA/7.jpg')
        },
        {
          src: require('@/assets/images/projects/onto-the-world/ALTA/8.jpg'),
          loading: require('@/assets/images/projects/onto-the-world/BAJA/8.jpg')
        },
        {
          src: require('@/assets/images/projects/onto-the-world/ALTA/9.jpg'),
          loading: require('@/assets/images/projects/onto-the-world/BAJA/9.jpg')
        },
        {
          src: require('@/assets/images/projects/onto-the-world/ALTA/10.jpg'),
          loading: require('@/assets/images/projects/onto-the-world/BAJA/10.jpg')
        },
        {
          src: require('@/assets/images/projects/onto-the-world/ALTA/11.jpg'),
          loading: require('@/assets/images/projects/onto-the-world/BAJA/11.jpg')
        },
        {
          src: require('@/assets/images/projects/onto-the-world/ALTA/12.jpg'),
          loading: require('@/assets/images/projects/onto-the-world/BAJA/12.jpg')
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
      title: 'Onto the Earth - Elisa S Fernández',
    }
  }
}
</script>
