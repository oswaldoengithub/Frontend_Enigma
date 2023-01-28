<template>

    <div class="home">  

 
      <div v-if="userLogged" class="mt-2">
          <HomeAfiliado/>
      </div>
      <div v-else>
      <br/>
          <login/>
      </div>
  
      
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import HomeAfiliado from '@/components/HomeAfiliado.vue'
  import login from '@/views/Login.vue'
  import auth from "@/auth";
  import {mapMutations, mapState} from 'vuex';
  import store from "../store/index.js"; 
  
  export default {
    name: 'CargueArchivos',
    components: {
      HomeAfiliado,
      login
    },
    views:{
        login
    },
  

  
    methods: {
      ...mapMutations(['AsignarValorLogin'])
    },
    computed: {
      userLogged() {
        return auth.getUserLogged();
      },
  
    //...mapState(['VarLogin'])
  }
  }
  </script>