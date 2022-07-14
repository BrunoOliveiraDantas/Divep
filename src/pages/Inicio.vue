<template>

    <div class="container">
        <!-- Formulários de entrada-->
        <div class="card">
            <div class="row">
                <div class="col-lg-3">
                    <b-col>
                        <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=54" alt="Image 1"></b-img>
                    </b-col>
                </div>
                <div class="col-lg-6">

                    <div class="row">
                        <div class="col-lg-3">
                            <div role="group">
                                <label for="input-live">CPF:</label>
                                <b-form-input id="input-live" aria-describedby="input-live-help input-live-feedback"
                                    placeholder="Insira o CPF" trim></b-form-input>
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
                        <div class="col-lg-3">
                            <div role="group">
                                <label for="input-live">Processo SEI:</label>
                                <b-form-input id="input-live" aria-describedby="input-live-help input-live-feedback"
                                    placeholder="Informe o Processo" trim></b-form-input>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-4">
                            <div role="group">
                                <label for="input-live">Nome Servidor:</label>
                                <b-form-input id="input-live" aria-describedby="input-live-help input-live-feedback"
                                    placeholder="Insira o nome completo" trim></b-form-input>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div role="group">
                                <label for="input-live">Gerência:</label>
                                <b-form-select class="mb-3 input-select">
                                    <b-form-select-option value="C">Opção 1</b-form-select-option>
                                    <b-form-select-option value="D">Opção 2</b-form-select-option>
                                </b-form-select>
                            </div>

                        </div>
                        <div class="col-lg-4">
                            <div role="group">
                                <label for="input-live">Url do Processo SEI:</label>
                                <b-form-input id="input-live" aria-describedby="input-live-help input-live-feedback"
                                    placeholder="Informe a url" trim></b-form-input>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-3">

                    <div class="container-buttons container-buttons--colunas">
                        <button>Pesquisar</button>
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
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="ferias in itemsFerias" :key="ferias.Dias">
                                <td>{{ ferias.Exercicio }}</td>
                                <td>{{ ferias.Período }}</td>
                                <td>{{ ferias.Dias }}</td>
                                <td>
                                    <div>
                                        <button type="button">Ação</button>
                                    </div>
                                </td>
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
                            <tr v-for="abono in itemsAbono" :key="abono.id">
                                <td>{{abono.Período}}</td>
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
                                <th>Nº</th>
                                <th>Matrícula</th>
                                <th>Nome do Servidor</th>
                                <th>Setor</th>
                                <th>Lotação</th>
                                <th>Atividade</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>23567</td>
                                <td>Bruno Gorge</td>
                                <td>Divep</td>
                                <td>Brasília</td>
                                <td>Desenvolvedor</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>97812</td>
                                <td>Carlos Eduardo</td>
                                <td>Divep</td>
                                <td>Brasília</td>
                                <td>Desenvolvedor</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>75758</td>
                                <td>Adalberto Junior</td>
                                <td>Divel</td>
                                <td>Brasília</td>
                                <td>Desenvolvedor</td>
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
            /*            fieldsFerias: [
                           {
                               key: 'Exercicio',
                               sortable: false
                           },
                           {
                               key: 'Período',
                               sortable: false
                           },
                           {
                               key: 'Dias',
                               sortable: false,
                           }, {
                               key: 'Ações',
                           }
                       ], */
            itemsFerias: [
                { isActive: true, Dias: "30", Período: '01/01/2018' + ' a ' + "01/02/2018", Exercicio: '2018' },
                { isActive: false, Dias: "05", Período: '10/03/2019' + ' a ' + "15/03/2019", Exercicio: '2019' },
                { isActive: false, Dias: "01", Período: '06/01/2022' + ' a ' + "06/01/2022", Exercicio: '2022' }
            ],
            itemsAbono: [
                { Período: '01/01/2022' + ' a ' + "01/02/2022"/* , isActive: false, ID: "2506" */ },
                { Período: '10/03/2022' + ' a ' + "15/03/2022"/* , isActive: false, ID: "2504" */ },
                { Período: '06/01/2022' + ' a ' + "06/01/2022"/* , isActive: false, ID: "246" */ }
            ],
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
        verificaLocalStore() {
            if (localStorage.getItem("ferias")) {
                this.itemsFerias = JSON.parse(localStorage.getItem("ferias"));
            }
            if (localStorage.getItem("abono")) {
                this.itemsAbono = JSON.parse(localStorage.getItem("abono"));
            }
        }

    },

    mounted() {
        this.verificaLocalStore();
    }


}

</script>
