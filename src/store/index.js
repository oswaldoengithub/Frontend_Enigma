import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import auth from "@/auth";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    DatosClasificacionTipo:[],
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
