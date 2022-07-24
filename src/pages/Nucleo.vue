<template>
    <div class="container">

        <div class="card">
            <h2 class="card__titulo"> Cadastro de Núcleo</h2>
            <div class="row">
                <div class="col-lg-9">

                    <div class="col-lg-6" role="group">
                        <label for="input-live">Nome</label>
                        <b-form-input id="input-live" :state="stateNome" type="text"
                            aria-describedby="input-live-help input-live-feedback"
                            placeholder="Informe o nome do Núcleo" trim v-model="nucleo.nome"
                            v-on:change="validaCampoNome"></b-form-input>
                        <div class="invalid-feedback">Campo nome é obrigatório!</div>
                    </div>
                    <div class="col-lg-6" role="group">
                        <label for="input-live">Sigla</label>
                        <b-form-input id="input-live" :state="stateSigla" type="text"
                            aria-describedby="input-live-help input-live-feedback"
                            placeholder="Informe a sigla do Núcleo" trim v-model="nucleo.sigla"
                            v-on:change="validaCampoSigla"></b-form-input>
                        <div class="invalid-feedback">Campo sigla é obrigatório!</div>
                    </div>

                    <div class="form-group">
                        <label for="diretoria">Gerência</label>
                        <select id="diretoria" class="form-control" v-model="nucleo.gerencia">
                            <option>Selecione</option>
                            <option v-for="gerencia in tipoGerencia" :key="gerencia.id" :value="gerencia.id">
                                {{ gerencia.nome }}
                            </option>
                        </select>
                    </div>

                </div>

                <div class="col-lg-3">

                    <div class="container-buttons-salvar">
                        <button @click="adicionarNucleo">Salvar</button>
                    </div>
                    <div class="container-buttons-salvar">
                        <router-link to="/administrativo"><button>Voltar</button></router-link>
                    </div>
                </div>
            </div>
        </div>


        <!-- Tabela de ferias -->
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <h2 class="card__titulo"> Listas dos Núcleos</h2>

                    <b-table striped hover :items="itemsNucleo" :fields="fields"></b-table>

                </div>
            </div>
        </div>
    </div>

</template>

<script>

import { nucleoService } from "@/service/nucleoService";
import { gerenciaService } from "@/service/gerenciaService";

export default {
    data() {
        return {
            nucleo: {
                nome: null,
                sigla: null,
                gerencia: "",
            },
            stateNome: false,
            stateSigla: false,
            tipoGerencia: [],
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
            itemsNucleo: [
                { Sigla: "TAG", Nome: "Taguatinga" },
                { Sigla: "GMA", Nome: "Gama" },

            ]

        }
    },
    mounted() {
        this.listarGerencia()
    },
    methods: {

        validaCampoNome() {

            if (this.nucleo.nome) {
                this.stateNome = true;

            } else {
                this.stateNome = false;
            }
            return this.stateNome


        },
        validaCampoSigla() {

            if (this.nucleo.sigla) {
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
        addNucleo() {
            let itemAbono = {};
            itemAbono.Período = ` ${this.formatarObjetoData(this.parseDataBr(this.toDDMMYYYY(this.abono.dataInicio)))} a ${this.formatarObjetoData(this.parseDataBr(this.toDDMMYYYY(this.abono.dataFim)))}`;
            setTimeout(() => {
                this.items.push(itemAbono)
                localStorage.setItem("abono", JSON.stringify(this.items));
            }, 900)

        },

        adicionarNucleo() {

            nucleoService
                .salvarNucleo(this.nucleo)
                .then(() => {

                    console.log("entrou aqui")

                    // apos salvar verificar qual tela ou serviço será chamado.
                })
                .catch(() => {
                    console.log("entrou aqui no erro")


                    // Aqui vai chamar a mensagem de erro          
                });

        },
        listarGerencia() {
            gerenciaService
                .listarGerencia().then((res) => {
                    this.tipoGerencia = res.data;
                    console.log("gerencia", this.tipoGerencia)
                });
        },
    },


}

</script>
