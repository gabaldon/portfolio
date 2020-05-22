<template>
  <div class="container">
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
      title: 'Onto the world - Elisa S Fernández',
      meta: [
        { hid: 'description', name: 'description', content: 'Hola! My name is Elisa and I am a photographer based in Madrid.' }
      ]
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
  padding-left: 100px;
  img {
    max-width: 65vw;
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
