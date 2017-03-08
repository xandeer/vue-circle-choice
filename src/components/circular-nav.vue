<template lang="pug">
.nav-container
  .nav-wrapper(:style='[containerSize, navTransform]')
    ul.nav-tabbar
      li.nav-item(v-for='(nav, index) in navs', :style='setItem(index)', @click='setNav(index)')
        a(:href='nav.href || "javascript:void(0)"', :style='anchorStyle')
          span.iconfont(v-if='nav.icon', :class='nav.icon')
          span.nav-item-label(v-if='nav.label') {{nav.label}}
  .nav-toggle(:style='colorT', @click='toggle') {{ isOpen ? '-' : '+'}}
  .nav-overlay(:class='isOpen ? "on-overlay" : ""', @click='toggle')
</template>

<script>

export default {
  name: 'circularNav',
  data() {
    return {
      isOpen: false,
      size: {},
    };
  },
  props: {
    navs: {
      type: Array,
      require: true,
    },
    radius: {
      type: String,
      default: '10em',
    },
    color: {
      type: String,
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
      return Object.assign({
        bottom: `calc(-${this.radius} - 1px)`,
      }, this.size);
    },
    anchorStyle() {
      const rotate = `-${90 - (90 / this.navs.length)}deg`;
      const skew = `-${90 - (180 / this.navs.length)}deg`;
      return Object.assign({
        transform: `skew(${skew}) rotate(${rotate})`,
        right: `-${this.radius}`,
        bottom: `-${this.radius}`,
      }, this.size);
    },
    navTransform() {
      return {
        transform: `translateX(-50%) scale(${this.isOpen ? 1 : 0.01})`,
      };
    },
  },
  methods: {
    setNav(index) {
      this.$emit('updateNav', index);
    },
    setItem(index) {
      const rotate = `${(index * 180) / this.navs.length}deg`;
      const skew = `${90 - (180 / this.navs.length)}deg`;

      return {
        backgroundColor: this.color,
        transform: `rotate(${rotate}) skew(${skew})`,
      };
    },
    toggle() {
      this.isOpen = !this.isOpen;
    },
  },
  created() {
    Object.assign(this.size, {
      width: `calc(2 * ${this.radius})`,
      height: `calc(2 * ${this.radius})`,
    });
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
  background-color: #fff;
  border: 1px solid transparent;
  border-radius: 50%;
  z-index: 10;
}

.nav-tabbar {
  @include full-size;
  position: absolute;
  border-radius: 50%;
  overflow: hidden;

  .nav-item {
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
      .nav-item-label {
        font-size: 0.8em;
      }
      .iconfont {
        display: block;
        font-size: 1.4em;
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
