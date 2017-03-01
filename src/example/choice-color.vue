<template lang="pug">
#theme
  choice-color(:colors='colors', radius="10em", @updateColor='updateColor')
  .current(:style="theme")
    p index: {{index}}
</template>

<script>
import choiceColor from 'vue-circle-choice';

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
      index: 0,
      color: colors[0],
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
#theme {
  width: 100vw;
  height: 100vh;
  position: relative;
}

.current {
  width: 50%;
  height: 5em;
  line-height: 5em;
  margin: 0 auto;
  transform: translateY(2em);
  font-size: 18px;
  font-weight: bold;
  color: #fff;
}
</style>
