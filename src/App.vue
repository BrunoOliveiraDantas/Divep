<template>
  <div id="app" >

    <Header  v-if="notIsLoginPage" />
    <Content />

  </div>
</template>

<script>


import Content from './partials/template/Content.vue';
import Header from './partials/template/Header.vue';

export default {
  name: 'App',

  data(){
    return {
    
    }
  },
  components: {
    Content,
    Header
  }, 
computed: {
    notIsLoginPage() {
      return this.$route.name !== "login";
    }
  }

}
</script>

<style>
@import "@/assets/css/divep-css-global.css";
</style>
