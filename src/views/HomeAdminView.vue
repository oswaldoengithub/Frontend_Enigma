<template>
  <v-container>
    <v-row class="mb-6" no-gutters>
      <v-col sm="5" md="6">
        <v-sheet class="pa-2 ma-2">
          <v-card class="mx-auto" color="black">
            <v-img
              class="white--text align-end"
              src="../assets/Reclutador.jpg"
            ></v-img>
            <v-card-title class="Title">Hojas de Vida Participantes</v-card-title>

            <v-card-subtitle>
              <span class="Title">Ingrese o actualice Propuestas laborales</span>
            </v-card-subtitle>

            <v-card-actions>
              <v-btn variant="tonal" color="#ffe697" to="hojavida"
                >Ingresar</v-btn
              >
              <!--  <v-btn text color="teal accent-4"  @click="reveal = true">Learn More</v-btn> -->
            </v-card-actions>
          </v-card>
        </v-sheet>
      </v-col>
      <v-col sm="5" offset-sm="2" md="6" offset-md="0">
        <v-sheet class="pa-2 ma-2">
          <v-card class="mx-auto" color="black">
            <v-img
              class="white--text align-end"
              src="../assets/Reclutador2.jpg"
            ></v-img>
            <v-card-title class="Title">Historial de pagos</v-card-title>

            <v-card-subtitle color="amber">
              <span class="Title">Consulte o realice pagos de suscripción</span>
            </v-card-subtitle>

            <v-card-actions>
              <v-btn variant="tonal" color="#ffe697">Ingresar</v-btn>
              <!--  <v-btn text color="teal accent-4"  @click="reveal = true">Learn More</v-btn> -->
            </v-card-actions>
          </v-card>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
export default {
  name: "HomeAdminView",
};
</script>

<style>
.Title {
  color: rgb(252, 249, 249);
}
</style>




