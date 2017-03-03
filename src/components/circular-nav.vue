<template lang="pug">
.nav-container
  .nav-wrapper(:style='[containerSize, navTransform]')
    ul.colors
      li.color-block(v-for='(label, index) in labels', :style='setItem(index)', @click='setNav(label)')
        a(href='javascript:void(0)', :style='anchorStyle')
          span {{label}}
  .nav-toggle(:style='colorT', @click='toggle') {{ isOpen ? '-' : '+'}}
  .nav-overlay(:class='isOpen ? "on-overlay" : ""', @click='toggle')
</template>

<script>

export default {
  name: 'circularNav',
  data() {
    return {
      current: 'home',
      isOpen: false,
    };
  },
  props: {
    labels: {
      require: true,
    },
    radius: {
      default: '10em',
    },
    color: {
      default: '#754481',
    },
  },
  computed: {
    colorT() {
      return {
        color: this.isOpen ? this.color : '#fff',
        backgroundColor: this.isOpen ? '#fff' : this.color,
      };
    },
    containerSize() {
      return {
        width: `calc(2 * ${this.radius})`,
        height: `calc(2 * ${this.radius})`,
        bottom: `calc(-${this.radius} - 1px)`,
      };
    },
    anchorStyle() {
      const rotate = `-${90 - (90 / this.labels.length)}deg`;
      const skew = `-${90 - (180 / this.labels.length)}deg`;
      return {
        transform: `skew(${skew}) rotate(${rotate})`,
        width: `calc(2 * ${this.radius})`,
        height: `calc(2 * ${this.radius})`,
        right: `-${this.radius}`,
        bottom: `-${this.radius}`,
      };
    },
    navTransform() {
      return {
        transform: `translateX(-50%) scale(${this.isOpen ? 1 : 0.01})`,
      };
    },
  },
  methods: {
    setNav(label) {
      const index = this.labels.indexOf(label);
      this.current = label;
      this.$emit('updateNav', { index, label });
    },
    setItem(index) {
      const rotate = `${(index * 180) / this.labels.length}deg`;
      const skew = `${90 - (180 / this.labels.length)}deg`;

      return {
        backgroundColor: this.color,
        transform: `rotate(${rotate}) skew(${skew})`,
      };
    },
    toggle() {
      this.isOpen = !this.isOpen;
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
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-wrapper {
  position: fixed;
  left: 50%;
  transition: all .3s ease;
  margin: auto;
  overflow: hidden;
  color: #fff;
  border-radius: 50%;
  z-index: 10;
}

.colors {
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
    overflow: hidden;
    border: 1px solid #fff;
    transition: border .3s ease;

    a {
      display: block;
      position: absolute;
      padding-top: 25%;
      text-decoration: none;
      color: #fff;
      span {
        font-size: 1.1em;
      }
    }
  }
}

.nav-toggle {
  font-size: 1em;
  position: fixed;
  bottom: -1.5em;
  left: 50%;
  transform: translateX(-50%);
  width: 3em;
  height: 3em;
  padding-top: 0.3em;
  border-radius: 50%;
  background-color: #fff;
  transition: all .3s ease;
  z-index: 11;
}

.nav-overlay {
  width: 100%;
  height: 100%;
  background-color: hsla(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  opacity: 0;
  visibility: hidden;
  transition: all .3s ease;
  z-index: 2;
  &.on-overlay {
    visibility: visible;
    opacity: 1;
  }
}
</style>
