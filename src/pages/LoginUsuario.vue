<template>

  <div class="container-login col-md-12">

    <div class="card-login col-md-3 mt-5">
      <div class="row">
        <div class="col-12">
          <h1 class="h3 mb-3 font-weight-normal">Login</h1>
          <label for="inputEmail" class="sr-only">Matricula</label>
          <input type="email" id="inputEmail" class="form-control" placeholder="Informe a Matrícula" required=""
            autofocus="" v-model="matricula">
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

export default {

  data() {
    return {

      matricula: "",
      senha: "",

    }
  },
  computed: {

  },
  component: {

  },
  moutend() {

  },
  methods: {

    validar() {

      if (this.matricula == "123" && this.senha == "123") {

        var parametros = {

        };
        this.$router.push({
          path: "inicio",
          params: { parametros: parametros },
        });

      } else {
        var alerta = document.getElementById('alerta-mensagem');
        alerta.classList.toggle('d-none');
      }

    }

  }

}
</script>
