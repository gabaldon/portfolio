<template>
  <div class="container">
    <p class="project-title">
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
    <div class="arrow-container" @click="closeProject">
      <img v-lazy="require('@/assets/images/arrow-to-right.svg')" class="arrow" alt="arrow to right">
      <p class="go-next">
        Go back to projects
      </p>
    </div>
  </div>
</template>

<script>

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
    isToogleActive () {
      return this.$store.state.toogleSideBar
    },
  },
  watch: {
    isToogleActive () {
      if (this.isToogleActive) {
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
.container {
  padding-top: 70px;
  padding-left: 100px;
  .project-title {
    text-shadow: 2px 2px  rgb(251, 253, 107);
    margin-bottom: 24px;
    margin-top: 24px;
    margin-left: 140px;
  }
  img {
    max-width: 35vw;
    padding: 20px;
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
    padding-top: 0px;
    img {
      max-width: 300px;
    }
  }
}
</style>
