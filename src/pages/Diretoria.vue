<template>
    <div class="container">

        <div class="card">
            <h2 class="card__titulo"> Cadastro de Diretoria</h2>

            <div class="row">
                <b-alert v-model="showDismissibleAlert" variant="danger" dismissible>

                    <p>{{ this.mensagem }}</p>
                </b-alert>
                <form class="row g-3 needs-validation" novalidate>
                    <div class="col-lg-9">

                        <div class="col-lg-6" role="group">
                            <label for="validationCustom03" class="form-label">Nome</label>
                            <b-form-input type="text" class="form-control" id="validationCustom03" :state="stateNome"
                                aria-describedby="input-live-help input-live-feedback"
                                placeholder="Informe o nome da Diretoria" trim v-model="diretoria.nome"
                                v-on:change="validaCampoNome"></b-form-input>
                            <div class="invalid-feedback">Campo nome é obrigatório!</div>
                        </div>
                        <div class="col-lg-6" role="group">
                            <label for="input-live">Sigla</label>
                            <b-form-input id="input-live" type="text" :state="stateSigla"
                                aria-describedby="input-live-help input-live-feedback"
                                placeholder="Informe a sigla da Diretoria" trim v-model="diretoria.sigla"
                                v-on:change="validaCampoSigla"></b-form-input>
                            <div class="invalid-feedback">Campo sigla é obrigatório!</div>
                        </div>

                    </div>


                    <div class="col-lg-3">

                        <div class="container-buttons-salvar">
                            <b-button @click="adicionarDiretoria" variant="outline-success">Salvar

                            </b-button>
                        </div>
                        <div class="container-buttons-salvar">
                            <router-link to="/inicio">
                                <b-button variant="outline-success">Voltar</b-button>
                            </router-link>
                        </div>
                    </div>
                </form>
            </div>

        </div>


        <!-- Tabela de ferias -->
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <h2 class="card__titulo"> Listas das Diretorias</h2>

                    <b-table striped hover :items="itemsDiretoria" :fields="fields" :current-page="currentPage"
                        :per-page="perPage" :filter="filter" :filter-included-fields="filterOn" :sort-by.sync="sortBy"
                        :sort-desc.sync="sortDesc" :sort-direction="sortDirection" stacked="md" show-empty small
                        @filtered="onFiltered"></b-table>

                </div>
            </div>
        </div>
    </div>


</template>

<script>

import { diretoriaService } from "@/service/diretoriaService";

export default {
    data() {
        return {
            diretoria: {
                nome: null,
                sigla: null,
            },
            stateNome: false,
            stateSigla: false,
            listaDiretorias: [],
            showDismissibleAlert: false,
            mensagem: "",

            fields: [
                {
                    key: 'Nome',
                    sortable: false
                },
                {
                    key: 'Sigla',
                    sortable: false
                },
                /*  {
                     key: 'ID',
                     sortable: true,
                     // Variant applies to the whole column, including the header and footer
                     //variant: 'danger'
                 } */
            ],
            itemsDiretoria: [
                /*  { Sigla: "NVP", Nome:"Nuvep"},
                 { Sigla: "DCP", Nome:"Dicap"}, */

            ]

        }
    },
    mounted() {
        this.listarDiretoria()
    },
    methods: {

        validaCampoNome() {

            if (this.diretoria.nome) {
                this.stateNome = true;

            } else {
                this.stateNome = false;
            }
            return this.stateNome


        },
        validaCampoSigla() {

            if (this.diretoria.sigla) {
                this.stateSigla = true;

            } else {
                this.stateSigla = false;

            }
            return this.stateSigla
        },
        toDDMMYYYY(strData) {
            let dt = strData.split("-");
            return dt[2] + "/" + dt[1] + "/" + dt[0];
        },
        parseDataBr(dateString) {
            let dateParser = /(\d{2})\/(\d{2})\/(\d{4})/;
            var match = dateString.match(dateParser);
            var date = new Date(match[3], // year
                match[2] - 1, // monthIndex
                match[1]); // day
            return date;
        },
        formatarObjetoData(d) {
            if (!d) return d
            let data = new Date(d)
            if (!(data instanceof Date) || isNaN(data.valueOf()))
                return d

            return data.toLocaleDateString('pt-BR', { timeZone: "America/Sao_Paulo" })
        },
        addAbono() {
            let itemAbono = {};
            itemAbono.Período = ` ${this.formatarObjetoData(this.parseDataBr(this.toDDMMYYYY(this.abono.dataInicio)))} a ${this.formatarObjetoData(this.parseDataBr(this.toDDMMYYYY(this.abono.dataFim)))}`;
            setTimeout(() => {
                this.items.push(itemAbono)
                localStorage.setItem("abono", JSON.stringify(this.items));
            }, 900)

        },

        adicionarDiretoria() {


            diretoriaService
                .salvarDiretoria(this.diretoria)
                .then((res) => {

                    this.mensagem = res.data.mensagem,

                        this.showDismissibleAlert = true
                    /*   this.diretoria.nome = "",
                          this.diretoria.sigla = "" */
                })
                .catch(() => {
                    this.showDismissibleAlert = true


                });

        },

        listarDiretoria() {
            diretoriaService
                .listarDiretoria().then((res) => {

                    this.listaDiretorias = res;
                    console.log("diretorias teste", this.listaDiretoria)
                    let diretoria = [{}]
                    for (let index = 0; index < this.listaDiretorias.length; index++) {
                        diretoria[index].Nome = this.listaDiretorias[index].nome;
                        diretoria[index].Sigla = this.listaDiretorias[index].sigla;
                        this.itemsDiretoria.push(diretoria[index])
                    }

                });
        },


    }
}

</script>
