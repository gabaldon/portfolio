<template>
  <div>
    <div v-lazy:background-image="mainImageSrc" class="container row">
      <div class="contact-text">
        <div>
          Hola! My name is Elisa and I am a photographer based in Madrid.
          I collaborate with magazines such as  El Pais Semanal, ICON, TENTACIONES,
          Retina or Nylon. 💐
        </div>
        <div class="links">
          <a class="link" href="https://www.instagram.com/elimita/?hl=es">Instagram - @elimita</a>
          <a class="link" href="mailto:elisasanchezfernandez@correo.com">elisasanchezfernandez@gmail.com</a>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'

export default {
  head () {
    return {
      title: 'Elisa S Fernández',
      meta: [
        { hid: 'description', name: 'description', content: 'Hola! My name is Elisa and I am a photographer based in Madrid.' }
      ]
    }
  },
  components: {
    Footer
  },
  data () {
    return {
      mainImageSrc: '',
      mainImageLowQuality: '',
      images: [],
      counter: 0
    }
  },
  created () {
    const self = this
    this.images = [
      {
        src: require('@/assets/images/fondo-site/cover-1.jpg'),
        loading: require('@/assets/images/fondo-site/Cover_1_LQ.jpg')
      },
      {
        src: require('@/assets/images/fondo-site/cover-2.jpg'),
        loading: require('@/assets/images/fondo-site/Cover_2_LQ.jpg')
      },
      {
        src: require('@/assets/images/fondo-site/cover-3.jpg'),
        loading: require('@/assets/images/fondo-site/Cover_3_LQ.jpg')
      }
    ]
    self.mainImageSrc = self.images[0]
    setInterval(function () {
      if (this.counter < 2) {
        this.counter += 1
      } else {
        this.counter = 0
      }
      self.mainImageSrc = self.images[this.counter]
    }, 2500)
  }
}
</script>

<style lang="scss" scoped>
.page-enter-active, .page-leave-active {
  transition: all 0.5s;
}
.page-enter, .page-leave-active {
  opacity: 0;
}
.container {
  margin: 0;
  padding: 0px;
  width: 100vw;
  height: 90vh;
  background-size: auto 91% ;
  background-repeat: no-repeat;
  background-position: 60vw 30px;
  display: flex;
  justify-content: left;
  .contact-text {
    font-size: 12px;
    width: 500px;
    height: 80vh;
    line-height: 2;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-left: 80px;
    .links {
      text-shadow: 2px 2px  #fbfd6b;
      text-align:justify;
      width: 300px;
      padding: 2px;
      .link {
        text-align: left;
        display: block;
        padding: 8px 0px 8px 0px;
      }
    }
  }
}

@media (max-width: 1024px) {
  .container {
    margin: 0;
    padding: 0px;
    width: 100vw;
    height: 100vh;
    background-position:50% 50%;  /* Sets reference point to scale from */
    background-size:cover;
    .contact-text {
      display: none;
    }
  }
}

</style>
