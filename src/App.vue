<template>
  <div id="app">

    <Header />
    <Content />

  </div>
</template>

<script>

import Content from './partials/template/Content.vue';
import Header from './partials/template/Header.vue';

export default {
  name: 'App',
  components: {
    Content,
    Header
  }
}
</script>

<style>
@import "@/assets/css/divep-css-global.css";
</style>
