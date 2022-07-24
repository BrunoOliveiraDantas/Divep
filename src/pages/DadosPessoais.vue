<template>
  <div class="container">
    <div class="card">
      <form class="row g-2">
        <div class="row">
          <div class=" col-md-6 ">
            <label for="nome" class="form-label">Nome do Servidor</label>
            <input type="text" class="form-control" required id="nome" v-model.trim="usuario.nomeCivil">
          </div>
          <div class="col-md-6 ">
            <label for="nomSocial" class="form-label">Nome Social ou Apelido</label>
            <input type="text" class="form-control" id="nomSocial" v-model.trim="usuario.nomeSocial">
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 ">
            <label for="cpf">CPF</label>
            <input type="text" class="form-control" id="cpf" v-model="usuario.cpf">
          </div>
          <div class="col-md-4 ">
            <label for="matricula">Matricula</label>
            <input type="text" class="form-control" id="matricula" v-model.trim="usuario.matricula">
          </div>
          <div class="col-md-4 ">
            <label for="rg">RG</label>
            <input type="text" class="form-control" id="rg" v-model="usuario.identidade">
          </div>
        </div>
        <fieldset class="row">
          <div class="col-md-4 ">
            <label for="staticEmail2">Data de Nascimento</label>
            <input type="date" class="form-control" id="staticEmail2" v-model="usuario.nascimento">
          </div>
          <div class="col-sm-4">
            <legend class="col-form-label col-sm-4 pt-0">Sexo</legend>
            <div class="col-sm-2 form-check">
              <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked>
              <label class="form-check-label" for="gridRadios1">
                Masculino
              </label>
            </div>
            <div class="col-sm-2 form-check">
              <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
              <label class="form-check-label" for="gridRadios2">
                Feminino
              </label>
            </div>
          </div>
          <div class="col-sm-4">
            <legend class="col-form-label col-sm-4 pt-0">Genero</legend>
            <div class=" col-sm-2 form-check">
              <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked>
              <label class="form-check-label" for="gridRadios1">
                Cis
              </label>
            </div>
            <div class=" form-check">
              <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
              <label class="form-check-label" for="gridRadios2">
                Trans
              </label>
            </div>
            <div class=" form-check">
              <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
              <label class="form-check-label" for="gridRadios2">
                Prefiro não declarar
              </label>
            </div>

            <div class=" form-check">
              <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
              <label class="form-check-label" for="gridRadios2">
                Outros
              </label>
            </div>
          </div>

        </fieldset>

        <fieldset class="row">
          <div class="col-md-4">
            <legend class="col-form-label col-sm pt-0">Pessoas com Deficiência</legend>
            <div class=" col-sm-2 form-check">
              <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked
                v-model="usuario.tipoDeficiencia">
              <label class="form-check-label" for="gridRadios1">
                Sim
              </label>
            </div>
            <div class="col-sm-2 form-check">
              <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
              <label class="form-check-label" for="gridRadios2">
                Não
              </label>
            </div>

          </div>
          <div class="col-md-4">
            <label for="staticEmail2">Se sim, qual deficiência</label>
            <input type="text" class="form-control" id="staticEmail2">
          </div>
          <div class="col-md-4">
            <legend class="col-form-label col-sm pt-0">Tipo Sanguinéo</legend>
            <div class="col-sm-10">
              <div class="form-check">
                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked
                  v-model="usuario.tipoSanguineo">
                <label class="form-check-label" for="gridRadios1">
                  A+
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
                <label class="form-check-label" for="gridRadios2">
                  B+
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
                <label class="form-check-label" for="gridRadios2">
                  AB+
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
                <label class="form-check-label" for="gridRadios2">
                  O+
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
                <label class="form-check-label" for="gridRadios2">
                  A-
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
                <label class="form-check-label" for="gridRadios2">
                  B-
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
                <label class="form-check-label" for="gridRadios2">
                  AB-
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
                <label class="form-check-label" for="gridRadios2">
                  O-
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
                <label class="form-check-label" for="gridRadios2">
                  Não sei
                </label>
              </div>
            </div>
          </div>
        </fieldset>


        <div class="row">
          <div class="col-sm-4 mb-2 ">
            <label for="cep">CEP</label>
            <input type="text" class="form-control" id="cep">
          </div>

          <div class="col-sm-4 mb-2 ">
            <label for="endereco">Endereço Residência</label>
            <input type="text" class="form-control" id="endereco">
          </div>
          <div class="col-sm-4 mb-2 ">
            <label for="bairro">Bairro</label>
            <input type="text" class="form-control" id="bairro">
          </div>
        </div>
        <div class="row">
          <div class="col-sm-4 mb-2">
            <label for="estado">Estado</label>
            <label class="visually-hidden" for="autoSizingSelect">Preference</label>
            <select class="form-select" id="autoSizingSelect">
              <option selected>DF</option>
              <option value="1">Go</option>
              <option value="2">RJ</option>
              <option value="3">SP</option>
            </select>
          </div>
          <div class="col-sm-4 mb-2 ">
            <label for="municipio">Município</label>
            <input type="text" class="form-control" id="municipio">
          </div>
          <div class="col-sm-4 mb-2 ">
            <label for="ra">RA</label>
            <input type="text" class="form-control" id="ra">
          </div>
        </div>

        <div class="row">
          <div class="col-sm-4 mb-2 ">
            <label for="ra">Telefone fixo</label>
            <input type="text" class="form-control" id="ra">
          </div>
          <div class="col-sm-4 mb-2 ">
            <label for="ra">Telefone celular</label>
            <input type="text" class="form-control" id="ra">
          </div>
          <div class="col-sm-4 mb-2 ">
            <label for="ra">Whatsapp</label>
            <input type="text" class="form-control" id="ra">
          </div>
        </div>
        <div class="row">
          <div class="col-sm-4 mb-2 ">
            <label for="ra">E-mail pessoal</label>
            <input type="text" class="form-control" id="ra">
          </div>
          <div class="col-sm-4 mb-2 ">
            <label for="ra">Contato de emergência</label>
            <input type="text" class="form-control" id="ra">
          </div>
          <div class="col-sm-4 mb-2 ">
            <label for="ra">Link do Currículo Lattes</label>
            <input type="text" class="form-control" id="ra">
          </div>
        </div>

        <div class="col-sm-12 mb-2 ">
          <!-- <label for="ra">Foto de rosto</label>
          <input type="text" class="form-control" id="ra" v-model="usuario.foto"> -->
          <form>
            <div class="form-group">
              <label for="exampleFormControlFile1">Exemplo de input de arquivo</label>
              <input type="file" class="form-control-file" id="exampleFormControlFile1">
            </div>
          </form>
        </div>

        <div class="ccol-md-6">
          <b-button type="button" @click="adicionarUsuario" variant="outline-success">Salvar</b-button>
          <router-link to="/inicio">
            <b-button variant="outline-success">Voltar</b-button>
          </router-link>
        </div>

      </form>
    </div>

  </div>

</template>

<script>

import { usuarioService } from "@/service/usuarioService";

export default {
  data() {
    return {
      usuario: {
        cpf: "",
        nomeCivil: "",
        nomeSocial: "",
        matricula: "",
        emailPessoal: "",
        identidade: "",
        nascimento: "",
        sexo: "",
        genero: "",
        escolaridade: "",
        tipoDeficiencia: "",
        tipoSanguineo: "",
        foto: "",
      }
    }
  },
  methods: {
    adicionarUsuario() {
      usuarioService
        .salvarUsuario(this.usuario)
        .then(() => {

          console.log("entrou aqui")

          // apos salvar verificar qual tela ou serviço será chamado.
        })
        .catch(() => {
          console.log("entrou aqui no erro")


          // Aqui vai chamar a mensagem de erro          
        });
    },
  },

}

</script>



