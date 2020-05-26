<template>
  <div class="projects-container" @mousemove="updateCoordinates">
    <transition name="slide-left">
      <div v-show="!isProjectShown" class="projects">
        <div class="project" @mouseenter="showFlaca = true" @mouseleave="showFlaca = false" @click="showProject('flaca')">
          <p v-show="showFlaca" class="title" :style="{ top: y + 'px', left: x + 'px' }">
            FLACA
          </p>
          <img v-lazy="images.flaca" class="photo" alt="">
        </div>
        <div class="project" @mouseenter="showWorld = true" @mouseleave="showWorld = false" @click="showProject('world')">
          <p v-show="showWorld" class="title" :style="{ top: y + 'px', left: x + 'px' }">
            ONTO THE EARTH
          </p>
          <img v-lazy="images.world" class="photo" alt="">
        </div>
      </div>
    </transition>
    <transition name="slide-up">
      <FlacaProject v-if="flacaProject" @close-project="closeProject" />
    </transition>
    <transition name="slide-up">
      <OntoTheEarthProject v-if="worldProject" @close-project="closeProject" />
    </transition>
    <nuxt-link v-show="show && !isProjectShown" class="arrow-container" to="/portraits">
      <p class="go-next">
        Go to portraits
      </p>
      <img v-lazy="require('@/assets/images/arrow-to-right.svg')" class="arrow" alt="arrow to right">
    </nuxt-link>
  </div>
</template>

<script>
import FlacaProject from '@/components/FlacaProject.vue'
import OntoTheEarthProject from '@/components/OntoTheEarthProject.vue'

export default {
  components: {
    FlacaProject,
    OntoTheEarthProject,
  },
  head () {
    return {
      title: 'Projects - Elisa S Fernández',
    }
  },
  data () {
    return {
      x: 0,
      y: 0,
      showFlaca: false,
      showWorld: false,
      flacaProject: false,
      worldProject: false,
      show: true,
      images: {
        flaca: {
          src: require('@/assets/images/projects/flaca/ALTAS/FLACA_NUBES_ALTA.jpg'),
          loading: require('@/assets/images/projects/flaca/BAJAS/FLACA_NUBES_BAJA.jpg')
        },
        world: {
          src: require('@/assets/images/projects/onto-the-world/ALTA/portada_alta.jpg'),
          loading: require('@/assets/images/projects/onto-the-world/BAJA/portada_baja.jpg')
        },
      },
    }
  },
  computed: {
    isToogleActive () {
      return this.$store.state.toogleSideBar
    },
    isSideBarClick () {
      return this.$store.state.clickBar
    },
    isProjectShown () {
      return this.flacaProject || this.worldProject
    }
  },
  watch: {
    isToogleActive () {
      if (this.isToogleActive) {
        this.show = true
      } else {
        this.show = false
      }
    },
    isSideBarClick () {
      this.closeProject()
    }
  },
  created () {
    this.scrollToTop()
    this.worldProject = false
    this.flacaProject = false
  },
  methods: {
    updateCoordinates(event) {
      this.x = event.clientX + 24;
      this.y = event.clientY;
    },
    scrollToTop() {
      window.scrollTo(0,0);
    },
    closeProject() {
      this.flacaProject = false
      this.worldProject = false
    },
    showProject(project) {
      if(project === 'flaca') {
        this.scrollToTop()
        this.flacaProject = true 
        this.worldProject = false
      } else {
        this.scrollToTop()
        this.flacaProject = false
        this.worldProject = true
      }
    },
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
.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 0.5s;
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
    min-height: 100vh;
    grid-template-rows: 1fr auto;
    .projects {
      display: grid;
      grid-template-columns: 420px 420px;
      column-gap: 32px;
      margin-left: 70px;
      justify-content: center;
      .project {
        cursor: pointer;
        text-shadow: 2px 2px  rgb(251, 253, 107);
        .title {
          position: absolute;
          z-index: 1;
        }
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
      margin-top: 32px;
      margin-left: 0px;
    }
  }
}
</style>
