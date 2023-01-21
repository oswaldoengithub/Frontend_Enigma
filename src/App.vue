<template>
  <v-app>

    <v-app-bar app mt-0 color="black" dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-avatar x-large>
      <img :src="require('./assets/logo-glc.svg')" alt="John" >
      </v-avatar>
          
      <v-toolbar-title>Gran Logia de Colombia</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn icon to="/">
        <v-icon>mdi-home</v-icon>
        <v-tooltip activator="parent" location="bottom" >Inicio</v-tooltip>
      </v-btn>   

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon :to="{name:'login'}">
        <v-icon>mdi-login</v-icon>
        <v-tooltip activator="parent" location="bottom">Ingresar</v-tooltip>
      </v-btn>
     </v-app-bar>



    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>



export default {
  name: 'App',

  data: () => ({
    //
  }),
}
</script>
