<template>
  <div class="container">
    <transition name="translate">
      <p v-show="displayDesktopSideBar" class="description">
        FLACA is an international DJ, co-funder of CHICAGANG and BAM BAM
      </p>
    </transition>
    <p v-show="!displayDesktopSideBar" class="project-title">
      FLACA
    </p>
    <p class="project-title-mobile">
      FLACA
    </p>
    <div class="row">
      <div class="colum">
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
      <div class="colum">
        <img v-lazy="images[6]" alt="">
      </div>
      <div class="colum">
        <img v-lazy="images[7]" alt="">
      </div>
    </div>
    <div class="row">
      <p class="mobile-description">
        FLACA is an international DJ, co-funder of CHICAGANG and BAM BAM
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
      title: 'Flaca - Elisa S Fernández',
    }
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
  computed: {
    ...mapState({
      displayDesktopSideBar: state => state.displayDesktopSideBar,
    }),
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
  width: 100px;
  line-height: 2;
  font-size: 14px;
}
.mobile-description {
  display: none;
}
.container {
  padding-top: 70px;
  padding-left: 150px;
  .project-title {
    text-shadow: 2px 2px  rgb(251, 253, 107);
    position: fixed;
    right: 80px;
    top: 90px;
    transform: rotate(90deg) translate(0, -100%);
  }
  .project-title-mobile {
    display: none;
  }
  img {
    max-width: 35vw;
    padding: 20px;
  }
  img[lazy=loading]{
    min-height: 200px;
    min-width: 200px;
  }
  .mobile-description {
    display: none;
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
    padding-top: 0px;
    img {
      max-width: 300px;
    }
    .description {
      display: none;
    }
    .mobile-description {
      display: block;
      padding: 24px;
    }
    .project-title {
      display: none;
    }
    .project-title-mobile {
      display: block;
      text-shadow: 2px 2px  rgb(251, 253, 107);
      position: fixed;
      right: 24px;
      top: 30px;
      transform: rotate(90deg) translate(0, -100%);
    }
  }
}
</style>
