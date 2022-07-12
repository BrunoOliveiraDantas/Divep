<template>

    <div class="container">
        <!-- Formulários de entrada-->
        <div class="card">
            <div class="row">
                <div class="col-lg-9">

                    <div class="row">
                        <div class="col-lg-3">
                            <div role="group">
                                <label for="input-live">Matrícula:</label>
                                <b-form-input id="input-live" aria-describedby="input-live-help input-live-feedback"
                                    placeholder="Insira a Matrícula" trim></b-form-input>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div role="group">
                                <label for="input-live">Lotação:</label>
                                <b-form-select class="mb-3 input-select">
                                    <b-form-select-option value="C">Opção 1</b-form-select-option>
                                    <b-form-select-option value="D">Opção 2</b-form-select-option>
                                </b-form-select>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div role="group">
                                <label for="input-live">Situação:</label>
                                <b-form-select class="mb-3 input-select">
                                    <b-form-select-option value="C">Opção 1</b-form-select-option>
                                    <b-form-select-option value="D">Opção 2</b-form-select-option>
                                </b-form-select>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-6">
                            <div role="group">
                                <label for="input-live">Nome Servidor:</label>
                                <b-form-input id="input-live" aria-describedby="input-live-help input-live-feedback"
                                    placeholder="Insira o nome completo" trim></b-form-input>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div role="group">
                                <label for="input-live">Gerência:</label>
                                <b-form-select class="mb-3 input-select">
                                    <b-form-select-option value="C">Opção 1</b-form-select-option>
                                    <b-form-select-option value="D">Opção 2</b-form-select-option>
                                </b-form-select>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-3">

                    <div class="container-buttons container-buttons--colunas">
                        <button>Atualizar Dados</button>
                        <button>Restaurar Senha</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Primeira parte -->
        <div class="row">
            <div class="col-lg-4">
                <div class="card">
                    <h2 class="card__titulo">Férias</h2>

                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th>Exercício</th>
                                <th>Período</th>
                                <th>Dias</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                            </tr>

                        </tbody>
                    </table>

                    <div class="container-buttons">
                        <button type="button" @click="incluirFeriasServidor">Incluir</button>
                    </div>
                </div>
            </div>

            <div class="col-lg-4">
                <div class="card">
                    <h2 class="card__titulo">Abonos</h2>

                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th>Data</th>
                                <!--<th>Header</th>
                                <th>Header</th> -->
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Cell</td>
                                <!-- <td>Cell</td>
                                <td>Cell</td>-->
                            </tr>

                        </tbody>
                    </table>

                    <div class="container-buttons">
                        <button type="button" @click="incluirAbonoServidor">Incluir</button>
                    </div>
                </div>
            </div>

            <div class="col-lg-4">
                <div class="card">
                    <h2 class="card__titulo">Licenças/Afastamento</h2>

                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th>Tipo</th>
                                <th>Período</th>
                                <th>Dias</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                            </tr>

                        </tbody>
                    </table>

                    <div class="container-buttons">
                        <button>Incluir</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Última parte-->
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <h2 class="card__titulo">Relação de Servidores</h2>
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th>N⌂</th>
                                <th>Matrícula</th>
                                <th>Nome do Servidor</th>
                                <th>Setor</th>
                                <th>Lotação</th>
                                <th>Atividade</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                            </tr>


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

</template>

<script>


export default {
    data() {
        return {

        }
    },
    methods: {
        incluirFeriasServidor() {
            this.$router.push({
                path: "ferias",
                params: { parametros: "" },
            });
        },

        incluirAbonoServidor() {
            this.$router.push({
                path: "abono",
                params: { parametros: "" },
            });
        },
        incluirDadosPessoais() {
            this.$router.push({
                path: "DadosPessoais",
                params: { parametros: "" },
            });
        },


    },


}

</script>
