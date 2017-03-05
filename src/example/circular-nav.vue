<template lang="pug">
#circular-nav
  circular-nav(:navs='navs', :color='color', radius="8em", @updateNav='updateNav')
</template>

<script>
import circularNav from '../components/circular-nav';
import bus from './common/bus';

/* eslint-disable no-script-url */
const navs = [{
  label: 'Discover',
  href: 'javascript:void(0)',
  icon: 'icon-discover',
}, {
  label: 'Home',
  href: 'javascript:void(0)',
  icon: 'icon-home',
}, {
  label: 'My',
  href: 'javascript:void(0)',
  icon: 'icon-my',
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
@import url('//at.alicdn.com/t/font_0j6ycruegu7q4cxr.css');

#circular-nav {
  margin: auto;
}
</style>
