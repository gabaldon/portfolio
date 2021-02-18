<template>
  <div>
    <div class="container" @mousemove="updateCoordinates">
      <div v-for="(image, index) in images" :key="index" :class="image.horizontal ? `img-container single-col`: `img-container cursor`" @mousemove="image.text.show = true" @mouseleave="image.text.show = false">
        <p v-show="image.text.show" :style="{ top: y + 'px', left: x + 'px' }" class="title">
          {{ image.text.title }}
        </p>
        <nuxt-link :to="image.url">
          <img v-lazy="image" :alt="image.alt ? image.alt : null">
        </nuxt-link>
      </div>
    </div>
    <nuxt-link :to="nextPage.path" class="arrow-container">
      <p class="go-next">
        {{ nextPage.title }}
      </p>
      <img v-lazy="require('@/assets/images/arrow-to-right.svg')" class="arrow" alt="prueba">
    </nuxt-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: {
    images: {
      type: [Array, Object],
      required: true,
    },
    nextPage: {
      type: Object,
      required: true,
    }
  },
  data () {
    return {
      x: 0,
      y: 0,
    }
  },
  computed: {
    ...mapState({
      scrollDown: state => state.scrollDown,
      isMobile: state => state.isMobile,
    }),
  },
  watch: {
    scrollDown () {
      if (this.isMobile) {
        this.$emit('show-false')
      }
    }
  },
  methods: {
    updateCoordinates(event) {
      this.x = event.clientX;
      this.y = event.clientY;
    },
  }
}
</script>

<style lang="scss" scoped>
.container {
  padding-top: 36px;
  display: grid;
  grid-template-columns: 35vw 35vw;
  column-gap: 24px;
  margin-left: 150px;
  justify-content: center;
  .cursor {
    cursor: none;
  }
  .img-container {
    margin-bottom: 24px;
    &:last-of-type {
      margin-bottom: 0px;
    }
    &.single-col {
      grid-column: auto / span 2;
    }
  }
  img[lazy=loading]{
    min-height: 200px;
    min-width: 200px;
  }
}
.arrow-container {
  padding: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  align-self: start;
  grid-column: auto / span 2;
  cursor: pointer;
  .go-next {
    text-shadow: 2px 2px  rgb(251, 253, 107);
  }
  .arrow {
    min-height: 0;
    min-width: 0;
    padding: 8px;
    width: 13px;
  }
}
@media (max-width: 1024px) {
  .container {
    padding-top: 30px;
    grid-template-columns: auto;
    margin: 0px;

    .img-container {
      grid-column: auto / span 2;
      margin: 0px 24px 24px 24px;
    }

  }
}
</style>
