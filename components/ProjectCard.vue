<template>
  <div>
    <div :class="mobileFixed ? 'container double-fixed' : 'container'">
      <transition name="translate">
        <p v-if="displayDesktopSideBar && description" :class="mobileFixed ? 'description double-fixed' : 'description'">
          {{ description }}
        </p>
        <div
          v-if="displayDesktopSideBar && audio" 
          :class="mobileFixed ? 'description pointer double-fixed' : 'description pointer'"
          @click="playSound" 
        >
          :arrow_forward: Play me to listen!
        </div>
      </transition>
      <p v-show="!displayDesktopSideBar" class="project-title" :style="{ top: `${positionTop}px`, right: `${positionRightDesktop}px` }">
        {{ title }}
      </p>
      <p class="project-title-mobile" :style="{ top: `${positionTop}px`, right: `${positionRight}px` }">
        {{ title }}
      </p>
      <div v-for="(image, index) in images" :key="index" :class="mobileFixed ? 'img-container double-fixed' : 'img-container'">
        <img v-lazy="image" :alt="image.alt ? image.alt : null">
      </div>
      <p v-if="description" :class="mobileFixed ? 'mobile-description double-fixed' : 'mobile-description'">
        {{ description }}
      </p>
      <div
        v-if="audio" 
        :class="mobileFixed ? 'mobile-description pointer double-fixed' : 'mobile-description pointer'"
        @click="playSound" 
      >
        <img v-lazy="require('@/assets/images/arrow-to-right.svg')" class="arrow" alt="arrow to right"> Play me to listen!
      </div>
    </div>
    <nuxt-link :class="mobileFixed ? 'arrow-container double-fixed' : 'arrow-container'" to="/projects">
      <img v-lazy="require('@/assets/images/arrow-to-right.svg')" class="arrow" alt="arrow to right">
      <p class="go-next">
        Go back to projects
      </p>
    </nuxt-link>
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
      default: null,
    },
    mobileFixed: {
      type: Boolean,
      default: false,
    },
    audio: {
      type: String,
      default: null,
    }
  },
  data() {
    return {
      isSoundEnabled: true,
      audioToPlay: null,
    }
  },
  computed: {
    ...mapState({
      displayDesktopSideBar: state => state.displayDesktopSideBar,
    }),
  },
  mounted() {
    return this.initializeSound
  },
  created() {
    this.scrollToTop()
  },
  beforeDestroy() {
    this.scrollToTop()
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0,0);
    },
    initializeSound() {
      const isSoundEnabled = JSON.parse(localStorage.getItem('isSoundEnabled'))
      if(!isSoundEnabled) {
        this.isSoundEnabled = false;
        localStorage.setItem("isSoundEnabled", false)
      } else if(isSoundEnabled) {
        this.isSoundEnabled = true;
        localStorage.setItem("isSoundEnabled", true)
      } else {
        this.isSoundEnabled = true;
        localStorage.setItem("isSoundEnabled", true)
      }
    },
    toggleSound() {
      this.isSoundEnabled = !this.isSoundEnabled
      localStorage.setItem('isSoundEnabled', this.isSoundEnabled)
    },
    playSound() {
      if (this.isSoundEnabled) { 
        this.audioToPlay = new Audio(this.audio)
        this.audioToPlay.play()
      }
    },
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

  .arrow {
    min-height: 0;
    min-width: 0;
    width: 13px;
    padding-right: 8px;
  }
  &.pointer {
    cursor: pointer;
  }

  &.double-fixed {
    width: 150px;
  }
}
.mobile-description {
  display: none;
}
.container {
  padding-top: 30px;
  display: grid;
  grid-template-columns: 35vw 35vw;
  column-gap: 24px;
  margin-left: 150px;
  justify-content: center;

  &.double-fixed {
    margin-left: 200px;
  }

  .img-container {
    margin-bottom: 24px;
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
}
.arrow-container {
  position: relative;
  bottom: 8px;
  right: 24px;
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
@media (max-width: 1024px) {
  .container {
    padding-top: 30px;
    grid-template-columns: auto;
    margin: 0px;

    img[lazy=loading]{
      min-height: 100%;
      min-width: 100%;
    }

    &.double-fixed {
      grid-template-columns: 35vw 35vw;
      margin: 0px;
    }

    .img-container {
      margin: 0px 24px 24px 24px;

      &.double-fixed {
        margin: 0px 0px 24px 0px;
      }
    }
    .description {
      display: none;
    }
    .mobile-description {
      display: block;
      padding: 0px 24px 24px 24px;

      .arrow {
        min-height: 0;
        min-width: 0;
        width: 13px;
        padding-right: 8px;
      }

      &.pointer {
        cursor: pointer;
      }

      &.double-fixed {
        grid-column: auto / span 2;
      }
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
