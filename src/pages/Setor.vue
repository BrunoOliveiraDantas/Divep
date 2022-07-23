<template>
    <div class="container">

        <div class="card">
            <h2 class="card__titulo"> Cadastro de Setor</h2>
            <div class="row">
                <div class="col-lg-9">                    

                    <div class="col-lg-6" role="group">
                        <label for="input-live">Nome</label>
                        <b-form-input id="input-live" type="text"
                            aria-describedby="input-live-help input-live-feedback"
                            placeholder="Informe o nome do Setor" trim v-model="setor.nome"></b-form-input>
                    </div>
                     <div class="col-lg-6" role="group">
                        <label for="input-live">Sigla</label>
                        <b-form-input id="input-live" type="text"
                            aria-describedby="input-live-help input-live-feedback"
                            placeholder="Informe a sigla do Setor" trim v-model="setor.sigla"></b-form-input>
                    </div>

                 
                 
                </div>

                <div class="col-lg-3">

                    <div class="container-buttons-salvar">
                        <button @click="adicionarSetor">Salvar</button>
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
