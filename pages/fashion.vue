<template>
  <div class="container">
    <div class="row">
      <div class="colum">
        <img src="@/assets/images/fashion/chica_silla.jpg" alt="prueba">
      </div>
      <div class="colum">
        <img src="@/assets/images/fashion/yung_beef.jpg" alt="prueba">
      </div>
    </div>
    <div class="row">
      <div class="colum">
        <img src="@/assets/images/fashion/chico_blanconegro.jpg" alt="prueba">
      </div>
    </div>
    <div class="row">
      <div class="colum">
        <img src="@/assets/images/fashion/chico_ropa_verde.jpg" alt="prueba">
      </div>
      <div class="colum">
        <img src="@/assets/images/fashion/chica_ropa_amarilla.JPG" alt="prueba">
      </div>
    </div>
    <nuxt-link class="arrow-container" to="/landscapes">
      <p class="go-next">Go to landscapes</p>
      <img class="arrow" src="@/assets/images/arrow-to-right.svg" alt="prueba">
    </nuxt-link>
  </div>
</template>

<script>

export default {
  head () {
    return {
      title: 'Fashion - Elisa S Fernández',
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
