<template lang="pug">
#circular-nav
  circular-nav(:navs='navs', :color='color', radius="10em", @updateNav='updateNav')
</template>

<script>
import circularNav from '../components/circular-nav';
import bus from './common/bus';

/* eslint-disable no-script-url */
const navs = [{
  label: 'discover',
  href: 'javascript:void(0)',
}, {
  label: 'home',
  href: 'javascript:void(0)',
}, {
  label: 'home',
  href: 'javascript:void(0)',
}, {
  label: 'my',
  href: 'javascript:void(0)',
}];

export default {
  name: 'exampleCircularNav',
  components: {
    circularNav,
  },
  data() {
    return {
      index: 0,
      color: '',
      navs,
    };
  },
  computed: {
    theme() {
      return {
        backgroundColor: this.color,
      };
    },
  },
  methods: {
    updateNav(index) {
      this.index = index;
      bus.$emit('setNav', index);
    },
  },
  created() {
    bus.$on('setTheme', ({ color }) => {
      this.color = color;
    });
  },
};
</script>

<style lang="scss" scoped>
#circular-nav {
  margin: auto;
}
</style>
