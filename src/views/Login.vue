<template>
  <v-app>
    <v-container>
      <v-flex aling="center">
        <v-card
         :loading="loading"
         class="mx-auto my-0"
         max-width="574"
         color= "#F5F5F5"
       >
         <template v-slot:loader="{ isActive }">
           <v-progress-linear
             :active="isActive"
             color="deep-purple"
             height="4"
             indeterminate
           ></v-progress-linear>
         </template>
     
         <v-img contain height="200"
           src="../assets/logo-glc-black.svg"
         ></v-img>
     
         <v-card-item>
           <v-card-title>¿No tienes cuenta?<router-link to="/register">Regístrate aqui</router-link>
           </v-card-title>
     
         </v-card-item>
     
         <v-card-text>
             <v-form action class="form" @submit.prevent="login">
                     <label class="form-label" for="#email">Email:</label>
                     <input
                       v-model="email"
                       class="form-input"
                       type="email"
                       id="email"
                       required
                       placeholder="Email"
                     >
                     <label class="form-label" for="#password">Password:</label>
                     <input
                       v-model="password"
                       class="form-input"
                       type="password"
                       id="password"
                       placeholder="Password"
                     >
                     <p v-if="error" class="error"><v-alert type="error">Has introducido mal el email o la contraseña..</v-alert></p>
                     <input class="form-submit" type="submit" value="Ingresar">
                   </v-form> 
         </v-card-text>
     
        </v-card>
      </v-flex>
    </v-container>
  </v-app>
</template>
  
  <script>
  
  
  import auth from "@/auth";
  import store from "../store/index.js";
  import {mapActions, mapMutations, mapState} from 'vuex';
  
  
  export default {
    data: () => ({
      email: "",
      password: "",
      error: false
    }),
    methods: {
  
      ...mapMutations(['AsignarValorLogin']),
      ...mapActions(['GetDatosPersona']),
      
      async login() {
        try {
         const res = await auth.login(this.email, this.password);  
  
          const user = {
            email: this.email,
            tipousuario:res.data.user.tipousuario,
            token: res.data.jwt,
            username:res.data.user.username
          };
  
  
          await auth.setUserLogged(user);  
          const Name = await auth.getUserLogged();           
       
          store.commit('AsignarValorLogin', { ValorLogin: 1 ,user:Name.username,tipoususrio :Name.tipousuario});  
          //Se llama la accion que debe llenar los estados de la data de la persona        
          
          if(Name.tipousuario == "Empresa")
          {
            store.dispatch('GetDatosEmpresa',{email:Name.email});
          }else{
          store.dispatch('GetDatosPersona',{email:Name.email});
          }
  
       if(Name.tipousuario == 'Persona')
          {
              this.$router.push("/");
          }else{
            this.$router.push("/");
          } 
          
          
  /*         if (this.$route.path != '/regparticipante') {
          this.$router.push("/regparticipante");
           } */
        } catch (error) {
          this.error = true;
          console.log("error:",error)
          //store.commit('AsignarValorLogin', { ValorLogin: 0 ,user: 'xxx',tipoususrio:''});
        }
      }
    },
     computed:{
      ...mapState(['VarLogin','TipoIngreso']),
  
      userLogged() {
      return auth.getUserLogged();
      },
  
    } 
  };
  
  </script>
  
  <style  scoped>
  /* lang="scss" */
  .login {
    padding: 1rem;
  }
  .title {
    text-align: center;
  }
  .form {
    margin: 3rem auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 30%;
    min-width: 520px;
    max-width: 20%;
    background: #292611;
    border-radius: 5px;
    padding: 30px;
    box-shadow: 0 4px 10px 4px rgba(10, 1, 1, 0.3);
  }
  .form-label {
    margin-top: 1rem;
    color: white;
    margin-bottom: 0.5rem;
  /*   &:first-of-type {
      margin-top: 0rem;
    } */
  }
  .form-input {
    padding: 10px 15px;
    background: #90A4AE;
    background-image: none;
    border: 1px solid white;
    color: white;
  /*   &:focus {
      outline: 0;
      border-color: #1ab188;
    } */
  }
  .form-submit {
    background: #ffe697;
    border: none;
    color: rgb(12, 2, 2);
    margin-top: 3rem;
    padding: 1rem 0;
    cursor: pointer;
    font-size: 1.3em;
    transition: background 0.2s;
  /*   &:hover {
      background: #0b9185;
    } */
  }
  .error {
    margin: 1rem 0 0;
    color: #110f10;
    
  }
  .msg {
    margin-top: 3rem;
    text-align: center;
  }
  </style>