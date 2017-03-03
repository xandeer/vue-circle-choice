<template lang="pug">
#circular-nav
  circular-nav(:labels='labels', :color='color', radius="10em", @updateNav='updateColor')
</template>

<script>
import circularNav from '../components/circular-nav';

const labels = [
  'home',
  'discover',
  'my',
];

export default {
  name: 'exampleCircularNav',
  components: {
    circularNav,
  },
  data() {
    return {
      index: 0,
      color: '#754481',
      labels,
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
    updateColor({ index, color }) {
      this.index = index;
      this.color = color;
    },
  },
};
</script>

<style lang="scss" scoped>
#circular-nav {
  margin: auto;
}
</style>
