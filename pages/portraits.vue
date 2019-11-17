<template>
  <div class="container">
    <div class="row">
      <div class="colum">
        <img v-lazy="images[0]" alt="prueba">
      </div>
      <div class="colum">
        <img v-lazy="images[1]" alt="prueba">
      </div>
    </div>
    <div class="row">
      <div class="colum">
        <img v-lazy="images[2]" alt="prueba">
      </div>
    </div>
    <div class="row">
      <div class="colum">
        <img v-lazy="images[3]" alt="prueba">
      </div>
      <div class="colum">
        <img v-lazy="images[4]" alt="prueba">
      </div>
    </div>
    <div class="row">
      <div class="colum">
        <img v-lazy="images[5]" alt="prueba">
      </div>
      <div class="colum">
        <img v-lazy="images[6]" alt="prueba">
      </div>
    </div>
    <div class="row">
      <div class="colum">
        <img v-lazy="images[7]" alt="prueba">
      </div>
      <div class="colum">
        <img v-lazy="images[8]" alt="prueba">
      </div>
    </div>
    <div class="row">
      <div class="colum">
        <img v-lazy="images[9]" alt="prueba">
      </div>
      <div class="colum">
        <img v-lazy="images[10]" alt="prueba">
      </div>
    </div>
    <nuxt-link class="arrow-container" to="/fashion">
      <p class="go-next">Go to fashion</p>
      <img class="arrow" v-lazy="require('@/assets/images/arrow-to-right.svg')" alt="prueba">
    </nuxt-link>
  </div>
</template>
<script>
export default {
  head () {
    return {
      title: 'Portraits - Elisa S Fernández',
      meta: [
        { hid: 'description', name: 'description', content: 'Hola! My name is Elisa and I am a photographer based in Madrid.' }
      ]
    }
  },
  data () {
    return {
      images: [
        require('@/assets/images/portraits/flaca_cover_1.jpg'),
        require('@/assets/images/portraits/joon_bn_2.jpg'),
        require('@/assets/images/portraits/coche_3.jpg'),
        require('@/assets/images/portraits/Badgyal_white_4.jpg'),
        require('@/assets/images/portraits/Flaca_celeste_5.jpg'),
        require('@/assets/images/portraits/flaca_burdeos_6.jpg'),
        require('@/assets/images/portraits/TMF_7.jpg'),
        require('@/assets/images/portraits/badgyal_candy_8.jpg'),
        require('@/assets/images/portraits/Flaca_rueda_9.jpg'),
        require('@/assets/images/portraits/Retina_10.jpg'),
        require('@/assets/images/portraits/joon_color_11.jpg')
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.fadeInUp {
  opacity: 0;
  transform: translateY(20px);
  transition-property: all;
  transition-duration: 0.5s;
}
.fadeInUp .visible {
  transform: translateY(0);
  opacity: 1;
}
.container {
  padding-top: 70px;
  padding-left: 100px;
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
