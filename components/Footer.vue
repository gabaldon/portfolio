<template>
  <div id="footer" class="footer">
    <p>Copyright © Elisa S Fernández</p>
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
  margin-right: 24px;
  align-items: center;
  display: flex;
  justify-content: flex-end;
}

@media (max-width: 1024px) {
  .footer {
    display: none;
  }
}
</style>
