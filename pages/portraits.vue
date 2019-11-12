<template>
  <div class="container">
    <div class="row">
      <div class="colum">
        <img src="@/assets/images/portraits/sofia_dedo_n ariz.jpg" alt="prueba">
      </div>
      <div class="colum">
        <img src="@/assets/images/portraits/blanco-y-negro-chico.jpg" alt="prueba">
      </div>
    </div>
    <div class="row">
      <div class="colum">
        <img src="@/assets/images/portraits/gabaldon_coche.jpg" alt="prueba">
      </div>
    </div>
    <div class="row">
      <div class="colum">
        <img src="@/assets/images/portraits/badgyal_chicle.jpg" alt="prueba">
      </div>
      <div class="colum">
        <img src="@/assets/images/portraits/Sofia_coche_verde.jpg" alt="prueba">
      </div>
    </div>
    <div class="row">
      <div class="colum">
        <img src="@/assets/images/portraits/sofia_coche_rojo.jpg" alt="prueba">
      </div>
      <div class="colum">
        <img src="@/assets/images/portraits/chico_retrato.jpg" alt="prueba">
      </div>
    </div>
    <div class="row">
      <div class="colum">
        <img src="@/assets/images/portraits/badgyal_chupachups.jpg" alt="prueba">
      </div>
      <div class="colum">
        <img src="@/assets/images/portraits/sofia_militar.jpg" alt="prueba">
      </div>
    </div>
    <div class="row">
      <div class="colum">
        <img src="@/assets/images/portraits/portada_retina_hombre.jpg" alt="prueba">
      </div>
      <div class="colum">
        <img src="@/assets/images/portraits/chico-saltando.jpg" alt="prueba">
      </div>
    </div>
    <nuxt-link class="arrow-container" to="/fashion">
      <p class="go-next"> Go to fashion </p>
      <img class="arrow" src="@/assets/images/arrow-to-right.svg" alt="prueba">
    </nuxt-link>
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: 'Portraits - Elisa S Fernández',
      meta: [
        { hid: 'description', name: 'description', content: 'Hello! My name is Elisa and I am a photographer based in Madrid.' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  padding-top: 70px;
  padding-left: 100px;

  .hidden {
    opacity: 0;
  }

  .hidden-right {
    transform: translate(50px, 0);
  }

  .hidden-left {
    transform: translate(-50px, 0);
  }

  .showElement {
    opacity: 1;
    transform: translate(0, 0);
    -webkit-transition: all 0.5s ease-out;
    -moz-transition: all 0.5s ease-out;
    transition: all 0.5s ease-out;
  }

  .reveal.fadeInUp {
    opacity: 0;
    transform: translateY(20px);
    transition-property: all;
    transition-duration: 0.5s;
  }
  .reveal.fadeInUp.visible {
    transform: translateY(0);
    opacity: 1;
  }
  img {
    max-height: 90vh;
    max-width: 70vw;
    padding: 20px;
  }
  .arrow-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    padding-right: 55px;
    padding: 14px;
    .go-next {
      text-shadow: 2px 2px  rgb(251, 253, 107);
    }
    .arrow {
      padding: 8px;
      width: 13px;
    }
  }
}
@media (max-width: 1024px) {
  .container {
    padding-left: 0px;
    padding-top: 0px;
  }
}
</style>
