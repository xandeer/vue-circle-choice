<template lang='pug'>
  #app
    example-choice-color
    example-circular-nav
</template>

<script>
import exampleChoiceColor from './example/choice-color';
import exampleCircularNav from './example/circular-nav';

export default {
  name: 'app',
  components: {
    exampleChoiceColor,
    exampleCircularNav,
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
</style>
