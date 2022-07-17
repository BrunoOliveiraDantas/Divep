<template>

    <div class="container">
       
        <!-- Primeira parte -->
        <div class="row">
            <div class="col-lg-4">
                <div class="card">
                    <h2 class="card__titulo">Diretoria</h2>

                    <table class="table table-striped">

                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Sigla</th>                                
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="diretoria in itemsDiretoria" :key="diretoria.id">
                                <td>{{ diretoria.nome }}</td>
                                <td>{{ diretoria.sigla }}</td>
                                
                                <td>
                                    <div>
                                        <button type="button">Ação</button>
                                    </div>
                                </td>
                            </tr>

                        </tbody>

                    </table>

                    <div class="container-buttons">
                        <button type="button" @click="incluirDiretoria">Incluir</button>
                    </div>
                </div>
            </div>

            <div class="col-lg-4">
                <div class="card">
                    <h2 class="card__titulo">Gerência</h2>

                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Sigla</th>
                                <th>Ações</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="gerencia in itemsGerencia" :key="gerencia.id">
                                <td>{{gerencia.nome}}</td>
                                <td>{{gerencia.sigla}}</td>

                                <td>
                                    <div>
                                        <button type="button">Ação</button>
                                    </div>
                                </td>
                            </tr>

                        </tbody>
                    </table>

                    <div class="container-buttons">
                        <button type="button" @click="incluirGerencia">Incluir</button>
                    </div>
                </div>
            </div>

            <div class="col-lg-4">
                <div class="card">
                    <h2 class="card__titulo">Núcleo</h2>

                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Sigla</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="nucleo in itemsNucleo" :key="nucleo.id">
                                <td>{{nucleo.nome}}</td>
                                <td>{{nucleo.sigla}}</td>

                                <td>
                                    <div>
                                        <button type="button">Ação</button>
                                    </div>
                                </td>
                            </tr>

                        </tbody>
                    </table>

                    <div class="container-buttons">
                        <button @click="incluirNucleo">Incluir</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Última parte-->
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <h2 class="card__titulo">Setor</h2>
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Sigla</th>
                                <th>Diretoria</th>
                                <th>Gerência</th>
                                <th>Núcleo</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                           <tr v-for="setor in itemsSetor" :key="setor.id">
                                <td>{{setor.nome}}</td>
                                <td>{{setor.sigla}}</td>
                                <td>{{setor.diretoria}}</td>
                                <td>{{setor.gerencia}}</td>
                                <td>{{setor.nucleo}}</td>

                                <td>
                                    <div>
                                        <button type="button">Ação</button>
                                    </div>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                    <div class="container-buttons">
                        <button>Incluir</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>


export default {
    data() {
        return {
         
            itemsDiretoria: [
                { isActive: true, sigla: "Nvp", nome: 'Nuvep' },
                { isActive: false,  sigla: "drp", nome: 'Direp' },
                /* { isActive: false, Dias: "01", Período: '06/01/2022' + ' a ' + "06/01/2022", Exercicio: '2022' } */
            ],
            itemsGerencia: [
                { sigla: "ATEC", nome:"Tecnologia" },
                { sigla: "CODIP ", nome:"CorAudioVisual" },
               
            ],
            itemsNucleo: [
                { sigla: "TAG", nome:"Taguatinga" },
                { sigla: "GMA ", nome:"Gama" },
               
            ],
             itemsSetor: [
                { sigla: "INF", nome:"Informática", diretoria:"Nuvep", gerencia:"Tecnologia", nucleo:"Taguatinga" },
                
               
            ],
        }
    },
    methods: {
        incluirDiretoria() {
            this.$router.push({
                path: "diretoria",
                params: { parametros: "" },
            });
        },

        incluirGerencia() {
            this.$router.push({
                path: "gerencia",
                params: { parametros: "" },
            });
        },
        incluirNucleo() {
            this.$router.push({
                path: "nucleo",
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
