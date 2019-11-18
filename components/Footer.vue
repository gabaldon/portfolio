<template>
  <div id="footer" class="footer">
    <div class="container">
      <p class="copyright">
        Copyright © Elisa S Fernández
      </p>
    </div>
  </div>
</template>

<script>

export default {
  components: {
  }
}
</script>

<style lang="scss" scoped>

.footer {
  font-size: 12px;
  width: 100vw;
  height: 10vh;
  align-items: center;
  display: flex;
  justify-content: flex-end;
  .container {
    margin-right: 24px;
  }
}

@media (max-width: 1024px) {
  .footer {
    display: none;
    .copyright {
      margin-right: 24px;
    }
  }
}
</style>
