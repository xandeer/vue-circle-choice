<template lang='pug'>
  #app
    .current(:style="theme")
      p Color Index: {{colorIndex}}
      p Nav Index: {{navIndex}}
    example-choice-color
    example-circular-nav
</template>

<script>
import exampleChoiceColor from './example/choice-color';
import exampleCircularNav from './example/circular-nav';
import bus from './example/common/bus';

export default {
  name: 'app',
  components: {
    exampleChoiceColor,
    exampleCircularNav,
  },
  data() {
    return {
      colorIndex: 0,
      navIndex: 0,
      color: '',
    };
  },
  computed: {
    theme() {
      return {
        backgroundColor: this.color,
      };
    },
  },
  created() {
    bus.$on('setTheme', ({ index, color }) => {
      this.colorIndex = index;
      this.color = color;
    });
    bus.$on('setNav', (index) => {
      this.navIndex = index;
    });
  },
};
</script>

<style lang='scss'>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.current {
  width: 50%;
  height: 5em;
  line-height: 2.5em;
  margin: 0 auto;
  transform: translateY(2em);
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  border-radius: 1em;
}
</style>
