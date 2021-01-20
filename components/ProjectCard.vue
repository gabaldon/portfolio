<template>
  <div class="container">
    <transition name="translate">
      <p v-show="displayDesktopSideBar" class="description">
        {{ description }}
      </p>
    </transition>
    <p v-show="!displayDesktopSideBar" class="project-title" :style="{ top: `${positionTop}px`, right: `${positionRightDesktop}px` }">
      {{ title }}
    </p>
    <p class="project-title-mobile" :style="{ top: `${positionTop}px`, right: `${positionRight}px` }">
      {{ title }}
    </p>
    <div v-for="(image, index) in images" :key="index" class="img-container">
      <img v-lazy="image" :alt="image.alt ? image.alt : null">
    </div>
    <div class="row">
      <p class="mobile-description">
        {{ description }}
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
  props: {
    images: {
      type: Array,
      required: true,
    },
    positionTop: {
      type: String,
      default: '30',
    },
    positionRight: {
      type: String,
      default: '8',
    },
    positionRightDesktop: {
      type: String,
      default: '80',
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    }
  },
  computed: {
    ...mapState({
      displayDesktopSideBar: state => state.displayDesktopSideBar,
    }),
  },
  created() {
    this.scrollToTop()
  },
  beforeDestroy() {
    this.scrollToTop()
  },
  methods: {
    closeProject() {
      this.$emit('close-project')
    },
    scrollToTop() {
      window.scrollTo(0,0);
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
  width: 100px;
  line-height: 2;
  font-size: 14px;
}
.mobile-description {
  display: none;
}
.container {
  padding-top: 30px;
  display: grid;
  grid-template-columns: 35vw 35vw;
  column-gap: 30px;
  margin-left: 150px;
  justify-content: center;

  .img-container {
    margin-bottom: 30px;
    &:last-of-type {
      margin-bottom: 0px;
    }
  }
  .project-title {
    text-shadow: 2px 2px  rgb(251, 253, 107);
    position: fixed;
    transform: rotate(90deg) translate(0, -100%);
  }
  .project-title-mobile {
    display: none;
  }
  img[lazy=loading]{
    min-height: 200px;
    min-width: 200px;
  }
  .mobile-description {
    display: none;
  }
  .arrow-container {
    position: relative;
    bottom: 8px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
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
    padding-top: 30px;
    grid-template-columns: auto;
    margin: 0px;

    .img-container {
      margin: 0px 30px 30px 30px;
    }
    .description {
      display: none;
    }
    .mobile-description {
      display: block;
      padding: 0px 30px 30px 30px;
    }
    .arrow-container {
      right: 30px;
    }
    .project-title {
      display: none;
    }
    .project-title-mobile {
      display: block;
      text-shadow: 2px 2px  rgb(251, 253, 107);
      position: fixed;
      transform: rotate(90deg) translate(0, -100%);
    }
  }
}
</style>
