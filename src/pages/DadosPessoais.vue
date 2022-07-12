<template>
  <div class="container">
    <form class="row g-2">
      <div class=" col-md-6 ">
        <label for="nome" class="form-label">Nome do Servidor</label>
        <input type="text" class="form-control" id="nome">
      </div>
      <div class=" col-md-6 ">
        <label for="apelido" class="form-label">Apelido</label>
        <input type="text" class="form-control" id="apelido">
      </div>
      <div class="col-md-6 ">
        <label for="nomSocial">Nome Social</label>
        <input type="text" class="form-control" id="nomSocial">
      </div>
      <div class="col-md-6 ">
        <label for="cpf">CPF</label>
        <input type="text" class="form-control" id="cpf">
      </div>
      <div class="col-md-6 ">
        <label for="matricula">Matricula</label>
        <input type="text" class="form-control" id="matricula">
      </div>
      <div class="col-md-6 ">
        <label for="rg">RG</label>
        <input type="text" class="form-control" id="rg">
      </div>

      <fieldset class="row mb-3">
        <legend class="col-form-label col-sm-2 pt-0">Sexo</legend>
        <div class="col-sm-10">
          <div class="form-check">
            <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked>
            <label class="form-check-label" for="gridRadios1">
              Masculino
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
            <label class="form-check-label" for="gridRadios2">
              Feminino
            </label>
          </div>

        </div>
      </fieldset>
      <fieldset class="row mb-3">
        <legend class="col-form-label col-sm-2 pt-0">Genero</legend>
        <div class="col-sm-10">
          <div class="form-check">
            <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked>
            <label class="form-check-label" for="gridRadios1">
              Cis
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
            <label class="form-check-label" for="gridRadios2">
              Trans
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
            <label class="form-check-label" for="gridRadios2">
              Prefiro não declarar
            </label>
          </div>

          <div class="form-check">
            <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
            <label class="form-check-label" for="gridRadios2">
              Outros
            </label>
          </div>

        </div>
      </fieldset>

      <div class="col-md-6 ">
        <label for="staticEmail2">Data de Nascimento</label>
        <input type="date" class="form-control" id="staticEmail2">
      </div>

      <fieldset class="row mb-3">
        <legend class="col-form-label col-sm-2 pt-0">Pessoas com Deficiência</legend>
        <div class="col-sm-10">
          <div class="form-check">
            <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked>
            <label class="form-check-label" for="gridRadios1">
              Sim
            </label>
          </div>
          <div class="col-md-6 ">
            <label for="staticEmail2">Qual deficiência</label>
            <input type="text" class="form-control" id="staticEmail2">
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
            <label class="form-check-label" for="gridRadios2">
              Não
            </label>
          </div>

        </div>
      </fieldset>

      <fieldset class="row mb-3">
        <legend class="col-form-label col-sm-2 pt-0">Tipo Sanguinéo</legend>
        <div class="col-sm-10">
          <div class="form-check">
            <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked>
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
      </fieldset>

      <div class="col-sm-12 mb-2 ">
        <label for="cep">CEP</label>
        <input type="text" class="form-control" id="cep">
      </div>

      <div class="col-sm-12 mb-2 ">
        <label for="endereco">Endereço Residência</label>
        <input type="text" class="form-control" id="endereco">
      </div>
      <div class="col-sm-12 mb-2 ">
        <label for="bairro">Bairro</label>
        <input type="text" class="form-control" id="bairro">
      </div>
      <div class="col-auto">
        <label class="visually-hidden" for="autoSizingSelect">Preference</label>
        <select class="form-select" id="autoSizingSelect">
          <option selected>DF</option>
          <option value="1">Go</option>
          <option value="2">RJ</option>
          <option value="3">SP</option>
        </select>
      </div>
      <div class="col-sm-12 mb-2 ">
        <label for="municipio">Município</label>
        <input type="text" class="form-control" id="municipio">
      </div>
      <div class="col-sm-12 mb-2 ">
        <label for="ra">RA</label>
        <input type="text" class="form-control" id="ra">
      </div>
      <div class="col-sm-12 mb-2 ">
        <label for="ra">Telefone fixo</label>
        <input type="text" class="form-control" id="ra">
      </div>
      <div class="col-sm-12 mb-2 ">
        <label for="ra">Telefone celular</label>
        <input type="text" class="form-control" id="ra">
      </div>
      <div class="col-sm-12 mb-2 ">
        <label for="ra">Whatsapp</label>
        <input type="text" class="form-control" id="ra">
      </div>
      <div class="col-sm-12 mb-2 ">
        <label for="ra">E-mail pessoal</label>
        <input type="text" class="form-control" id="ra">
      </div>
      <div class="col-sm-12 mb-2 ">
        <label for="ra">Contato de emergência</label>
        <input type="text" class="form-control" id="ra">
      </div>
      <div class="col-sm-12 mb-2 ">
        <label for="ra">Link do Currículo Lattes</label>
        <input type="text" class="form-control" id="ra">
      </div>
      <div class="col-sm-12 mb-2 ">
        <label for="ra">Foto de rosto</label>
        <input type="text" class="form-control" id="ra">
      </div>





      <div class="ccol-md-6">
        <button type="submit" class="btn btn-primary mb-3">Salvar</button>
      </div>

    </form>


  </div>

</template>

<script>

</script>



