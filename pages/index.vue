<template>
  <div>
    <div class="container row" v-lazy:background-image="mainImageSrc" :data-loading="mainImageLowQuality">
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
      mainImageSrc: require('@/assets/images/fondo-site/cover-1.jpg'),
      images: [],
      mainImageLowQuality: require('@/assets/images/fondo-site/Cover_1_LQ.jpg'),
      imagesLowQuality: []
    }
  },
  created () {
    const self = this
    this.images = [
      {
        image: require('@/assets/images/fondo-site/cover-1.jpg')
      },
      {
        image: require('@/assets/images/fondo-site/cover-2.jpg')
      },
      {
        image: require('@/assets/images/fondo-site/cover-3.jpg')
      }
    ]
    this.imagesLowQuality = [
      {
        image: require('@/assets/images/fondo-site/Cover_1_LQ.jpg')
      },
      {
        image: require('@/assets/images/fondo-site/Cover_2_LQ.jpg')
      },
      {
        image: require('@/assets/images/fondo-site/Cover_3_LQ.jpg')
      }
    ]
    setInterval(function () {
      self.mainImageSrc = self.images[Math.floor(Math.random() * self.images.length)].image
      self.mainImageSrc = self.imagesLowQuality[Math.floor(Math.random() * self.imagesLowQuality.length)].image
    }, 2000)
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin: 0;
  padding: 0px;
  width: 100vw;
  height: 90vh;
  background-size: auto 91% ;
  background-repeat: no-repeat;
  background-position: 50vw 30px;
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
      text-shadow: 2px 2px  rgb(251, 253, 107);
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
