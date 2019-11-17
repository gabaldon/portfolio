<template>
  <div  class="container">
    <div class="row">
      <div class="colum">
        <img v-lazy="images[0]" alt="abuela en Vietnam">
      </div>
      <div class="colum">
        <img v-lazy="images[1]" alt="Paisaje de Nueva York">
      </div>
    </div>
    <div class="row">
      <div class="colum">
        <img v-lazy="images[2]" alt="Kenia">
      </div>
    </div>
    <div class="row">
      <div class="colum">
        <img v-lazy="images[3]" alt="Vacas">
      </div>
      <div class="colum">
        <img v-lazy="images[4]" alt="Montaña del Cáucaso">
      </div>
    </div>
    <div class="row">
      <div class="colum">
        <img v-lazy="images[5]" alt="Ho Chi Minh">
      </div>
    </div>
    <nuxt-link class="arrow-container" to="/product">
      <p class="go-next">Go to product</p>
      <img class="arrow" v-lazy="require('@/assets/images/arrow-to-right.svg')" alt="arrow to right">
    </nuxt-link>
  </div>
</template>

<script>

export default {
  head () {
    return {
      title: 'Landscapes - Elisa S Fernández',
      meta: [
        { hid: 'description', name: 'description', content: 'Hola! My name is Elisa and I am a photographer based in Madrid.' }
      ]
    }
  },
  data () {
    return {
      images: [
        require('@/assets/images/landscape/edificio_1.jpg'),
        require('@/assets/images/landscape/ny_2.jpg'),
        require('@/assets/images/landscape/nairobi_3.jpg'),
        require('@/assets/images/landscape/vacas_4.jpg'),
        require('@/assets/images/landscape/montana_5.jpg'),
        require('@/assets/images/landscape/hochiminh_6.jpg')
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
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
