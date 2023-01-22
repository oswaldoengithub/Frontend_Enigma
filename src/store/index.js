import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import auth from "@/auth";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    DatosClasificacionTipo:[],
     //Datos Formacion
     Empresa:"",
     Area:"",
     AñoInicialFormacion:'',
     MesInicialFormacion:'',
     AñoFinalFormacion:'',
     MesFinalFormacion:'',
     DeptoFormacion:'',
     McpioFormacion:'',
     Cargo:'',
     Funciones:'',
     ExperienciaProfesional:[],
     VarLogin: 0,
     ValidPerfil:false,
     ValidoTipoEmpresa:false,
     ValidoDatosContacto:false,
     ValidarGuardarEmpresa:false,
     ValidarGuardarContacto:false,
     IdNuevo:0,
     NombreUsuario:'',
     IndexFormacion:'',
     IndexExperiencia:'',
     IndexCursos:'',
     AccionFormacion:'',
     AccionExperiencia:'',
     AccionCursos:'',
     TipoIngreso:'Persona',
     TipoUsuario:'',
     IndexCurso:'',
     MuestraFormCurso:0,
     AccionCurso:'',
     EmailLogin:'',
     ActualizacionExitosa:false,
     ActualizacionExitosaEmpresa:false,
  },
  getters: {
  },
  mutations: {
    FiltroTipoDocumento(){},
    AsignarClasificacionTipo(state,payload){ 
      
      state.DatosClasificacionTipo.push({
        value : payload.Tipo,
        text : payload.Descripcion,
        IdClasificacion : payload.IdClasificacion
      }),
      state.Depto= payload.Depto
      state.Mcpio= payload.Mcpio
    }, 
    
    AsignarValoresAcademicos(state,payload){
      /*       state.CentroEducativo = payload.Centro
            state.NivelEstudios = payload.Nivel
            state.AñoInicial = payload.PeriodoInicial
            state.MesInicial = payload.MesI
            state.AñoFinal = payload.PeriodoFinal
            state.MesFinal = payload.MesF
            state.EstadoEducacion= payload.EstadoEdu */
      
            state.FormacionAcademica.push({
              CentroEducativo : payload.Centro,
              Nivel : payload.Nivel,
              AñoInicial : payload.PeriodoInicial,
              MesInicial : payload.MesI,
              AñoFinal : payload.PeriodoFinal,
              MesFinal : payload.MesF,
              Estado : payload.EstadoEdu
            })
          },
  },
  actions: {
    GetDatosClasificacionTipo: async function({commit,state}){  
      
      try {  
            const Key = 'Bearer ' + auth.getUserLogged().token;
            var response = await axios.get('http://localhost:1337/api/tbl-tipo-clasificacions',{
              headers: {Authorization: Key }                   
            });

            if(response.data)
            {
              //console.log(response.data.data)

              /************** Llenar valores Datos Empresa **************/
              for (let item = 0; item < response.data.data.length; item++) {      

                commit('AsignarClasificacionTipo',{
                  Tipo:response.data.data[item].attributes.Tipo,
                  Descripcion:response.data.data[item].attributes.Descripcion,
                  IdClasificacion:response.data.data[item].attributes.IdClasificacion
               }) 
               }  
               
            }
            else
            {                      
                console.log("Error al extraer informacion del API ");
            } 
        } 
      catch (error) 
            {                  
              console.log("Error, no trajo informacion del api para listar ofertas ",error);

              commit('AsignarClasificacionTipo', { 
                Tipo:"",
                Descripcion:"",
                IdClasificacion:""
            });
            }  
    },
  },
  modules: {
  }
})
