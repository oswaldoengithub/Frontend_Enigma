import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import auth from "@/auth";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    DatosClasificacionTipo: [],
    DatosPersonales: [],
    ValorLogin: 0,
    username: "",
    tipoususrio: "",
  },
  getters: {
  },
  mutations: {
    FiltroTipoDocumento() { },

    AsignarValorLogin(state, payload) {
      state.VarLogin = payload.ValorLogin
      state.username = payload.username
      state.TipoUsuario = payload.tipousuario
    },



    AsignarClasificacionTipo(state, payload) {

      state.DatosClasificacionTipo.push({
        value: payload.Tipo,
        text: payload.Descripcion,
        IdClasificacion: payload.IdClasificacion
      }),
        state.Depto = payload.Depto
      state.Mcpio = payload.Mcpio
    },


    AsignarValoresPersonales(state, payload) {
      state.DatosPersonales.push({
        Nombres: payload.Candidato.Nombres,
        Apellidos: payload.Candidato.Apellidos,
        Profesion: payload.Candidato.Profesion,
        TipoId: payload.Candidato.TipoId,
        NroId: payload.Candidato.NroId,
        FechaNacimiento: payload.Candidato.FechaNacimiento,
        EstadoCivil: payload.Candidato.EstadoCivil,
        Religion: payload.Candidato.Religion,
        TelefonoFijo: payload.Candidato.TelefonoFijo,
        TelefonoMovil: payload.Candidato.TelefonoMovil,
        DireccionResidencia: payload.Candidato.DireccionResidencia,
        BarrioResidencia: payload.Candidato.BarrioResidencia,
        CodPaisResidencia: payload.Candidato.CodPaisResidencia,
        CodDeptoResidencia: payload.Candidato.CodDeptoResidencia,
        CodMunResidencia: payload.Candidato.CodMunResidencia,
        CodPaisNacimiento: payload.Candidato.CodPaisNacimiento,
        CodDeptoNacimiento: payload.Candidato.CodDeptoNacimiento,
        CodMunNacimiento: payload.Candidato.CodMunNacimiento
      })

    },
  },

  actions: {

    Accion_GuardarValoresPersonales: async function ({ state }) {

      const persona = {
        data: {
          Nombres: state.DatosPersonales[0].Nombres,
          Apellidos: state.DatosPersonales[0].Apellidos,
          Profesion: state.DatosPersonales[0].Profesion,
          TipoId: state.DatosPersonales[0].TipoId,
          NroId: state.DatosPersonales[0].NroId,
          FechaNacimiento: state.DatosPersonales[0].FechaNacimiento,
          EstadoCivil: state.DatosPersonales[0].EstadoCivil,
          Religion: state.DatosPersonales[0].Religion,
          TelefonoFijo: state.DatosPersonales[0].TelefonoFijo,
          TelefonoMovil: state.DatosPersonales[0].TelefonoMovil,
          DireccionResidencia: state.DatosPersonales[0].DireccionResidencia,
          BarrioResidencia: state.DatosPersonales[0].BarrioResidencia,
          CodPaisResidencia: state.DatosPersonales[0].CodPaisResidencia,
          CodDeptoResidencia: state.DatosPersonales[0].CodDeptoResidencia,
          CodMunResidencia: state.DatosPersonales[0].CodMunResidencia,
          CodPaisNacimiento: state.DatosPersonales[0].CodPaisNacimiento,
          CodDeptoNacimiento: state.DatosPersonales[0].CodDeptoNacimiento,
          CodMunNacimiento: state.DatosPersonales[0].CodMunNacimiento
        }
      }

      const Key = 'Bearer ' + auth.getUserLogged().token;
        try {
         axios.post('http://localhost:1337/api/tbl-datos-personales',persona,{
           headers: {Authorization: Key}
         })
         .then (response =>{          
           //console.log(response.data)    
           if(response.data)
           {
             console.log("Registro persona editado con éxito");            
           }
           else
           {
             console.log("Error al tratar de editar la información de la persona");
           }  
         })
           .catch (e => function(error){
           console.log(error)
           
 
         }) 
         
       } catch (error) {
         console.log("paila")
         console.log(error)
       }
    },
    GetDatosClasificacionTipo: async function ({ commit }) {

      try {
        const Key = 'Bearer ' + auth.getUserLogged().token;
        var response = await axios.get('http://localhost:1337/api/tbl-tipo-clasificacions', {
          headers: { Authorization: Key }
        });

        if (response.data) {
          //console.log(response.data.data)

          /************** Llenar valores Datos  **************/
          for (let item = 0; item < response.data.data.length; item++) {

            commit('AsignarClasificacionTipo', {
              Tipo: response.data.data[item].attributes.Tipo,
              Descripcion: response.data.data[item].attributes.Descripcion,
              IdClasificacion: response.data.data[item].attributes.IdClasificacion
            })
          }

        }
        else {
          console.log("Error al extraer informacion del API ");
        }
      }
      catch (error) {
        console.log("Error, no trajo informacion del api para listar clasificaciones tipo ", error);

        commit('AsignarClasificacionTipo', {
          Tipo: "",
          Descripcion: "",
          IdClasificacion: ""
        })
      }
    }

  }
});
