<template>
    <div class="container">

        <div class="card">
            <h2 class="card__titulo"> Cadastro de Gerência</h2>
            <div class="row">
                <b-alert v-model="showDismissibleAlert" variant="danger" dismissible>

                    <p>{{ this.mensagem }}</p>
                </b-alert>
                <div class="col-lg-9">

                    <div class="col-lg-6" role="group">
                        <label for="input-live">Nome</label>
                        
                        <b-form-input id="input-live" :state="stateNome" type="text" aria-describedby="input-live-help input-live-feedback"
                            placeholder="Informe o nome da Gerência" trim v-model="gerencia.nome"
                            v-on:change="validaCampoNome"></b-form-input>
                            <div class="invalid-feedback">Campo nome é obrigatório!</div>
                    </div>
                    <div class="col-lg-6" role="group">
                        <label for="input-live">Sigla</label>
                        <b-form-input id="input-live" :state="stateSigla" type="text" aria-describedby="input-live-help input-live-feedback"
                            placeholder="Informe a sigla da Gerência" trim v-model="gerencia.sigla"
                             v-on:change="validaCampoSigla"></b-form-input>
                             <div class="invalid-feedback">Campo sigla é obrigatório!</div>
                    </div>

                    <div class="form-group">
                        <label for="diretoria">Diretoria</label>
                        <select id="diretoria" class="form-control" v-model="gerencia.diretoria">
                            <option>Selecione</option>
                            <option v-for="diretoria in tipoDiretoria" :key="diretoria.id" :value="diretoria.id">
                                {{ diretoria.sigla }}
                            </option>
                        </select>
                    </div>

                </div>

                <div class="col-lg-3">

                    <div class="container-buttons-salvar">
                        <button @click="adicionarGerencia">Salvar</button>
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
                    <h2 class="card__titulo"> Listas das Gerências</h2>

                    <b-table striped hover :items="itemsGerencia" :fields="fields"></b-table>

                </div>
            </div>
        </div>
    </div>

</template>

<script>

import { gerenciaService } from "@/service/gerenciaService";
import { diretoriaService } from "@/service/diretoriaService";

export default {
    data() {
        return {
            gerencia: {
                nome: null,
                sigla: null,
                diretoria: "",
            },
            tipoDiretoria: [],
            showDismissibleAlert: false,
            mensagem: "",
            usuario: [],
            stateNome:false,
            stateSigla:false,
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
            itemsGerencia: [
                { Sigla: "ATEC", Nome: "Tecnologia" },
                { Sigla: "CODIP", Nome: "CorAudioVisual" },

            ]

        }
    },
    props: {
        parametros: Object,
    },
    mounted() {
        this.listarDiretoria()
        this.usuario = JSON.parse(localStorage.getItem("usuario"));
    },
    methods: {

        validaCampoNome(){
            
        if(this.gerencia.nome){
            this.stateNome = true;
            
        }else {
            this.stateNome = false;           
        }
        return this.stateNome
        
            
        },
        validaCampoSigla(){
           
        if(this.gerencia.sigla){
            this.stateSigla = true;
            
        }else {
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
        addGerencia() {
            let itemAbono = {};
            itemAbono.Período = ` ${this.formatarObjetoData(this.parseDataBr(this.toDDMMYYYY(this.abono.dataInicio)))} a ${this.formatarObjetoData(this.parseDataBr(this.toDDMMYYYY(this.abono.dataFim)))}`;
            setTimeout(() => {
                this.items.push(itemAbono)
                localStorage.setItem("abono", JSON.stringify(this.items));
            }, 900)

        },
        adicionarGerencia() {
            gerenciaService
                .salvarGerencia(this.gerencia)
                .then((res) => {

                    this.mensagem = res.data.mensagem,
                        this.showDismissibleAlert = true
                    this.gerencia.nome = "",
                        this.gerencia.sigla = ""
                })
                .catch(() => {
                    console.log("entrou aqui no erro")


                    // Aqui vai chamar a mensagem de erro          
                });
        },

        listarDiretoria() {
            diretoriaService
                .listarDiretoria().then((res) => {
                    this.tipoDiretoria = res;
                    console.log("diretoria", this.tipoDiretoria)
                });
        },
    },


}

</script>
