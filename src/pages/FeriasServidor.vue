<template>
    <div class="container">
        <div class="card">
            <h2 class="card__titulo"> Cadastro de Férias</h2>
            <div class="row">
                <div class="col-lg-9">

                    <div class="row">
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

                    </div>
                    <div class="row">
                        <div class="col-lg-3">
                            <div role="group">
                                <label for="input-live">Data inicio:</label>
                                <b-form-input id="input-live" type="date"
                                    aria-describedby="input-live-help input-live-feedback"
                                    placeholder="Insira a data de inicio das férias" trim></b-form-input>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div role="group">
                                <label for="input-live">Data Fim:</label>
                                <b-form-input id="input-live" type="date"
                                    aria-describedby="input-live-help input-live-feedback"
                                    placeholder="Insira a data de fim das férias" trim></b-form-input>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-3">

                    <div class="container-buttons-salvar">
                        <button>Salvar</button>
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

export default {
    data() {
        return {

            fields: [
                {
                    key: 'Exercicio',
                    sortable: true
                },
                {
                    key: 'Período',
                    sortable: false
                },
                {
                    key: 'Dias',
                    sortable: true,
                    // Variant applies to the whole column, including the header and footer
                    //variant: 'danger'
                }
            ],
            items: [
                { isActive: true, Dias: "30", Período: '01/01/2022' + ' a ' + "01/02/2022", Exercicio: '2018' },
                { isActive: false, Dias: "05", Período: '10/03/2022' + ' a ' + "15/03/2022", Exercicio: '2019' },
                { isActive: false, Dias: "01", Período: '06/01/2022' + ' a ' + "06/01/2022", Exercicio: '2022' }
            ]

        }
    },
    methods: {

    },


}

</script>