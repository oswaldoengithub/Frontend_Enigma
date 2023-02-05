<template>
  <v-card class="mb-12 mx-auto">
    <v-tabs vertical color="yellow" dark>
      <v-tab> <v-icon left>mdi-account</v-icon>Informacion Personal </v-tab>
      <v-tab> <v-icon left>mdi-file-edit</v-icon>Informacion Académica </v-tab>
      <v-tab>
        <v-icon left>mdi-access-point</v-icon>Informacion Profesional
      </v-tab>

      <v-tab-item>
        <v-container>
          <v-subheader class="justify-center"
            ><h3>INFORMACION PERSONAL</h3></v-subheader
          >
          <!-- ----------------------------------------------------------------------------------------------------
                      ------------------------------------------ NOMBRES -------------------------------------------------
                      ---------------------------------------------------------------------------------------------------- -->
          <v-form ref="form" v-model="valid" lazy-validation  @submit.prevent="submitHandler">
            <v-layout class="justify-center">
              <v-flex xs4>
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
              <span style="color: white">-</span>

              <v-flex xs4>
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

              <!-- separador -->
              <span style="color: white">-</span>

              <v-flex xs4>
                <v-text-field
                  prepend-inner-icon="mdi-account"
                  :counter="20"
                  :rules="nameRules"
                  v-model="VProfesion"
                  label="Profesion"
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
              <v-flex xs4>
                <v-select
                  prepend-inner-icon="mdi-account-box-outline"
                  :items="FiltroTipoDocumento"
                  :rules="[
                    (v) => !!v || 'El tipo de identificacion es requerido',
                  ]"
                  v-model="VTipoId"
                  label="Tipo Identificación"
                  filled
                  dense
                  required
                ></v-select>
              </v-flex>

              <span style="color: white">-</span>

              <v-flex xs4>
                <v-text-field
                  prepend-inner-icon="mdi-id-card"
                  :counter="20"
                  v-model="VNroId"
                  :rules="NroIdRules"
                  label="Número Identificación"
                  filled
                  dense
                  required
                >
                </v-text-field>
              </v-flex>

              <!-- ----------------------------------------------------------------------------------------------------
                      ------------------------------------------ FECHA NACIMIENTO ---------------------------------------------
                      ---------------------------------------------------------------------------------------------------- -->
              <span style="color: white">-</span>

              <v-flex justify-left class="grey lighten-5" xs4>
                <v-text-field
                  prepend-inner-icon="mdi-cake-variant"
                  v-model="VFechaNacimiento"
                  label="Fecha Nacimiento"
                  :rules="FNacimientodRules"
                  filled
                  dense
                  required
                >
                  <template v-slot:append-outer>
                    <date-picker v-model="VFechaNacimiento" />
                  </template>
                </v-text-field>
              </v-flex>
            </v-layout>
            <!-- ----------------------------------------------------------------------------------------------------
                      ------------------------------------------CODIGO PAIS NACIMIENTO -------------------------------------------------
                      ---------------------------------------------------------------------------------------------------- -->

            <v-layout class="justify-center">
              <v-flex xs4>
                <v-select
                  prepend-inner-icon="mdi-web"
                  v-model="VCodPaisNacimiento"
                  :counter="20"
                  :items="this.Paises"
                  label="Pais Nacimiento"
                  filled
                  dense
                  :rules="[
                    (v) => !!v || 'El Pais Nacimiento es requerido',
                  ]"
                  required
                ></v-select>
              </v-flex>

              <span style="color: white">-</span>
              <v-flex xs4>
                <v-select
                  prepend-inner-icon="mdi-city"
                  v-model="VCodDeptoNacimiento"
                  :items="FiltroCdoDepto"
                  :counter="20"
                  label="Departamento Nacimiento"
                  filled
                  dense
                  required
                  :rules="[(v) =>!!v ||'El Campo Departamento Nacimiento es requerido',]"
                >
                </v-select>
              </v-flex>

              <span style="color: white">-</span>
              <v-flex xs4>
                <v-select
                  prepend-inner-icon="mdi-city"
                  v-model="VCodMunNacimiento"
                  :items="FiltroCdoMcipios"
                  :counter="20"
                  :rules="[(v) =>!!v ||'El Campo Municipio Nacimiento es requerido',]"
                  label="Municipio Nacimiento"
                  filled
                  dense
                  required
                >
                </v-select>
              </v-flex>
            </v-layout>
            <!------------------------------>

            <v-layout class="justify-center">
              <v-flex xs4>
                <v-select
                  prepend-inner-icon="mdi-human"
                  :items="FiltroEstadoCivil"
                  v-model="VEstadoCivil"
                  :rules="[(v) => !!v || 'El Campo Estado Civil es requerido']"
                  label="Estado Civil"
                  filled
                  dense
                  required
                ></v-select>
              </v-flex>

              <span style="color: white">-</span>
              <v-flex xs4>
                <v-text-field
                  prepend-inner-icon="mdi-id-card"
                  v-model="VReligion"
                  :counter="20"
                  label="Religión"
                  filled
                  dense
                  required
                  :rules="[(v) => !!v || 'El Campo religión es requerido']"
                >
                </v-text-field>
              </v-flex>

              <!-- ----------------------------------------------------------------------------------------------------
                      ------------------------------------------ TELEFONO -------------------------------------------------
                      ---------------------------------------------------------------------------------------------------- -->
              <span style="color: white">-</span>
              <v-flex xs4>
                <v-text-field
                  prepend-inner-icon="mdi-cellphone"
                  v-model="VTelfijo"
                  :counter="20"
                  :rules="NroTelRules"
                  label="Telefono Fijo"
                  filled
                  dense
                  required
                >
                </v-text-field>
              </v-flex>
            </v-layout>

            <v-layout class="justify-center">
              <span style="color: white">-</span>
              <v-flex xs4>
                <v-text-field
                  prepend-inner-icon="mdi-cellphone"
                  v-model="VTelMovil"
                  :counter="20"
                  :rules="NroTelRules"
                  label="Telefono Movil"
                  filled
                  dense
                  required
                >
                </v-text-field>
              </v-flex>

              <!-- ----------------------------------------------------------------------------------------------------
              ------------------------------------------ DIRECCION -------------------------------------------------
              ---------------------------------------------------------------------------------------------------- -->

              <span style="color: white">-</span>

              <v-flex xs4>
                <v-text-field
                  prepend-inner-icon="mdi-sign-direction"
                  v-model="VDireccion"
                  :counter="40"
                  :rules="DireccionlRules"
                  label="Direccion de Residencia"
                  filled
                  dense
                  required
                >
                </v-text-field>
              </v-flex>

              <!-- ----------------------------------------------------------------------------------------------------
                        ------------------------------------------ UBICACION -----------------------------------------------
                        ---------------------------------------------------------------------------------------------------- -->

              <span style="color: white">-</span>
              <v-flex xs4>
                <v-text-field
                  prepend-inner-icon="mdi-sign-direction"
                  v-model="VBarrio"
                  :counter="40"
                  :rules="DireccionlRules"
                  label="Barrio de Residencia"
                  filled
                  dense
                  required
                >
                </v-text-field>
              </v-flex>
            </v-layout>
            <v-layout class="justify-center">
              <span style="color: white">-</span>

              <v-flex xs4>
                <v-select
                  prepend-inner-icon="mdi-web"
                  v-model="VCodPaisResidencia"
                  :counter="20"
                  :items="this.Paises"
                  label="Pais Residencia"
                  filled
                  dense
                  :rules="[(v) => !!v || 'El País de residencia es requerido']"
                  required
                >
                </v-select>
              </v-flex>

              <span style="color: white">-</span>

              <v-flex xs4>
                <v-select
                  prepend-inner-icon="mdi-city"
                  :items="FiltroDepto"
                  v-model="VCodDeptoResidencia"
                  :rules="[(v) => !!v || 'El departamento Residencia es requerido',]"
                  label="Departamento Residencia"
                  filled
                  dense
                ></v-select>
              </v-flex>
              <span style="color: white">-</span>
              <v-flex xs4>
                <v-select
                  prepend-inner-icon="mdi-city"
                  :items="FiltroMcipios"
                  v-model="VCodMunResidencia"
                  :rules="[(v) => !!v || 'El municipio de Residencia es requerido',]"
                  label="Municipio Residencia"
                  filled
                  dense
                ></v-select>
              </v-flex>
            </v-layout>

            <div class="text-center">
              <v-btn
                @click="ValidarFormularioPersonales"
                color="black"
                class="ma-2 yellow--text"
                >Guardar</v-btn
              >
              <v-btn @click="Limpiar" color="black" class="ma-2 yellow--text"
                >Limpiar</v-btn
              >
            </div>
          </v-form>
          <v-snackbar v-model="snackbar" color="green darken-2">{{ mensaje }}</v-snackbar>
        </v-container>
      </v-tab-item>

      <v-tab-item>
        <v-container>
          <v-subheader class="justify-center"
            ><h3>INFORMACION ACADEMICA</h3></v-subheader
          >
          <!-- ----------------------------------------------------------------------------------------------------
        ------------------------------------------ CENTRO EDUCATIVO ---------------------------------------------
        ---------------------------------------------------------------------------------------------------- -->

          <v-form ref="form" v-model="valid" lazy-validation>
            <br />

            <v-alert v-if="alertdeañoinicial == 1" dense type="error">
              La fecha inicial no puede ser mayor a la fecha final
            </v-alert>

            <v-layout class="justify-center">
              <div class="justify-center">
                <v-flex xs6 md1>
                  <v-icon text class="justify-center" style="font-size: 50px"
                    >mdi-library</v-icon
                  >
                </v-flex>
              </div>
              <v-flex xs4>
                <v-text-field
                  v-model="VEducativo"
                  :counter="50"
                  :rules="ceducativo"
                  label="Centro Educativo"
                  filled
                  required
                >
                </v-text-field>
              </v-flex>

              <!-- separador -->
              <span style="color: white">-</span>

              <v-flex xs4>
                <v-select
                  :items="nestudios"
                  v-model="VEstudio"
                  :rules="[(v) => !!v || 'El Nivel de Estudios es requerido']"
                  filled
                  label="Nivel de Estudios"
                  dense
                ></v-select>
              </v-flex>
            </v-layout>

            <!-- ----------------------------------------------------------------------------------------------------
             ------------------------------------------ PERIODO ------------------------------------------------------
             ---------------------------------------------------------------------------------------------------- -->

            <v-layout class="justify-center">
              <div class="justify-left">
                <v-flex xs6 md1>
                  <v-icon class="justify-center" style="font-size: 50px"
                    >mdi-update</v-icon
                  >
                </v-flex>
              </div>

              <v-flex xs2>
                <v-select
                  :items="año"
                  v-model="VAñoInicial"
                  :rules="[(v) => !!v || 'El año inicial es requerido']"
                  filled
                  label="Periodo inicial año"
                  dense
                ></v-select>
              </v-flex>

              <!-- separador -->
              <span style="color: white">-</span>

              <v-flex xs2>
                <v-select
                  :items="mes"
                  v-model="VMesInicial"
                  :rules="[(v) => !!v || 'El mes inicial es requerido']"
                  filled
                  label="Periodo inicial mes"
                  dense
                ></v-select>
              </v-flex>

              <!-- separador -->
              <span style="color: white">-</span>

              <v-flex xs2>
                <v-select
                  :items="año"
                  v-model="VAñoFinal"
                  :rules="[(v) => !!v || 'El año final es requerido']"
                  filled
                  label="Periodo final año"
                  dense
                ></v-select>
              </v-flex>

              <!-- separador -->
              <span style="color: white">-</span>

              <v-flex xs2>
                <v-select
                  :items="mes"
                  v-model="VMesFinal"
                  :rules="[(v) => !!v || 'El mes final es requerido']"
                  filled
                  label="Periodo final mes"
                  dense
                ></v-select>
              </v-flex>
            </v-layout>

            <!-- ----------------------------------------------------------------------------------------------------
             ------------------------------------------ ESTADO -------------------------------------------------------
             ---------------------------------------------------------------------------------------------------- -->

            <v-layout class="justify-center">
              <div class="justify-center">
                <v-flex xs6 md1>
                  <v-icon class="justify-center" style="font-size: 50px"
                    >mdi-checkbox-multiple-marked</v-icon
                  >
                </v-flex>
              </div>
              <v-flex xs4>
                <v-select
                  :items="eeducacion"
                  v-model="VEeducacion"
                  :rules="[(v) => !!v || 'El Estado de educación es requerido']"
                  filled
                  label="Estado educación"
                  dense
                ></v-select>
              </v-flex>

              <span style="color: white">-</span>

              <v-flex xs4>
                <!--     <v-select
                    :items="TipoEducacion"
                    v-model="tipoeducacion"
                    filled
                    label="Nivel educativo"
                    dense
                    ></v-select> -->
              </v-flex>
            </v-layout>

            <!-- Botones de accion en el componente de formacion -->

            <div class="text-center">
              <v-btn color="black" class="ma-2 yellow--text">Guardar</v-btn>
              <v-btn @click="Limpiar" color="black" class="ma-2 yellow--text"
                >Limpiar</v-btn
              >
            </div>
          </v-form>
        </v-container>
      </v-tab-item>

      <v-tab-item>
        <v-container>
          <v-subheader class="justify-center"
            ><h3>INFORMACION LABORAL</h3></v-subheader
          >
          <!-- ----------------------------------------------------------------------------------------------------
        ------------------------------------------ EMPRESA ---------------------------------------------
        ---------------------------------------------------------------------------------------------------- -->

          <v-form ref="form" v-model="valid" lazy-validation>
            <br />
            <v-alert v-if="alertdeañoinicial == 1" dense type="error">
              La fecha inicial no puede ser mayor a la fecha final
            </v-alert>

            <v-layout class="justify-center">
              <div class="justify-center">
                <v-flex xs6 md1>
                  <v-icon text class="justify-center" style="font-size: 50px"
                    >mdi-store</v-icon
                  >
                </v-flex>
              </div>
              <v-flex xs4>
                <v-text-field
                  v-model="VEmpresa"
                  :counter="30"
                  :rules="nameRules"
                  label="Nombre de la Empresa"
                  filled
                  required
                >
                </v-text-field>
              </v-flex>

              <!-- separador -->
              <span style="color: white">-</span>

              <v-flex xs4>
                <v-select
                  :items="ListAreas"
                  v-model="VArea"
                  :rules="[(v) => !!v || 'El Área es requerida']"
                  filled
                  label="Área"
                  dense
                ></v-select>
              </v-flex>
            </v-layout>

            <!-- ----------------------------------------------------------------------------------------------------
             ------------------------------------------ PERIODO ------------------------------------------------------
             ---------------------------------------------------------------------------------------------------- -->

            <v-layout class="justify-center">
              <div class="justify-left">
                <v-flex xs6 md1>
                  <v-icon class="justify-center" style="font-size: 50px"
                    >mdi-update</v-icon
                  >
                </v-flex>
              </div>

              <v-flex xs2>
                <v-select
                  :items="año"
                  v-model="VAñoInicialExperiencia"
                  :rules="[(v) => !!v || 'El año inicial es requerido']"
                  filled
                  label="Año inicial"
                  dense
                ></v-select>
              </v-flex>

              <!-- separador -->
              <span style="color: white">-</span>

              <v-flex xs2>
                <v-select
                  :items="mes"
                  v-model="VMesInicial"
                  :rules="[(v) => !!v || 'El mes inicial es requerido']"
                  filled
                  label="Mes inicial"
                  dense
                ></v-select>
              </v-flex>

              <!-- separador -->
              <span style="color: white">-</span>

              <v-flex xs2>
                <v-select
                  :items="año"
                  v-model="VAñoFinal"
                  :rules="[(v) => !!v || 'El año final es requerido']"
                  filled
                  label="Año final"
                  dense
                ></v-select>
              </v-flex>

              <!-- separador -->
              <span style="color: white">-</span>

              <v-flex xs2>
                <v-select
                  :items="mes"
                  v-model="VMesFinal"
                  :rules="[(v) => !!v || 'El mes final es requerido']"
                  filled
                  label="Mes final"
                  dense
                ></v-select>
              </v-flex>
            </v-layout>

            <!-- ----------------------------------------------------------------------------------------------------
                ------------------------------------------ UBICACION -----------------------------------------------
                ---------------------------------------------------------------------------------------------------- -->

            <v-layout class="justify-center">
              <div class="justify-left">
                <v-flex xs6 md1>
                  <v-icon class="justify-center" style="font-size: 50px"
                    >mdi-city</v-icon
                  >
                </v-flex>
              </div>

              <v-flex xs4>
                <v-select
                  :items="FiltroDeptoLabor"
                  v-model="VDeptoLabor"
                  :rules="[
                    (v) => !!v || 'El departamento donde Labora es requerido',
                  ]"
                  filled
                  label="Departamento donde Labora"
                  dense
                ></v-select>
              </v-flex>

              <!-- separador -->
              <span style="color: white">-</span>

              <v-flex xs4>
                <v-select
                  :items="FiltroMcipiosLabor"
                  v-model="VMuniLabor"
                  :rules="[
                    (v) => !!v || 'El municipio donde Labora es requerido',
                  ]"
                  filled
                  label="Municipio donde Labora"
                  dense
                ></v-select>
              </v-flex>
            </v-layout>

            <!-- ----------------------------------------------------------------------------------------------------
             ------------------------------------------ ESTADO -------------------------------------------------------
             ---------------------------------------------------------------------------------------------------- -->

            <v-layout class="justify-center">
              <div class="justify-center">
                <v-flex xs6 md1>
                  <v-icon class="justify-center" style="font-size: 50px"
                    >mdi-folder-account</v-icon
                  >
                </v-flex>
              </div>
              <v-flex xs4>
                <v-text-field
                  v-model="VCargo"
                  :counter="30"
                  :rules="RulesCargo"
                  label="Cargo"
                  filled
                  required
                >
                </v-text-field>
              </v-flex>

              <span style="color: white">-</span>

              <v-flex xs4>
                <v-textarea
                  outlined
                  height="90"
                  v-model="VFunciones"
                  :rules="RulesFunciones"
                  name="Funciones"
                  label="Funciones y logros del cargo"
                ></v-textarea>
              </v-flex>
            </v-layout>

            <!-- Botones de accion en el componente de formacion -->
            <div class="text-center">
              <v-btn color="black" class="ma-2 yellow--text">Guardar</v-btn>
              <v-btn @click="Limpiar" color="black" class="ma-2 yellow--text"
                >Limpiar</v-btn
              >
            </div>
          </v-form>
        </v-container>
      </v-tab-item>
    </v-tabs>
  </v-card>
</template>

<script>
import DatePicker from "../components/DatePicker";
import { mapActions, mapState, mapMutations } from "vuex";
import store from "../store/index.js";
import Departamentos from "../Data/Departamentos.js";
import Mcipios from "../Data/Municipios.js";

export default {
  name: "Formacion",
  components: {
    DatePicker,
  },
  data: () => ({
    tab: "option-1",
    snackbar: false,
    mensaje: "Guardado con exito",
    //V-models de datos personales
    VNombres: "",
    VApellidos: "",
    VProfesion: "",
    VTipoId: "",
    VNroId: "",
    VFechaNacimiento: "",
    VEstadoCivil: "",
    VReligion: "",
    VTelfijo: "",
    VTelMovil: "",
    VDireccion: "",
    VBarrio: "",
    VCodPaisResidencia: "",
    VCodDeptoResidencia: "",
    VCodMunResidencia: "",
    VCodPaisNacimiento: "",
    VCodDeptoNacimiento: "",
    VCodMunNacimiento: "",
    //v-model datos academicos
    VEducativo: "",
    VEstudio: "",
    VAñoInicial: "",
    VMesInicial: "",
    VAñoFinal: "",
    VMesFinal: "",
    VEeducacion: "",
    // v-model datos laborales
    VEmpresa: "",
    VArea: "",
    VAñoInicialExperiencia: "",
    VMesInicial: "",
    VAñoFinal: "",
    VMesFinal: "",
    VDeptoLabor: "",
    VMuniLabor: "",
    VCargo: "",
    VFunciones: "",
    //
    Paises: [{ value: "170", text: "Colombia" }],
    ListDepartamento: Departamentos,
    ListMcipios: Mcipios,
    FiltraMunicipio: "",
    ListTipoId: [],
    TipoId: "",
    ListEstadoCivil: [],
    EstadoCivil: "",
    NroIdRules: "",
    telRules: "",
    DireccionlRules: "",
    nameRules: [
      (v) => !!v || "Campo requerido",
      (v) =>
        (v && v.length <= 20 && v.length > 2) ||
        "El campo debe contener entre 3 y 20 caracteres",
      (v) => /^[a-zA-Z\ ]{3,20}$/.test(v) || "Campo no valido",
    ],
    FNacimientodRules: [
      (v) => !!v || "Fecha nacimiento es requerida",
      (v) => /^[0-9]{4}(-[0-9]{2}){2}$/.test(v) || "Fecha Nacimiento no valida",
    ],
    NroIdRules: [
      (v) => !!v || "El número de documento es requerido",
      (v) => /^[0-9]{3,12}$/.test(v) || "Número documento incorrecto",
    ],
    NroTelRules: [
      (v) => !!v || "El número de telefono es requerido",
      (v) => /^[0-9]{3,12}$/.test(v) || "Número telefonico incorrecto",
    ],

    DireccionlRules: [
      (v) => !!v || "Campo requerido",
      (v) =>
        (v && v.length <= 40 && v.length > 2) ||
        "El campo debe contener entre 3 y 40 caracteres",
      (v) =>
        /^[a-zA-Z0-9\ #,.áéíóú-]{3,40}$/.test(v) ||
        "Campo no valido, revise caracteres especiales",
    ],
    //REGLAS EXPERIENCIA LABORAL

    RulesCargo: [(v) => !!v || "El Cargo es requerido"],
    RulesFunciones: [(v) => !!v || "La funcion es requerido"],

    //INFORMACION ACADEMICA
    FormacionValid: true,
    valid: true,
    eeducacion: [
      { value: "1", text: "Culminado" },
      { value: "2", text: "En curso" },
      { value: "3", text: "Abandonado / aplazado" },
    ],
    alertdeañoinicial: 0,
    tipoeducacion: "",
    TipoEducacion: [
      { value: "1", text: "Educacon superior" },
      { value: "2", text: "Educacion técnica" },
      { value: "3", text: "Cursos y/o seminarios" },
    ],
    nestudios: [
      { value: "1", text: "Auxiliar" },
      { value: "2", text: "Universidad / Carrera Técnica" },
      { value: "3", text: "Universidad / Carrera Tecnológica" },
      { value: "4", text: "Universidad / Carrera Profesional" },
      { value: "5", text: "Postgrado / Especialización" },
      { value: "6", text: "Postgrado / Maestria" },
      { value: "7", text: "Postgrado / Doctorado" },
    ],
    //AREAS LABORALES
    ListAreas: [
      { value: "1", text: "Atención a clientes" },
      { value: "2", text: "Odontología general" },
      { value: "3", text: "Ortodoncia" },
      { value: "4", text: "Implantes" },
      { value: "5", text: "Endodoncia" },
      { value: "6", text: "Periodoncia" },
      { value: "7", text: "Estética dental y Perioral" },
      { value: "8", text: "Cirugía oral" },
      { value: "9", text: "Prótesis fija" },
      { value: "10", text: "Prótesis removible" },
      { value: "11", text: "Odontopediatría" },
      { value: "12", text: "Auxiliar" },
      { value: "13", text: "Secretaria" },
    ],

    año: [
      { value: 2030, text: "2030" },
      { value: 2029, text: "2029" },
      { value: 2028, text: "2028" },
      { value: 2027, text: "2027" },
      { value: 2026, text: "2026" },
      { value: 2025, text: "2025" },
      { value: 2024, text: "2024" },
      { value: 2023, text: "2023" },
      { value: 2022, text: "2022" },
      { value: 2021, text: "2021" },
      { value: 2020, text: "2020" },
      { value: 2019, text: "2019" },
      { value: 2018, text: "2018" },
      { value: 2017, text: "2017" },
      { value: 2016, text: "2016" },
      { value: 2015, text: "2015" },
      { value: 2014, text: "2014" },
      { value: 2013, text: "2013" },
      { value: 2012, text: "2012" },
      { value: 2011, text: "2011" },
      { value: 2010, text: "2010" },
      { value: 2009, text: "2009" },
      { value: 2008, text: "2008" },
      { value: 2007, text: "2007" },
      { value: 2006, text: "2006" },
      { value: 2005, text: "2005" },
      { value: 2004, text: "2004" },
      { value: 2003, text: "2003" },
      { value: 2002, text: "2002" },
      { value: 2001, text: "2001" },
      { value: 2000, text: "2000" },
      { value: 1999, text: "1999" },
      { value: 1998, text: "1998" },
      { value: 1997, text: "1997" },
      { value: 1996, text: "1996" },
      { value: 1995, text: "1995" },
      { value: 1994, text: "1994" },
      { value: 1993, text: "1993" },
      { value: 1992, text: "1992" },
      { value: 1991, text: "1991" },
      { value: 1990, text: "1990" },
      { value: 1989, text: "1989" },
      { value: 1988, text: "1988" },
      { value: 1987, text: "1987" },
      { value: 1986, text: "1986" },
      { value: 1985, text: "1985" },
      { value: 1984, text: "1984" },
      { value: 1983, text: "1983" },
      { value: 1982, text: "1982" },
      { value: 1981, text: "1981" },
      { value: 1980, text: "1980" },
      { value: 1979, text: "1979" },
      { value: 1978, text: "1978" },
      { value: 1977, text: "1977" },
      { value: 1976, text: "1976" },
      { value: 1975, text: "1975" },
      { value: 1974, text: "1974" },
      { value: 1973, text: "1973" },
      { value: 1972, text: "1972" },
      { value: 1971, text: "1971" },
      { value: 1970, text: "1970" },
    ],
    mes: [
      { value: "Enero", text: "Enero" },
      { value: "Febrero", text: "Febrero" },
      { value: "Marzo", text: "Marzo" },
      { value: "Abril", text: "Abril" },
      { value: "Mayo", text: "Mayo" },
      { value: "Junio", text: "Junio" },
      { value: "Julio", text: "Julio" },
      { value: "Agosto", text: "Agosto" },
      { value: "Septiembre", text: "Septiembre" },
      { value: "Octubre", text: "Octubre" },
      { value: "Noviembre", text: "Noviembre" },
      { value: "Diciembre", text: "Diciembre" },
    ],
    ceducativo: [
      (v) => !!v || "Descripción del centro educativo es requerido",
      (v) =>
        (v && v.length <= 50) || "Descripción debe ser menor que 20 caracteres",
    ],
  }),

  beforeMount() {
    store.dispatch("GetDatosClasificacionTipo");

    //FORMACION ACADEMICA
    if (
      store.state.IndexFormacion !== "" &&
      store.state.AccionFormacion == "Editar"
    ) {
      for (let i = 0; i < store.state.FormacionAcademica.length; i++) {
        if (i == store.state.IndexFormacion) {
          var FiltroNivel = this.nestudios.filter(function (nivel) {
            return nivel.text == store.state.FormacionAcademica[i].Nivel;
          });

          this.VEducativo = store.state.FormacionAcademica[i].CentroEducativo;
          this.VEstudio = FiltroNivel[0].value;
          this.VAñoInicial = store.state.FormacionAcademica[i].AñoInicial;
          this.VMesInicial = store.state.FormacionAcademica[i].MesInicial;
          this.VAñoFinal = store.state.FormacionAcademica[i].AñoFinal;
          this.VMesFinal = store.state.FormacionAcademica[i].MesFinal;
          this.VEeducacion = store.state.FormacionAcademica[i].Estado;
        }
      }
    }

    //EXPERIENCIA LABORAL

    {
      if (
        store.state.IndexExperiencia !== "" &&
        store.state.AccionExperiencia == "Editar"
      ) {
        for (let i = 0; i < store.state.ExperienciaProfesional.length; i++) {
          if (i == store.state.IndexExperiencia) {
            var FiltroArea = this.ListAreas.filter(function (area) {
              return area.text == store.state.ExperienciaProfesional[i].Area;
            });

            this.VEmpresa = store.state.ExperienciaProfesional[i].Empresa;
            this.VArea = FiltroArea[0].value;
            this.VAñoInicialExperiencia =
              store.state.ExperienciaProfesional[
                i
              ].AñoInicialExperiencia.toString();
            this.VMesInicial =
              store.state.ExperienciaProfesional[i].MesInicialExperiencia;
            this.VAñoFinal =
              store.state.ExperienciaProfesional[
                i
              ].AñoFinalExperiencia.toString();
            this.VMesFinal =
              store.state.ExperienciaProfesional[i].MesFinalExperiencia;
            this.VMuni = store.state.ExperienciaProfesional[i].McpioExperiencia;
            this.VDepto =
              store.state.ExperienciaProfesional[i].DeptoExperiencia;
            this.VCargo = store.state.ExperienciaProfesional[i].Cargo;
            this.VFunciones = store.state.ExperienciaProfesional[i].Funciones;
          }
        }
      }
    }
  },

  computed: {
    ...mapState([
      "DatosClasificacionTipo",
      "numero",
      "wilson",
      "TipoIdentificacion",
      "CentroEducativo",
      "MuestraForm",
      "NivelEstudios",
      "AñoInicial",
      "MesInicial",
      "AñoFinal",
      "MesFinal",
      "EstadoEducacion",
      "FormacionAcademica",
      "IndexFormacion",
      "AccionFormacion",
    ]),

    FiltroTipoDocumento: function () {
      return (this.ListTipoId = this.DatosClasificacionTipo.filter(
        (tipoid) => tipoid.IdClasificacion == 1
      ));
    },
    FiltroEstadoCivil: function () {
      return (this.ListEstadoCivil = this.DatosClasificacionTipo.filter(
        (Gen) => Gen.IdClasificacion == 2
      ));
    },
    FiltroDepto: function () {
      return (this.ListDepartamento = Departamentos.filter(
        (Depto) => Depto.CodPais == this.VCodPaisResidencia
      ));
    },
    FiltroMcipios: function () {
      return (this.ListMcipios = Mcipios.filter(
        (Mpio) => Mpio.depto == this.VCodDeptoResidencia
      ));
    },
    FiltroCdoDepto: function () {
      return (this.ListDepartamento = Departamentos.filter(
        (Depto) => Depto.CodPais == this.VCodPaisNacimiento
      ));
    },
    FiltroCdoMcipios: function () {
      return (this.ListMcipios = Mcipios.filter(
        (Mpio) => Mpio.depto == this.VCodDeptoNacimiento
      ));
    },
    FiltroDeptoLabor: function () {
      return (this.ListDepartamento = Departamentos.filter(
        (Depto) => Depto.CodPais == this.VCodPaisResidencia
      ));
    },
    FiltroMcipiosLabor: function () {
      return (this.ListMcipios = Mcipios.filter(
        (Mpio) => Mpio.depto == this.VDeptoLabor
      ));
    },
  },

  methods: {
    ...mapMutations(["AsignarValoresPersonales"]),
    ...mapActions([
      "GetDatosClasificacionTipo",
      "Accion_GuardarValoresPersonales",
    ]),

    ValidarFormularioPersonales() {
      if (this.$refs.form.validate()) {
        const Candidato = {
          Nombres: this.VNombres,
          Apellidos: this.VApellidos,
          Profesion: this.VProfesion,
          TipoId: this.VTipoId,
          NroId: this.VNroId,
          FechaNacimiento: this.VFechaNacimiento,
          EstadoCivil: this.VEstadoCivil,
          Religion: this.VReligion,
          TelefonoFijo: this.VTelfijo,
          TelefonoMovil: this.VTelMovil,
          DireccionResidencia: this.VDireccion,
          BarrioResidencia: this.VBarrio,
          CodPaisResidencia: this.VCodPaisResidencia,
          CodDeptoResidencia: this.VCodDeptoResidencia,
          CodMunResidencia: this.VCodMunResidencia,
          CodPaisNacimiento: this.VCodPaisNacimiento,
          CodDeptoNacimiento: this.VCodDeptoNacimiento,
          CodMunNacimiento: this.VCodMunNacimiento,
        };

        //Actualizar el estado de datos personales con la mutacion
        store.commit("AsignarValoresPersonales", { Candidato });
        store.dispatch("Accion_GuardarValoresPersonales");
      } else {
        this.$refs.form.validate();
      }
    },

    
    submitHandler() {
        if (this.$refs.form.validate()) {
          setTimeout(
            (this.handler = () => {
              this.snackbar = true;
            }),
            (this.timeout = 500),
            this.$refs.formulario.reset()
          );
          
        }
      },
    

    validate() {
      this.$refs.form.validate();
    },

    reset() {
      store.commit("CambiarMuestraForm", { show: 0 });
      this.$refs.form.reset();
    },
    Limpiar() {
      this.$refs.form.reset();
    },

    resetValidation() {
      this.$refs.form.resetValidation();
    },

    ValidarFormulario() {
      if (this.$refs.form.validate()) {
        //this.valid = true
        //validar los periodos
        let mes1 = "";
        let mes2 = "";

        switch (this.VMesInicial) {
          case "Enero":
            mes1 = "01";
            break;
          case "Febrero":
            mes1 = "02";
            break;
          case "Marzo":
            mes1 = "03";
            break;
          case "Abril":
            mes1 = "04";
            break;
          case "Mayo":
            mes1 = "05";
            break;
          case "Junio":
            mes1 = "06";
            break;
          case "Julio":
            mes1 = "07";
            break;
          case "Agosto":
            mes1 = "08";
            break;
          case "Septiembre":
            mes1 = "09";
            break;
          case "Octubre":
            mes1 = "10";
            break;
          case "Noviembre":
            mes1 = "11";
            break;
          case "Diciembre":
            mes1 = "12";
            break;
        }

        switch (this.VMesFinal) {
          case "Enero":
            mes2 = "01";
            break;
          case "Febrero":
            mes2 = "02";
            break;
          case "Marzo":
            mes2 = "03";
            break;
          case "Abril":
            mes2 = "04";
            break;
          case "Mayo":
            mes2 = "05";
            break;
          case "Junio":
            mes2 = "06";
            break;
          case "Julio":
            mes2 = "07";
            break;
          case "Agosto":
            mes2 = "08";
            break;
          case "Septiembre":
            mes2 = "09";
            break;
          case "Octubre":
            mes2 = "10";
            break;
          case "Noviembre":
            mes2 = "11";
            break;
          case "Diciembre":
            mes2 = "12";
            break;
        }

        let fecha1 = Date.parse(this.VAñoInicial + "-" + mes1 + "-" + "01");
        let fecha2 = Date.parse(this.VAñoFinal + "-" + mes2 + "-" + "30");

        if (fecha1 <= fecha2) {
          let FiltroNivel = "";
          FiltroNivel = this.nestudios.filter(
            (number) => number.value == this.VEstudio
          );

          if (store.state.IndexFormacion !== "") {
            store.state.FormacionAcademica.splice(
              store.state.IndexFormacion,
              1
            );
          }

          console.log("Entrooooooooo a academicos", this.$refs.form.validate());
          store.commit("AsignarValoresAcademicos", {
            Centro: this.VEducativo,
            Nivel: FiltroNivel[0].text,
            PeriodoInicial: this.VAñoInicial,
            MesI: this.VMesInicial,
            PeriodoFinal: this.VAñoFinal,
            MesF: this.VMesFinal,
            EstadoEdu: this.VEeducacion,
          });
          this.reset();
          this.e1 = this.e1 + 1;
        } else {
          this.alertdeañoinicial = 1;
          //this.valid = false
        }
      } else {
        this.$refs.form.validate();
      }
    },
    Atras() {
      this.e1 = this.e1 - 1;
    },
  },
};
</script>

<style>
.color {
  background: #000;
}
</style>