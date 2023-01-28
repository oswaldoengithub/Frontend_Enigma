<template>
  <v-app>
    <v-app-bar app mt-0 color="black" dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-avatar x-large>
        <img :src="require('./assets/logo-glc.svg')" alt="John" />
      </v-avatar>

      <v-toolbar-title>Gran Logia de Colombia</v-toolbar-title>
      <v-spacer></v-spacer>

      <!-- <v-btn icon to="/">
        <v-icon>mdi-home</v-icon>
        <v-tooltip activator="parent" location="bottom">Inicio</v-tooltip>
      </v-btn> -->

     
        <span v-if="username !== '' ">Bienvenido: {{username}}</span>
   

      <v-btn icon :to="{ name: 'homeafiliadoview' }">
      <v-tooltip bottom >
      <template v-slot:activator="{ on, attrs }">
        <v-icon color="primary" dark v-bind="attrs" v-on="on" >
          mdi-home
        </v-icon>
      </template>
      <span>Ingresar</span>
    </v-tooltip>
  </v-btn>



<!--       <v-btn small v-if="VarLogin == 1 && TipoUsuario == 'Persona'" class="blue darken-1" :to="{name:'areapersona'}">
        <v-icon v-if="TipoUsuario == 'Persona' || TipoUsuario == ''" >mdi-account</v-icon>
        <v-icon v-if="TipoUsuario == 'Empresa' || TipoUsuario == ''" >mdi-home-modern</v-icon>
        <span class="mr-0 ">{{NombreUsuario.toLowerCase()}}</span>
      </v-btn> -->



      


      <v-btn small @click="cerrarSession()" class="dark" text>
        <span class="mr-2">Cerrar Sesión</span> 
        <v-icon>mdi-logout</v-icon>
        </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
<!-- 
    <v-footer dark padless>
      <v-card class="flex" flat tile>
        <v-card-title class="dark">
          <strong class="subheading"
            >¡Conéctate con nosotros en las redes sociales!</strong
          >

          <v-spacer></v-spacer>

          <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text class="py-2 white--text text-center">
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-card-text>
      </v-card>
    </v-footer> -->

    
  </v-app>
</template>

<script>

import auth from "@/auth";
import store from "./store/index.js";
import { mapState } from "vuex";


export default {
  name: "App",

  data: () => ({
    icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
  }),

  methods:{
    async cerrarSession() {        
        try {
          await auth.deleteUserLogged();
          store.commit('AsignarValorLogin', { ValorLogin: 0, username:'',tipoususrio :'' });
          this.$router.push("/login")
        } catch (error) {
          console.log(error);
        } 
    },

  },

  computed: 
  {
      userLogged() {
        return auth.getUserLogged();
      },

  ...mapState(['ValorLogin','username','tipousuario'])
  }

  

};
</script>
