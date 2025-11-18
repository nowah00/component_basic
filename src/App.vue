<script>
import FirstChild from './components/FirstChild.vue';
export default {
  components: {
    FirstChild,
  },
};
</script>

<template>
  <FirstChild /><SecondChild />
  <h1>App.vue</h1>
</template>

<style scoped>
h1,
p {
  color: orange !important;
}
</style>
