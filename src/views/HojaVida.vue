<template>
  <v-card>

    <v-toolbar class="d-flex justify-space-around align-center flex-column flex-sm-row fill-height text-center font-weight-bold" 
              color="blue-grey lighten-5">        
        <v-toolbar-title>HOJA DE VIDA</v-toolbar-title>
    </v-toolbar>
    <v-tabs vertical color="black">
      <v-tab>
        <v-icon left>mdi-account</v-icon>Informacion Personal
      </v-tab>
      <v-tab>
        <v-icon left>
          mdi-file-edit
        </v-icon>
        Informacion Académica
      </v-tab>
      <v-tab>
        <v-icon left>
          mdi-access-point
        </v-icon>
        Informacion Profecional
      </v-tab>

      <v-tab-item>
        <v-card class="mb-12 mx-auto mx-auto" color="grey lighten-4" height="550px">
            <v-container>

                      <!-- ----------------------------------------------------------------------------------------------------
                      ------------------------------------------ NOMBRES -------------------------------------------------
                      ---------------------------------------------------------------------------------------------------- -->

                <v-layout class="justify-center">                            
                    <v-flex  xs4 >
                    <v-text-field
                    prepend-inner-icon="mdi-account"
                    :counter="20"
                    :rules="nameRules"
                    v-model="VNombres"
                    label="Nombres"
                    filled
                    dense                                                   
                    required
                    >
                    </v-text-field>
                    </v-flex>  

                    <!-- separador -->
                    <span style="color:white">-</span>  

                    <v-flex  xs4 >
                    <v-text-field
                    prepend-inner-icon="mdi-account"
                    :counter="20"
                    :rules="nameRules"
                    v-model="VApellidos"
                    label="Apellidos"
                    filled
                    dense                        
                    required
                    >
                    </v-text-field>
                    </v-flex>             
                </v-layout>


                      <!-- ----------------------------------------------------------------------------------------------------
                      ------------------------------------------ IDENTIFICACION -----------------------------------------------
                      ---------------------------------------------------------------------------------------------------- -->              
                <v-layout class="justify-center">                           
                  <v-flex  xs4>
                    <v-select
                    prepend-inner-icon="mdi-account-box-outline"
                    :items= FiltroTipoDocumento
                    :rules="[v => !!v || 'El tipo de identificacion es requerido']"
                    v-model="VTipoId"
                    label="Tipo Identificación"
                    filled
                    dense
                    required
                    ></v-select>
                  </v-flex>

                    <span style="color:white">-</span> 

                  <v-flex  xs4>
                    <v-text-field
                    prepend-inner-icon="mdi-id-card"
                    :counter="20" 
                    :rules="NroIdRules"                   
                    label="Número Identificación"
                    filled 
                    dense                       
                    required
                    >
                    </v-text-field>
                  </v-flex>  
                </v-layout>


                      <!-- ----------------------------------------------------------------------------------------------------
                      ------------------------------------------ FECHA NACIMIENTO ---------------------------------------------
                      ---------------------------------------------------------------------------------------------------- -->                 

                <v-layout class="justify-center">
                  <v-flex justify-left class="grey lighten-5" xs4>
                    <v-text-field
                    prepend-inner-icon="mdi-cake-variant" 
                    v-model="VFecha"                       
                    label="Fecha Nacimiento"
                    filled
                    dense
                    required>
                    <template v-slot:append-outer>
                        <date-picker v-model="VFecha"/>
                    </template>
                    </v-text-field>
                  </v-flex>

                  <v-flex  xs4>
                    <v-select
                    prepend-inner-icon="mdi-human"
                    :items = FiltroGenero
                    v-model="VGenero"
                    :rules="[v => !!v || 'El Campo Género es requerido']"
                    label="Genero"
                    filled
                    dense
                    required
                    ></v-select>
                  </v-flex>                    
                </v-layout>


                      <!-- ----------------------------------------------------------------------------------------------------
                      ------------------------------------------ UBICACION -----------------------------------------------
                      ---------------------------------------------------------------------------------------------------- -->                 

                <v-layout class="justify-center">
                  <v-flex  xs4 >
                    <v-select
                    prepend-inner-icon="mdi-web"
                    v-model="Vpais"
                    :counter="20"
                    :items=this.Paises
                    label="Pais"
                    filled
                    dense                        
                    required
                    >
                    </v-select>
                    </v-flex>

                    <span style="color:white">-</span>

                    <v-flex  xs4>
                    <v-select
                    prepend-inner-icon="mdi-city"
                    :items = FiltroDepto
                    v-model="VDepto"
                    :rules="[v => !!v || 'El departamento es requerido']"
                    label="Departamento Residencia"
                    filled
                    dense
                    ></v-select>
                    </v-flex>
                  </v-layout>    
  
                  <v-layout class="justify-center">
                    <v-flex  xs4>
                    <v-select
                    prepend-inner-icon="mdi-city"
                    :items = FiltroMcipios
                    v-model="VMuni"
                    :rules="[v => !!v || 'El municipio es requerido']"
                    label="Municipio Residencia"
                    filled
                    dense
                    ></v-select>
                    </v-flex>                    
                      <!-- ----------------------------------------------------------------------------------------------------
                      ------------------------------------------ TELEFONO -------------------------------------------------
                      ---------------------------------------------------------------------------------------------------- -->
                      <span style="color:white">-</span>
                    <v-flex  xs4 >
                    <v-text-field
                    prepend-inner-icon="mdi-cellphone"
                    v-model="VTelefono"
                    :counter="20"
                    :rules="NroTelRules"
                    label="Telefono"
                    filled
                    dense                        
                    required
                    >
                    </v-text-field>
                    </v-flex>
                </v-layout> 

                        <!-- ----------------------------------------------------------------------------------------------------
                      ------------------------------------------ DIRECCION -------------------------------------------------
                      ---------------------------------------------------------------------------------------------------- --> 

                <v-layout class="justify-center">
                    <span style="color:white">-</span>             

                    <v-flex  xs4 >
                    <v-text-field
                    prepend-inner-icon="mdi-sign-direction"
                    v-model="VDireccion"
                    :counter="40"
                    :rules="DireccionlRules"
                    label="Direccion"
                    filled 
                    dense                       
                    required
                    >
                    </v-text-field>
                    </v-flex> 
                </v-layout> 
                                
                <div class="text-center">                   
                    <v-btn color="black" class="ma-2 white--text" >Guardar</v-btn>
                    <v-btn color="black" class="ma-2 white--text">Limpiar</v-btn>
                </div>
            </v-container>
        </v-card>
      </v-tab-item>

      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <p>
              Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis.
            </p>

            <p>
              Suspendisse feugiat. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In hac habitasse platea dictumst. Fusce ac felis sit amet ligula pharetra condimentum.
            </p>

            <p>
              Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Nam commodo suscipit quam. In consectetuer turpis ut velit. Sed cursus turpis vitae tortor. Aliquam eu nunc.
            </p>

            <p>
              Etiam ut purus mattis mauris sodales aliquam. Ut varius tincidunt libero. Aenean viverra rhoncus pede. Duis leo. Fusce fermentum odio nec arcu.
            </p>

            <p class="mb-0">
              Donec venenatis vulputate lorem. Aenean viverra rhoncus pede. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Fusce commodo aliquam arcu. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi.
            </p>
          </v-card-text>
        </v-card>
      </v-tab-item>

      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <p>
              Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
            </p>

            <p class="mb-0">
              Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nam at tortor in tellus interdum sagittis.
            </p>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </v-card>


</template>

<script>
import DatePicker from "../components/DatePicker";
import {mapActions, mapState} from 'vuex';
import store from "../store/index.js";
import Departamentos from "../Data/Departamentos.js";
import Mcipios from "../Data/Municipios.js";


export default {
  components: {
        DatePicker
    },
  data: () => ({
    tab: 'option-1',
    VNombres:"",
    VApellidos:"",
    VFecha:"",
    VTipoId:"",
    TipoId:"",
    NroIdRules:"",
    VGenero:"",
    Genero:"",
    Paises: [
          { value: '170', text: 'Colombia' },
        ],
    ListDepartamento: Departamentos,
    ListMcipios: Mcipios,
    ListTipoId:[],
    ListGenero:[],
    Vpais:[],
    VDepto:"",
    VMuni:"",
    FiltraMunicipio:"",
    telRules:"",
    VTelefono:"",
    DireccionlRules:"",
    VDireccion:"",
    nameRules: [
        v => !!v || 'Campo requerido',
        v => (v && v.length <= 20 && v.length > 2) || 'El campo debe contener entre 3 y 20 caracteres',
        v => /^[a-zA-Z\ ]{3,20}$/.test(v) || 'Campo no valido'
      ],
      FNacimientodRules: [
        v => !!v || 'Fecha nacimiento es requerida',
        v => /^[0-9]{4}(-[0-9]{2}){2}$/.test(v) || 'Fecha Nacimiento no valida'
      ],
      NroIdRules:[
        v => !!v || 'El número de documento es requerido',
        v => /^[0-9]{3,12}$/.test(v) || 'Número documento incorrecto'
      ], 
      NroTelRules:[
        v => !!v || 'El número de telefono es requerido',
        v => /^[0-9]{3,12}$/.test(v) || 'Número telefonico incorrecto'
      ], 

      DireccionlRules:[
         v => !!v || 'Campo requerido',
        v => (v && v.length <= 40 && v.length > 2) || 'El campo debe contener entre 3 y 40 caracteres',
        v => /^[a-zA-Z0-9\ #,.áéíóú-]{3,40}$/.test(v) || 'Campo no valido, revise caracteres especiales'       
      ],
  }),


  beforeMount() {
    store.dispatch('GetDatosClasificacionTipo');
    },  

  computed:{
    ...mapState(['DatosClasificacionTipo']),
    
    FiltroTipoDocumento: function () {
          return this.ListTipoId = this.DatosClasificacionTipo.filter(tipoid => tipoid.IdClasificacion == 1);
        },
    FiltroGenero: function () {
          return this.ListGenero = this.DatosClasificacionTipo.filter(Gen => Gen.IdClasificacion == 2);
        },
    FiltroDepto: function () {
          return this.ListDepartamento = Departamentos.filter(Depto => Depto.CodPais ==this.Vpais);
        },
    FiltroMcipios: function () {
          return this.ListMcipios = Mcipios.filter(Mpio => Mpio.depto ==this.VDepto);
        },
   
  },

  methods: {
    ...mapActions(['GetDatosClasificacionTipo']),
 
      },




  }
    


</script>

<style>
    /* Keyword value/name of color */
    .fila {
        background-color:  rgba(244, 249, 250, 0.952);
        width: 1500;
        height: 1300;
    }

    .Container{
      background-color:  rgba(225, 127, 28, 0.952);
      height: 80%;
    }
</style>