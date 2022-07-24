<template>
    <div class="container">

        <div class="card">
            <h2 class="card__titulo"> Cadastro de Abono</h2>
            <div class="row">
                <div class="col-lg-9">

                    <!-- <div class="row">
                        <div class="col-lg-6">
                            <div role="group">
                                <label for="input-live">Ano de exercicio::</label>
                                <b-form-select class="mb-3 input-select">
                                    <b-form-select-option value="C">2021</b-form-select-option>
                                    <b-form-select-option value="D">2022</b-form-select-option>
                                </b-form-select>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div role="group">
                                <label for="input-live">Dias de férias:</label>
                                <b-form-input id="input-live" aria-describedby="input-live-help input-live-feedback"
                                    placeholder="Insira a quantidade de dias de férias a serem tiradas" trim>
                                </b-form-input>
                            </div>
                        </div>

                    </div> -->


                    <div class="col-lg-6" role="group">
                        <label for="input-live">Data Início:</label>
                        <b-form-input v-model="abono.dataInicio" id="input-live" type="date"
                            aria-describedby="input-live-help input-live-feedback"
                            placeholder="Insira a data de inicio do abono" trim></b-form-input>
                    </div>
                    <div class="col-lg-6" role="group">
                        <label for="input-live">Data Fim:</label>
                        <b-form-input v-model="abono.dataFim" id="input-live" type="date"
                            aria-describedby="input-live-help input-live-feedback"
                            placeholder="Insira a data de fim do abono" trim></b-form-input>
                    </div>

                    <!--  <div class="col-lg-3">
                            <div role="group">
                                <label for="input-live">Data Fim:</label>
                                <b-form-input id="input-live" type="date" aria-describedby="input-live-help input-live-feedback"
                                    placeholder="Insira a data de fim das férias" trim></b-form-input>
                            </div>
                        </div> -->

                </div>

                <div class="col-lg-3">

                    <div class="container-buttons-salvar">
                        <b-button @click="addAbono" variant="outline-success">Salvar</b-button>
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
                    <h2 class="card__titulo"> Abono do Servidor</h2>

                    <b-table striped hover :items="items" :fields="fields"></b-table>

                </div>
            </div>
        </div>
    </div>

</template>

<script>

export default {
    data() {
        return {
            abono: {
                dataInicio: null,
                dataFim: null,
            },
            fields: [
                /*  {
                     key: 'Exercicio',
                     sortable: true
                 }, */
                {
                    key: 'Período',
                    sortable: false
                },
                /*  {
                     key: 'ID',
                     sortable: true,
                     // Variant applies to the whole column, including the header and footer
                     //variant: 'danger'
                 } */
            ],
            items: [
                { Período: '01/01/2022' + ' a ' + "01/02/2022"/* , isActive: false, ID: "2506" */ },
                { Período: '10/03/2022' + ' a ' + "15/03/2022"/* , isActive: false, ID: "2504" */ },
                { Período: '06/01/2022' + ' a ' + "06/01/2022"/* , isActive: false, ID: "246" */ }
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
        addAbono() {
            let itemAbono = {};
            itemAbono.Período = ` ${this.formatarObjetoData(this.parseDataBr(this.toDDMMYYYY(this.abono.dataInicio)))} a ${this.formatarObjetoData(this.parseDataBr(this.toDDMMYYYY(this.abono.dataFim)))}`;
            setTimeout(() => {
                this.items.push(itemAbono)
                localStorage.setItem("abono", JSON.stringify(this.items));
            }, 900)
            
        },
    },


}

</script>
