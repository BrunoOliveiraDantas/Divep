<template>
    <div class="container">
        <!-- Formulários de entrada-->
        <div class="card">
            <div class="row">
                <div class="col-lg-9">
                    <div class="row">
                        <div class="col-lg-3">
                            <div role="group">
                                <label for="input-live">Diretoria:</label>
                                <!-- <select class="form-control form-control-sm">
                                    <option :selected="diretoria.id == 1" v-for="diretoria in listaDiretoria" :key="diretoria.id" :value="diretoria.id">{{ diretoria.sigla }}</option>
                                </select> -->
                                <b-form-select class="mb-3 input-select">
                                    <b-form-select-option id="selectDiretoria" class="dropdown-diretoria"
                                        :selected="diretoria.id == sigla" v-for="diretoria in listaDiretoria"
                                        v-model="sigla" :key="diretoria.id" :value="diretoria.id">
                                        {{ diretoria.sigla }}</b-form-select-option>
                                    <!-- <b-form-select-option class="dropdown-item " selected="{{diretoria.id == 1}}" value="D">Opção 2</b-form-select-option>
 <b-form-select-option class="dropdown-item" value="E">Opção 1</b-form-select-option> -->
                                </b-form-select>
                            </div>
                        </div>
                        <!-- <div class="form-group">
                            <label for="diretoria">Diretoria</label>
                            <select id="diretoria" class="form-control" v-model="usuario.diretorias[0].sigla">
                                <option>Selecione</option>
                                <option v-for="diretoria in listaDiretoria" :key="diretoria.id" :value="diretoria.id">
                                    {{ diretoria.sigla }}
                                </option>
                            </select>
                        </div> -->
                        <div class="col-lg-3">
                            <div role="group">
                                <label for="input-live">Gerência:</label>
                                <b-form-select class="mb-3 input-select">
                                    <b-form-select-option id="selectGerencia" class="dropdown-gerencia"
                                         v-for="gerencia in listaGerencia"
                                        v-model="sigla" :key="gerencia.id" :value="gerencia.id">
                                        {{ gerencia.sigla }}
                                    </b-form-select-option>

                                </b-form-select>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div role="group">
                                <label for="input-live">Núcleo:</label>
                                <b-form-select class="mb-3 input-select">
                                    <b-form-select-option value="C">Opção 1</b-form-select-option>
                                    <b-form-select-option value="D">Opção 2</b-form-select-option>
                                </b-form-select>
                            </div>

                        </div>
                        <div class="col-lg-3">
                            <div role="group">
                                <label for="input-live">Setor:</label>
                                <b-form-select class="mb-3 input-select">
                                    <b-form-select-option value="C">Opção 1</b-form-select-option>
                                    <b-form-select-option value="D">Opção 2</b-form-select-option>
                                </b-form-select>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-3">
                            <div role="group">
                                <label id="cpf" for="input-live">CPF:</label>
                                <b-form-input v-model="usuario.vinculos[0].usuario.cpf" id="input-live"
                                    aria-describedby="input-live-help input-live-feedback" placeholder="Insira o CPF"
                                    trim></b-form-input>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div role="group">
                                <label for="input-live">Matricula:</label>
                                <b-form-input v-model="usuario.vinculos[0].matricula" id="input-live"
                                    aria-describedby="input-live-help input-live-feedback" placeholder="Matricula" trim>
                                </b-form-input>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div role="group">
                                <label for="input-live">Nome Servidor:</label>
                                <b-form-input v-model="usuario.nome" id="input-live"
                                    aria-describedby="input-live-help input-live-feedback"
                                    placeholder="Insira o nome completo" trim></b-form-input>
                            </div>
                        </div>
                        <!-- <div class="col-lg-3">
                            <div role="group">
                                <label for="input-live">Processo SEI:</label>
                                <b-form-input id="input-live" aria-describedby="input-live-help input-live-feedback"
                                    placeholder="Informe o Processo" trim></b-form-input>
                            </div>

                        </div>
                        <div class="col-lg-3">
                            <div role="group">
                                <label for="input-live">Url do Processo SEI:</label>
                                <b-form-input id="input-live" aria-describedby="input-live-help input-live-feedback"
                                    placeholder="Informe a url" trim></b-form-input>
                            </div>
                        </div> -->
                    </div>
                </div>

                <div class="col-lg-3">

                    <div class="container-buttons container-buttons--colunas">
                        <button>Pesquisar</button>
                        <button>
                            <router-link to="/dadosPessoais">Dados Complementares</router-link>
                        </button>
                        <button>Salvar Dados</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Primeira parte -->
        <div class="row">
            <div class="col-lg-4">
                <div class="card">
                    <h3 class="card__titulo">Férias</h3>

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
                    <h3 class="card__titulo">Abonos</h3>

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
                                <td>{{ abono.Período }}</td>
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
                    <h3 class="card__titulo">Licenças/Afastamento</h3>

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
                    <h3 class="card__titulo">Relação de Servidores</h3>
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

import { diretoriaService } from "@/service/diretoriaService";
import { gerenciaService } from "@/service/gerenciaService";
import { nucleoService } from "@/service/nucleoService";
import { setorService } from "@/service/setorService";

export default {
    data() {
        return {
            usuario: {},

            listaDiretoria: [],
            listaGerencia: [],
            listaNucleo: [],
            listaSetor: [],
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
        listarDiretoria() {

            diretoriaService
                .listarDiretoria().then((res) => {
                    this.listaDiretoria = res;
                    console.log("diretoria", this.listaDiretoria)
                });
        },
        listarGerencia(idDiretoria) {

            gerenciaService
                .listarGerencia(idDiretoria).then((res) => {
                    this.listaGerencia = res;
                    console.log("gerencias da combo", this.listaGerencia)
                });
        },
        listarNucleo() {

            nucleoService
                .listarNucleo().then((res) => {
                    this.listaNucleo = res;
                    console.log("nucleos", this.listarNucleo)
                });
        },
        listarSetor() {

            setorService
                .listarSetor().then((res) => {
                    this.listaSetor = res;
                    console.log("setores", this.listarSetor)
                });
        },

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
            if (localStorage.getItem("usuario")) {
                try {
                    this.usuario = JSON.parse(localStorage.getItem("usuario"));
                } catch (e) {
                    localStorage.removeItem("usuario");
                }
            }
        }

    },
    mounted() {
        this.listarDiretoria();
        this.listarGerencia("2");
       // this.listarNucleo();
       // this.listarSetor();
        this.verificaLocalStore();
        this.usuario = JSON.parse(localStorage.getItem("usuario"));
        document.getElementById("#selectDiretoria").value = 1;
        //console.log("OIOIOI", el);



    },
    /*  beforeUpdate() {
         
         console.log("OIOIOI", document.getElementById("cpf").value);
     }, */

}

</script>
