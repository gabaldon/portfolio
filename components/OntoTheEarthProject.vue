<template>
  <div class="container">
    <transition name="translate">
      <p v-show="displayDesktopSideBar" class="description">
        'Onto the Earth' is a project which aims to make humans aware of the natural world that surrounds us all. The pictures center on a woman who has just arrived in a new space; the world we used to live in, now devastated by humankind. These pictures are a mirror, a second chance to show ourselves just how important our planet's ecosystems are.
      </p>
    </transition>
    <p v-show="!displayDesktopSideBar" class="project-title">
      ONTO THE EARTH
    </p>
    <p class="project-title-mobile">
      ONTO THE EARTH
    </p>
    <div class="row double-col">
      <div class="colum">
        <img v-lazy="images[0]" alt="">
      </div>
      <div class="colum">
        <img v-lazy="images[1]" alt="">
      </div>
    </div>
    <div class="row double-col">
      <div class="colum">
        <img v-lazy="images[2]" alt="">
      </div>
      <div class="colum">
        <img v-lazy="images[3]" alt="">
      </div>
    </div>
    <div class="row double-col">
      <div class="colum">
        <img v-lazy="images[4]" alt="">
      </div>
      <div class="colum">
        <img v-lazy="images[5]" alt="">
      </div>
    </div>
    <div class="row double-col">
      <div class="colum">
        <img v-lazy="images[6]" alt="">
      </div>
      <div class="colum">
        <img v-lazy="images[7]" alt="">
      </div>
    </div>
    <div class="row double-col">
      <div class="colum">
        <img v-lazy="images[8]" alt="">
      </div>
      <div class="colum">
        <img v-lazy="images[9]" alt="">
      </div>
    </div>
    <div class="row double-col last">
      <div class="colum">
        <img v-lazy="images[10]" alt="">
      </div>
      <div class="colum">
        <img v-lazy="images[11]" alt="">
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
  computed: {
    ...mapState({
      displayDesktopSideBar: state => state.displayDesktopSideBar,
    }),
  },
  beforeDestroy() {
    window.scrollTo(0,0);
  },
  methods: {
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
  width: 140px;
  line-height: 2;
  font-size: 14px;
}
.mobile-description {
  display: none;
}
.container {
  padding-top: 30px;
  .project-title {
    text-shadow: 2px 2px  rgb(251, 253, 107);
    position: fixed;
    right: 32px;
    top: 130px;
    transform: rotate(90deg) translate(0, -100%);
  }
  .project-title-mobile {
    display: none;
  }
  img[lazy=loading]{
    min-height: 200px;
    min-width: 200px;
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
    img[lazy=loading]{
      min-height: 100%;
      min-width: 100%;
    }
    .description {
      display: none;
    }
    .mobile-description {
      margin: 30px 30px 0px 30px;
      display: block;
    }
    .project-title {
      display: none;
    }
    .project-title-mobile {
      display: block;
      text-shadow: 2px 2px  rgb(251, 253, 107);
      position: fixed;
      right: -25px;
      top: 65px;
      transform: rotate(90deg) translate(0, -100%);
    }
  }
}
</style>
