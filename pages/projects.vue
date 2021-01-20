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
        <div class="project" @mouseenter="showArufe = true" @mouseleave="showArufe = false" @click="showProject('arufe')">
          <p v-show="showArufe" class="title" :style="{ top: y + 'px', left: x + 'px' }">
            ARUFE
          </p>
          <img v-lazy="images.arufe" class="photo" alt="">
        </div>
        <div class="project" @mouseenter="showSofia = true" @mouseleave="showSofia = false" @click="showProject('sofia')">
          <p v-show="showSofia" class="title" :style="{ top: y + 'px', left: x + 'px' }">
            SOFIA REMI
          </p>
          <img v-lazy="images.sofia" class="photo" alt="">
        </div>
      </div>
    </transition>
    <transition name="slide-up">
      <FlacaProject v-if="flacaProject" @close-project="closeProject" />
    </transition>
    <transition name="slide-up">
      <OntoTheEarthProject v-if="worldProject" @close-project="closeProject" />
    </transition>
    <transition name="slide-up">
      <ArufeProject v-if="arufeProject" @close-project="closeProject" />
    </transition>
    <transition name="slide-up">
      <SofiaRemiProject v-if="sofiaProject" @close-project="closeProject" />
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
import ArufeProject from '@/components/ArufeProject.vue'
import SofiaRemiProject from '@/components/SofiaRemiProject.vue'
import OntoTheEarthProject from '@/components/OntoTheEarthProject.vue'

export default {
  scrollToTop: false,
  components: {
    FlacaProject,
    OntoTheEarthProject,
    ArufeProject,
    SofiaRemiProject
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
      showArufe: false,
      showSofia: false,
      flacaProject: false,
      arufeProject: false,
      worldProject: false,
      sofiaProject: false,
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
        arufe: {
          src: require('@/assets/images/projects/arufe/ALTAS/ARUFE_AÑO_NUEVO.jpg'),
          loading: require('@/assets/images/projects/arufe/BAJAS/ARUFE_AÑO_NUEVO.jpg'),
          alt: 'Arufe en año nuevo',
        },
        sofia: {
          src: require('@/assets/images/projects/sofia/ALTAS/SR_PERFIL.jpg'),
          loading: require('@/assets/images/projects/sofia/BAJAS/SR_PERFIL.jpg'),
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
      return this.flacaProject || this.worldProject || this.arufeProject || this.sofiaProject
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
    this.worldProject = false
    this.flacaProject = false
    this.arufeProject = false
    this.sofiaProject = false
  },
  methods: {
    updateCoordinates(event) {
      this.x = event.clientX + 15;
      this.y = event.clientY;
    },
    scrollToTop() {
      window.scrollTo(0,0);
    },
    closeProject() {
      this.flacaProject = false
      this.worldProject = false
      this.arufeProject = false
      this.sofiaProject = false
    },
    showProject(project) {
      if (project === 'flaca') {
        this.flacaProject = true 
        this.worldProject = false
        this.arufeProject = false
        this.sofiaProject = false
      } else if (project === 'world'){
        this.flacaProject = false
        this.worldProject = true
        this.arufeProject = false
        this.sofiaProject = false
      } else if (project === 'arufe') {
        this.flacaProject = false
        this.worldProject = false
        this.arufeProject = true
        this.sofiaProject = false
      } else {
        this.flacaProject = false
        this.worldProject = false
        this.arufeProject = false
        this.sofiaProject = true
      }
    },
  }
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
