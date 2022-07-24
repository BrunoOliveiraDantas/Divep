<template>
    <div class="container">

        <div class="card">
            <h2 class="card__titulo"> Cadastro de Setor</h2>
            <div class="row">
                <div class="col-lg-9">                    

                    <div class="col-lg-6" role="group">
                        <label for="input-live">Nome</label>
                        <b-form-input id="input-live" :state="stateNome" type="text"
                            aria-describedby="input-live-help input-live-feedback"
                            placeholder="Informe o nome do Setor" trim v-model="setor.nome"
                            v-on:change="validaCampoNome"></b-form-input>
                            <div class="invalid-feedback">Campo nome é obrigatório!</div>
                    </div>
                     <div class="col-lg-6" role="group">
                        <label for="input-live">Sigla</label>
                        <b-form-input id="input-live" :state="stateSigla" type="text"
                            aria-describedby="input-live-help input-live-feedback"
                            placeholder="Informe a sigla do Setor" trim v-model="setor.sigla"
                            v-on:change="validaCampoSigla"></b-form-input>
                            <div class="invalid-feedback">Campo sigla é obrigatório!</div>
                    </div>

                 
                 
                </div>

                <div class="col-lg-3">

                    <div class="container-buttons-salvar">
                        <b-button @click="adicionarSetor" variant="outline-success">Salvar</b-button>
                    </div>
                    <div class="container-buttons-salvar">
                        <router-link to="/inicio"><b-button variant="outline-success">Voltar</b-button></router-link>
                    </div>
                </div>
            </div>
        </div>


        <!-- Tabela de ferias -->
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <h2 class="card__titulo"> Listas dos Setores</h2>

                    <b-table striped hover :items="itemsSetor" :fields="fields"></b-table>

                </div>
            </div>
        </div>
    </div>

</template>

<script>

/* import { nucleoService } from "@/service/nucleoService";
import { gerenciaService } from "@/service/gerenciaService"; */
import { setorService } from "@/service/setorService";

export default {
    data() {
        return {
            setor: {
                nome: null,
                sigla: null,
               
            },
            stateSigla:false,
            stateNome:false,
           
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
            itemsSetor: [
                { Sigla: "TAG", Nome:"Taguatinga"},
                { Sigla: "GMA", Nome:"Gama"},
               
            ]

        }
    },
    mounted(){
        
    },
    methods: {

        validaCampoNome() {

            if (this.setor.nome) {
                this.stateNome = true;

            } else {
                this.stateNome = false;
            }
            return this.stateNome


        },
        validaCampoSigla() {

            if (this.setor.sigla) {
                this.stateSigla = true;

            } else {
                this.stateSigla = false;

            }
            return this.stateSigla
        },
        

        adicionarSetor(){

        setorService
        .salvarSetor(this.setor)
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
