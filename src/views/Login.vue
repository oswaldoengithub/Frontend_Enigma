<template>
  <v-container>
    <v-flex class="d-flex pa-10">
      <v-card class="mx-auto mb=10" max-width="500" color="#E0E0E0">
        <template v-slot:loader="{ isActive }">
          <v-progress-linear
            :active="isActive"
            color="deep-purple"
            height="4"
            indeterminate
          ></v-progress-linear>
        </template>

        <v-img contain height="150" src="../assets/logo-glc-black.svg"></v-img>

        <v-card-title class="justify-center"
          >¿No tienes cuenta?<router-link to="/register"
            >Regístrate aqui</router-link
          >
        </v-card-title>
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
            />
            <label class="form-label" for="#password">Password:</label>
            <input
              v-model="password"
              class="form-input"
              type="password"
              id="password"
              placeholder="Password"
            />
            <p v-if="error" class="error">
              <v-alert type="error"
                >Has introducido mal el email o la contraseña..</v-alert
              >
            </p>
            <input class="form-submit" type="submit" value="Ingresar" />
          </v-form>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-container>
</template>
  
  <script>
import auth from "@/auth";
import store from "../store/index.js";
import { mapActions, mapMutations, mapState } from "vuex";

export default {
  name: "Login",
  data: () => ({
    email: "",
    password: "",
    error: false,
  }),
 
  methods: {
    ...mapMutations(["AsignarValorLogin"]),
    ...mapActions(["GetDatosPersona", "Accion_GuardarValoresPersonales"]),

    async login() {
      try {
        const res = await auth.login(this.email, this.password);

        const user = {
          email: this.email,
          tipousuario: res.data.user.tipousuario,
          token: res.data.jwt,
          username: res.data.user.username,
        };

        console.log(user);

        await auth.setUserLogged(user);
        const Name = await auth.getUserLogged();

        store.commit("AsignarValorLogin", {
          ValorLogin: 1,
          username: Name.username,
          tipousuario: Name.tipousuario,
        });
       // console.log(this.email);
                 //selecciona el tipo de usuario
       if (Name.tipousuario == "Administrador") {
          this.$router.push("/HomeAdminView");
        } else {
          this.$router.push("/HomeAfiliadoView");
        }
      } catch (error) {
        this.error = true;
        console.log("error:", error);
        //store.commit('AsignarValorLogin', { ValorLogin: 0 ,user: 'xxx',tipoususrio:''});
      }
    },

  },
  computed: {
    ...mapState(["VarLogin", "tipousuario"]),

    userLogged() {
      return auth.getUserLogged();
    },
  },
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
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 10%;
  min-width: 450px;
  max-width: 20%;
  background: #292611;
  border-radius: 5px;
  padding: 15px;
  box-shadow: 0 4px 20px 4px rgba(10, 1, 1, 0.3);
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
  padding: 5px 15px;
  background: #90a4ae;
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
  margin-top: 1rem;
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