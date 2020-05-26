<template>
  <div class="container">
    <transition name="translate">
      <p v-show="displayDesktopSideBar" class="description">
        Onto the Earth’ is a project which aims to make humans aware of the natural world that surrounds us all. The pictures center on a woman who has just arrived in a new space; the world we used to live in, now devastated by humankind. These pictures are a mirror, a second chance to show ourselves just how important our planet's ecosystems are.
      </p>
    </transition>
    <div class="row">
      <div class="colum">
        <p class="project-title">
          ONTO THE EARTH
        </p>
        <img v-lazy="images[0]" alt="">
      </div>
      <div class="colum">
        <img v-lazy="images[1]" alt="">
      </div>
    </div>
    <div class="row">
      <div class="colum">
        <img v-lazy="images[2]" alt="">
      </div>
      <div class="colum">
        <img v-lazy="images[3]" alt="">
      </div>
    </div>
    <div class="row">
      <div class="colum">
        <img v-lazy="images[4]" alt="">
      </div>
      <div class="colum">
        <img v-lazy="images[5]" alt="">
      </div>
    </div>
    <div class="row">
      <p class="mobile-description">
        Onto the Earth’ is a project which aims to make humans aware of the natural world that surrounds us all. The pictures center on a woman who has just arrived in a new space; the world we used to live in, now devastated by humankind. These pictures are a mirror, a second chance to show ourselves just how important our planet's ecosystems are.
      </p>
    </div>
    <div class="arrow-container" @click="closeProject">
      <img v-lazy="require('@/assets/images/arrow-to-right.svg')" class="arrow" alt="arrow to right">
      <p class="go-next">
        Go back to projects
      </p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  head () {
    return {
      title: 'Onto the Earth - Elisa S Fernández',
    }
  },
  data () {
    return {
      images: [
        {
          src: require('@/assets/images/projects/onto-the-world/ALTA/01_ALTA.jpg'),
          loading: require('@/assets/images/projects/onto-the-world/BAJA/BAJA_01.jpg')
        },
        {
          src: require('@/assets/images/projects/onto-the-world/ALTA/02_ALTA.jpg'),
          loading: require('@/assets/images/projects/onto-the-world/BAJA/BAJA_02.jpg')
        },
        {
          src: require('@/assets/images/projects/onto-the-world/ALTA/03_ALTA.jpg'),
          loading: require('@/assets/images/projects/onto-the-world/BAJA/BAJA_03.jpg')
        },
        {
          src: require('@/assets/images/projects/onto-the-world/ALTA/04_ALTA.jpg'),
          loading: require('@/assets/images/projects/onto-the-world/BAJA/BAJA_04.jpg')
        },
        {
          src: require('@/assets/images/projects/onto-the-world/ALTA/05_ALTA.jpg'),
          loading: require('@/assets/images/projects/onto-the-world/BAJA/BAJA_05.jpg')
        },
        {
          src: require('@/assets/images/projects/onto-the-world/ALTA/06_ALTA.jpg'),
          loading: require('@/assets/images/projects/onto-the-world/BAJA/BAJA_06.jpg')
        }
      ],
      show: true
    }
  },
  computed: {
    ...mapState({
      displayDesktopSideBar: state => state.displayDesktopSideBar,
    }),
  },
  watch: {
    isToogleActive () {
      if (this.displayDesktopSideBar) {
        this.show = true
      } else {
        this.show = false
      }
    },
  },
  created () {
    this.scrollToTop()
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0,0);
    },
    closeProject() {
      this.$emit('close-project')
    }
  }
}
</script>

<style lang="scss" scoped>
.transition-leave-active {
  transition: all 0.5s;
}
.transition-leave-active {
  opacity: 0;
}
.translate-enter-active {
  transition: all 0.5s;
}
.translate-enter {
  opacity: 0;
  transform: translateY(-1400px)
}
.description {
  position: fixed;
  top: 100px;
  left: 70px;
  width: 200px;
  line-height: 2;
  font-size: 16px;
}
.mobile-description {
  display: none;
}
.container {
  overflow-x: hidden;
  .project-title {
    text-shadow: 2px 2px  rgb(251, 253, 107);
    margin-bottom: 0px;
    margin-top: 65px;
    margin-left: 24px;
  }
  img {
    max-width: 70vw;
  }
  img[lazy=loading]{
    min-height: 950px;
    min-width: 960px;
  }
  .row {
    margin-left: 100px;
  }
  .arrow-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    padding: 14px;
    cursor: pointer;
    .go-next {
      text-shadow: 2px 2px  rgb(251, 253, 107);
    }
    .arrow {
      transform: rotate(180deg);
      min-height: 0;
      min-width: 0;
      padding: 8px;
      width: 13px;
    }
  }
}
@media (max-width: 1024px) {
  .container {
    height: 100vh;
    padding-left: 0px;
    padding-top: 90px;
    img {
      max-width: 300px;
    }
    .description {
      display: none;
    }
    .row {
      margin: 0px;
    }
    .project-title {
      margin-bottom: 0px;
      margin-left: 16px;
    }
    .mobile-description {
      text-align: justify;
      display: block;
      padding: 24px;
    }
  }
}
</style>
