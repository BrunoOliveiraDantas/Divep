<template>
    <div class="container">
        <div class="card">
            <h2 class="card__titulo"> Cadastro de Férias</h2>
            <div class="row">
                <div class="col-lg-9">

                    <div class="row">
                        <div class="col-lg-6">
                            <div role="group">
                                <label for="input-live">Ano de exercicio:</label>
                                <b-form-select class="mb-3 input-select" v-model="feriasSelecionadas.anoExercicio"
                                    :options="options"></b-form-select>
                                <!-- <b-form-select class="mb-3 input-select">
                                    <b-form-select-option value="D" v-model="feriasSelecionadas.anoExercicio">2022</b-form-select-option>
                                </b-form-select> -->
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div role="group">
                                <label for="input-live">Dias de férias:</label>
                                <b-form-input v-model="feriasSelecionadas.diasFerias" id="input-live"
                                    aria-describedby="input-live-help input-live-feedback"
                                    placeholder="Insira a quantidade de dias de férias a serem tiradas" trim>
                                </b-form-input>
                            </div>
                        </div>

                    </div>
                    <div class="row">
                        <div class="col-lg-3">
                            <div role="group">
                                <label for="input-live">Data inicio:</label>
                                <b-form-input id="input-live" type="date" v-model="feriasSelecionadas.dataInicio"
                                    aria-describedby="input-live-help input-live-feedback"
                                    placeholder="Insira a data de inicio das férias" trim></b-form-input>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div role="group">
                                <label for="input-live">Data Fim:</label>
                                <b-form-input id="input-live" type="date" v-model="feriasSelecionadas.dataFim"
                                    aria-describedby="input-live-help input-live-feedback"
                                    placeholder="Insira a data de fim das férias" trim></b-form-input>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-3">

                    <div class="container-buttons-salvar">
                        <button @click="addFerias">Salvar</button>
                    </div>
                    <div class="container-buttons-salvar">
                        <router-link to="/inicio"><button>Voltar</button></router-link>
                    </div>
                </div>
            </div>
        </div>


        <!-- Tabela de ferias -->
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <h2 class="card__titulo"> Férias do Servidor</h2>

                    <b-table striped hover :items="items" :fields="fields"></b-table>

                </div>
            </div>
        </div>
    </div>

</template>

<script>

/* import { feriasService } from "@/service/feriasService"; */

export default {
    data() {
        return {

            feriasSelecionadas: {
                anoExercicio: null,
                diasFerias: null,
                dataInicio: null,
                dataFim: null,
            },
            ferias: [],

            options: [{ value: 2021, text: '2021' }, { value: 2022, text: '2022' }],

            fields: [
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
                }
            ],
            items: [
                { isActive: true, Dias: "30", Período: '01/01/2018' + ' a ' + "01/02/2018", Exercicio: '2018' },
                { isActive: false, Dias: "05", Período: '10/03/2019' + ' a ' + "15/03/2019", Exercicio: '2019' },
                { isActive: false, Dias: "01", Período: '06/01/2022' + ' a ' + "06/01/2022", Exercicio: '2022' }
            ]

        }
    },
    methods: {
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

        addFerias() {
            let itemFerias = {};
            itemFerias.isActive = "true";
            itemFerias.Dias = this.feriasSelecionadas.diasFerias;
            itemFerias.Período = ` ${this.formatarObjetoData(this.parseDataBr(this.toDDMMYYYY(this.feriasSelecionadas.dataInicio)))} a ${this.formatarObjetoData(this.parseDataBr(this.toDDMMYYYY(this.feriasSelecionadas.dataFim)))}`;
            itemFerias.Exercicio = this.feriasSelecionadas.anoExercicio;
            console.log("Ferias Aqui", this.feriasSelecionadas)
            
            setTimeout(()=>{
                this.items.push(itemFerias)
                localStorage.setItem("ferias", JSON.stringify(this.items));}, 900)
            //localStorage.setItem("ferias1", JSON.stringify(this.items));
        },
/*         salvarFerias() {
            console.log("CAI NO SALVAR")
            feriasService.salvarFerias().then((res) => {
                this.ferias = res;
                console.log("Resposta do Salvar", this.ferias)
                let itemFerias = [{}];
                for (let index = 0; index < this.ferias.length; index++) {
                    console.log("Entrei no for", itemFerias)
                    console.log("Item ferias", itemFerias[index].isActive)
                    itemFerias[index].isActive = "true";
                    itemFerias[index].Dias = this.ferias[index].dias;
                    itemFerias[index].Período = ` ${this.ferias[index].dataInicio} a ${this.ferias[index].dataFim}`;
                    itemFerias[index].Exercicio = this.ferias[index].exercicio;

                    this.items.push(itemFerias[index]);
                    console.log("Entrei no for", itemFerias)
                }

            })
                .catch(erro => {
                    console.log(erro);
                })
                .finally(() => {

                });

        }, */

    },


}

</script>