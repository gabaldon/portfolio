<template>
  <div class="container">
    <div v-show="show" class="contact-text">
      <p>
        Hola! My name is Elisa and I am a photographer based in Madrid.
        I collaborate with magazines such as El Pais Semanal, ICON, TENTACIONES,
        Retina or Nylon. 💐
      </p>
      <div class="links">
        <a class="link" target="_blank" href="https://www.instagram.com/elimita/?hl=es">Instagram - @elimita</a>
        <a class="link" target="_blank" href="mailto:elisasanchezfernandez@gmail.com">elisasanchezfernandez@gmail.com</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  scrollToTop: false,
  head () {
    return {
      title: 'Contact - Elisa S Fernández',
      meta: [
        { hid: 'description', name: 'description', content: 'elisasanchezfernandez@gmail.com' }
      ]
    }
  },
  data () {
    return {
      show: true
    }
  },
  computed: {
    isToogleActive () {
      return this.$store.state.toogleSideBar
    }
  },
  watch: {
    isToogleActive () {
      if (this.isToogleActive) {
        this.show = true
      } else {
        this.show = false
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.container {
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .contact-text {
    font-size: 12px;
    width: 55vw;
    height: 200px;
    line-height: 1.5;
    .links {
      text-align:justify;
      text-shadow: 2px 2px  rgb(251, 253, 107);
      padding: 2px;
      .link {
        text-align: left;
        display: block;
      }
    }
  }
}

</style>
