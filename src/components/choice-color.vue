<template lang="pug">
.theme-container(:style="containerSize")
  ul.colors-container
    li.color-block(v-for='(color, index) in colors', :style='setItem(index)', @click='setColor(color)')
  .faux-border
    .chosen-color(:style='colorBg')
</template>

<script>
const colors = [
  '#1ba6cc',
  '#189ba7',
  '#98c6ae',
  '#45a270',
];

export default {
  name: 'choiceColor',
  data() {
    return {
      color: colors[0],
    };
  },
  props: {
    colors: {
      default: colors,
    },
    radius: {
      default: '10em',
    },
  },
  computed: {
    colorBg() {
      return {
        backgroundColor: this.color,
      };
    },
    containerSize() {
      return {
        width: `calc(2 * ${this.radius})`,
        height: `calc(2 * ${this.radius})`,
      };
    },
  },
  methods: {
    setColor(color) {
      const index = this.colors.indexOf(color);
      this.color = color;
      this.$emit('updateColor', { index, color });
    },
    setItem(index) {
      const rotate = `${(index * 360) / this.colors.length}deg`;
      const skew = `${90 - (360 / this.colors.length)}deg`;

      return {
        backgroundColor: this.colors[index],
        transform: `rotate(${rotate}) skew(${skew})`,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../style/mixin';

* {
  box-sizing: border-box;
}

ul {
  @include full-size;
  list-style: none;
  padding: 0;
  margin: 0;
}

.theme-container {
  @include all-center;
  width: 20em;
  height: 20em;
}

.colors-container {
  @include full-size;
  position: absolute;
  border-radius: 50%;
  overflow: hidden;

  .color-block {
    @include half-size;
    position: absolute;
    transform-origin: 100% 100%;
    left: 50%;
    top: 50%;
    margin-left: -50%;
    margin-top: -50%;
    -webkit-tap-highlight-color: transparent;
  }
}

.faux-border {
  @include all-center;
  @include half-size;
  border-radius: 50%;
  padding: 5%;
  background: #fff;
}

.chosen-color {
  @include full-size;
  border-radius: 50%;
}
</style>
