<template>
  <div id="app" >

    <Header  v-if="notIsloginPagev"/>
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
      show: "true"
    }
  },
  components: {
    Content,
    Header
  }, 
  computed:{
    notIsloginPage(){
      return this.$router.name !== "LoginUsuario" ;
    },
  },

}
</script>

<style>
@import "@/assets/css/divep-css-global.css";
</style>
