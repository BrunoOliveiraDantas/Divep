<template>

  <div class="container-login col-md-12"> 


    <div class="card-login col-md-3 mt-5">
      <div class="row">
        <div class="col-12">
          <h1 class="h3 mb-3 font-weight-normal">Login</h1>
            <div>
              <b-alert :show="dismissCountDown" dismissible variant="warning" @dismissed="dismissCountDown = 0"
                @dismiss-count-down="countDownChanged">
                <p>CPF ou senha inválidos!</p>
                <b-progress variant="warning" :max="dismissSecs" :value="dismissCountDown" height="4px"></b-progress>
              </b-alert>

            
            </div>


          <label for="inputEmail" class="sr-only">CPF</label>
          <input type="email" id="inputEmail" class="form-control" placeholder="Informe a Matrícula" required=""
            autofocus="" v-model="cpf">
          <label for="inputPassword" class="sr-only">Senha</label>
          <input type="password" id="inputPassword" class="form-control" placeholder="Informe a Senha" required=""
            v-model="senha">
          <div class="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me"> Lembre-me
            </label>

          </div>
          <div id="alerta-mensagem" class="d-none alert alert-warning alert-dismissible fade show" role="alert">
            <strong>Falha de Login!</strong> Usuário ou senha estão incorretos.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
          <button class="btn btn-lg btn-primary btn-block" type="button" @click="validar()">Entrar</button>


        </div>
      </div>
    </div>
    
  </div>

</template>

<script>

import Header from '@/partials/template/Header.vue';
import { loginService } from "@/service/loginService";

export default {

  beforeUpdate() {
    this.$stroe.commit('setLayout', { Header: true })
  },

  data() {
    return {
      //valor: "<Header /> ",
      usuario: {},
      cpf: "",
      senha: "",
      dismissSecs: 10,
      dismissCountDown: 0,
      showDismissibleAlert: false

    }
  },
  computed: {

  },
  component: {
    Header
  },
  moutend() {


  },
  methods: {
    ountDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs
    },
    validar() {
      
      loginService.loginAcesso(this.cpf, this.senha).then((res) => {
        this.usuario = res;
        localStorage.setItem("usuario", JSON.stringify(this.usuario))
        this.$router.push({
          path: "inicio",
        });
        console.log("USUARIO", this.usuario);
      }).catch((error) => {
        console.log(error),
         // this.ountDownChanged(),
          this.showAlert()
        /*  var alerta = document.getElementById('alerta-mensagem');
               alerta.classList.toggle("Erro no Login", error); */
      }).finally(() => { });
    }
  }
}
</script>
