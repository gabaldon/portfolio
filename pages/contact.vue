<template>
  <div class="container">
    <div class="contact-text">
    <p>
      Hello! My name is Elisa and I am photographer based in Madrid.
      I collaborate with magazines such as <br> El Pais Semanal, ICON, TENTACIONES,
      Retina or Nylon. 💐
    </p>
    <div class="links">
      <a class="link" href="https://www.instagram.com/elimita/?hl=es">Instagram</a>
      <a class="link" href="mailto:elisasanchezfernandez@correo.com">elisasanchezfernandez@gmail.com</a>
    </div>
  </div>
  </div>
</template>

<script>

export default {
  head () {
    return {
      title: 'Contact - Elisa S Fernández',
      meta: [
        { hid: 'description', name: 'description', content: 'Hello! My name is Elisa and I am a photographer based in Madrid.' }
      ]
    }
  }
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
    margin-top: 50vh;
    line-height: 1.5;
    .links {
      background-color: pink;
      text-align:justify;
      // width: 50vw;
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

</style>
