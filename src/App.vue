<template lang='pug'>
  #app
    example-choice-color
</template>

<script>
import exampleChoiceColor from './example/choice-color';

export default {
  name: 'app',
  components: {
    exampleChoiceColor,
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
