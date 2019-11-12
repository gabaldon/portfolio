<template>
  <div class="container row" v-bind:style="{ 'background-image': 'url(' + mainImageSrc + ')' }">
  <div class="contact-text">
    <p>
      Hello! My name is Elisa and I am photographer based in Madrid.
      I collaborate with magazines such as  El Pais Semanal, ICON, TENTACIONES,
      Retina or Nylon. 💐
    </p>
    <div class="links">
      <a class="link" href="https://www.instagram.com/elimita/?hl=es">Instagram</a>
      <a class="link" href="mailto:elisasanchezfernandez@correo.com">elisasanchezfernandez@gmail.com</a>
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
        { hid: 'description', name: 'description', content: 'Hello! My name is Elisa and I am a photographer based in Madrid.' }
      ]
    }
  },
  components: {
    Footer
  },
  data () {
    return {
      mainImageSrc: require('@/assets/images/fondo-site/puerta_portada.jpg'),
      images: []
    }
  },
  created () {
    console.log(this.images.length)
    const self = this
    this.images = [
      {
        id: '23',
        image: require('@/assets/images/fondo-site/puerta_portada.jpg')
      },
      {
        id: '32',
        image: require('@/assets/images/fondo-site/coche_portada.jpg')
      },
      {
        id: '45',
        image: require('@/assets/images/fondo-site/verja_portada.jpg')
      }
    ]
    setInterval(function () {
      self.mainImageSrc = self.images[Math.floor(Math.random() * self.images.length)].image
    }, 1500)
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
    height: 200px;
    line-height: 1.5;
    margin-top: 60vh;
    margin-left: 13vh;
    .links {
      background-color: #fec1cc;
      text-align:justify;
      width: 300px;
      border: 1px solid rgb(251, 253, 107);
      padding: 2px;
      .link {
        text-align: center;
        display: block;
        padding: 10px;
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
