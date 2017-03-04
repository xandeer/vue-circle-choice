<template lang="pug">
#theme
  choice-color(:colors='colors', radius="10em", @updateColor='updateColor')
</template>

<script>
import choiceColor from '../components/choice-color';
import bus from './common/bus';

const colors = [
  '#1ba6cc',
  '#189ba7',
  '#98c6ae',
  '#45a270',
  '#7cb325',
  '#eb9826',
  '#d8541f',
  '#d40c45',
  '#cf6d90',
  '#980a58',
  '#da565f',
  '#754481',
  '#c11067',
];

export default {
  name: 'exampleChoiceColor',
  components: {
    choiceColor,
  },
  data() {
    return {
      colors,
    };
  },
  methods: {
    updateColor({ index, color }) {
      bus.$emit('setTheme', { index, color });
    },
  },
  mounted() {
    bus.$emit('setTheme', { index: 0, color: this.colors[0] });
  },
};
</script>

<style lang="scss" scoped>
#theme {
  width: 100vw;
  height: 80vh;
  position: relative;
}
</style>
