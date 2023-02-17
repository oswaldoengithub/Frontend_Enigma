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

      <div v-show="username !== ''">Bienvenido: {{ username }}</div>

      <v-divider vertical class="mx-2"></v-divider>

      <v-btn small @click="Inicio()">
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-icon color="yellow" dark v-bind="attrs" v-on="on">
              mdi-home
            </v-icon>
          </template>
          <span>Inicio</span>
        </v-tooltip>
      </v-btn>
      <v-divider vertical class="mx-2"></v-divider>
      <!--       <v-btn small v-if="VarLogin == 1 && TipoUsuario == 'Persona'" class="blue darken-1" :to="{name:'areapersona'}">
        <v-icon v-if="TipoUsuario == 'Persona' || TipoUsuario == ''" >mdi-account</v-icon>
        <v-icon v-if="TipoUsuario == 'Empresa' || TipoUsuario == ''" >mdi-home-modern</v-icon>
        <span class="mr-0 ">{{NombreUsuario.toLowerCase()}}</span>
      </v-btn> -->
      <v-btn small @click="cerrarSession()">
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-icon color="yellow" dark v-bind="attrs" v-on="on">
              mdi-logout
            </v-icon>
          </template>
          <span>Cerrar Sesión</span>
        </v-tooltip>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>

    <v-divider></v-divider>

    <v-footer padless>
    <v-card
      flat
      tile
      class="text-center mx-auto"
      width="100%"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text>Sede en Bogotá.
        Mansión Kopp | Cra. Quinta 17 - 79 | Teléfono: 7 42 61 65 Todos los
          derechos reservados.
      </v-card-text>
      <v-card-text>
        {{ new Date().getFullYear() }} — <strong>Gran Logia de Colombia</strong>
      </v-card-text>
    </v-card>
  </v-footer>   
  </v-app>
</template>

<script>
import auth from "@/auth";
import store from "./store/index.js";
import { mapState } from "vuex";

export default {
  name: "App",

  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),

  

  methods: {
    async cerrarSession() {
      try {
        await auth.deleteUserLogged();
        store.commit("AsignarValorLogin", {
          ValorLogin: 0,
          username: "",
          tipousuario: "",
        });
        this.$router.push("/login");
      } catch (error) {
        console.log(error);
      }
    },
      
     Inicio () {
     if(this.tipousuario !=='Afiliado')
      this.$router.push("/HomeAdminView")
      else 
      this.$router.push("/HomeAfiliadoView");
    }
    /* async InicioSesion() {
      try {
        await auth.getUserLogged();
        store.commit("AsignarValorLogin", {
          ValorLogin: 1,
          username: "",
          tipousuario: "",
        });
      
      } catch (error) {
        console.log(error);
      }
    }, */
  },
  computed: {
    userLogged() {
      return auth.getUserLogged();
    },

    ...mapState(["ValorLogin", "username", "tipousuario"]),
  },
};
</script>