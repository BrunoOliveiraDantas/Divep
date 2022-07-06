<template>
    <div class="container">
        <!-- Navbar-->
        <nav class="navbar navbar-expand-lg navbar-light">
            <a class="navbar-brand" href="#">
                <h1>DIVEP</h1>
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse flex-row-reverse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <!-- <li class="nav-item active">
                        <a class="nav-link nav-link--inicio" href="#">Início</a>
                    </li> -->

                    <li class="nav-item active">
                        <a class="nav-link nav-link--pessoas" href="#">Pessoas</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link nav-link--financeiro" href="#">Financeiro</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link nav-link--vacinacao" href="#">Vacinação</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link nav-link--novo" href="#">Novo</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link nav-link--sair" href="#">Sair</a>
                    </li>
                </ul>
            </div>
        </nav>

        <div class="card">
            <h2 class="card__titulo"> Cadastro de Férias</h2>
            <div class="row">
                <div class="col-lg-9">

                    <div class="row">
                        <div class="col-lg-6">
                            <div role="group">
                                <label for="input-live">Ano de exercicio::</label>
                                <b-form-select class="mb-3 input-select">
                                    <b-form-select-option value="C">Opção 1</b-form-select-option>
                                    <b-form-select-option value="D">Opção 2</b-form-select-option>
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
                                <b-form-input id="input-live" aria-describedby="input-live-help input-live-feedback"
                                    placeholder="Insira a data de inicio das férias" trim></b-form-input>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div role="group">
                                <label for="input-live">Data Fim:</label>
                                <b-form-input id="input-live" aria-describedby="input-live-help input-live-feedback"
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
                { isActive: true, Dias: 40, Período: 'Dickerson', Exercicio: 'Macdonald' },
                { isActive: false, Dias: 21, Período: 'Larsen', Exercicio: 'Shaw' },
                { isActive: false, Dias: 89, Período: 'Geneva', Exercicio: 'Wilson' },
                { isActive: true, Dias: 38, Período: 'Jami', Exercicio: 'Carney' }
            ]

        }
    },
    methods: {

    },


}

</script>

<style type="text/css">
/* Navbar */
.navbar {
    background-color: #20896d;
    padding: 0.5rem;
}

.navbar .navbar-brand {
    color: #ecf0f1;
    margin-left: 30px;
}

.navbar .navbar-brand:hover,
.navbar .navbar-brand:focus {
    color: #ecdbff;
}

.navbar .navbar-text {
    color: #ecf0f1;
}

.navbar .navbar-text a {
    color: #ecdbff;
}

.navbar .navbar-text a:hover,
.navbar .navbar-text a:focus {
    color: #ecdbff;
}

.navbar .navbar-nav .nav-link {
    color: #ecf0f1;
    border-radius: .25rem;
    margin: 0 0.25em;
}

.navbar .navbar-nav .nav-link:not(.disabled):hover,
.navbar .navbar-nav .nav-link:not(.disabled):focus {
    background-color: #1f7861;
}

.navbar .navbar-nav .dropdown-menu {
    background-color: #20896d;
    border-color: #0f4537;
}

.navbar .navbar-nav .dropdown-menu .dropdown-item {
    color: #ecf0f1;
}

.navbar .navbar-nav .dropdown-menu .dropdown-item:hover,
.navbar .navbar-nav .dropdown-menu .dropdown-item:focus,
.navbar .navbar-nav .dropdown-menu .dropdown-item.active {
    color: #ecdbff;
    background-color: #0f4537;
}

.navbar .navbar-nav .dropdown-menu .dropdown-divider {
    border-top-color: #0f4537;
}

.navbar .navbar-nav .nav-item.active .nav-link,
.navbar .navbar-nav .nav-item.active .nav-link:hover,
.navbar .navbar-nav .nav-item.active .nav-link:focus,
.navbar .navbar-nav .nav-item.show .nav-link,
.navbar .navbar-nav .nav-item.show .nav-link:hover,
.navbar .navbar-nav .nav-item.show .nav-link:focus {
    color: #ecdbff;
    background-color: #0f4537;
}

.navbar .navbar-toggler {
    border-color: #0f4537;
    margin-right: 30px;
}

.navbar .navbar-toggler:hover,
.navbar .navbar-toggler:focus {
    background-color: #0f4537;
}

.navbar .navbar-toggler .navbar-toggler-icon {
    color: #ecf0f1;
}

.navbar .navbar-collapse,
.navbar .navbar-form {
    border-color: #ecf0f1;
}

.navbar .navbar-link {
    color: #ecf0f1;
}

.navbar .navbar-link:hover {
    color: #ecdbff;
}

@media (max-width: 575px) {
    .navbar-expand-sm .navbar-nav .show .dropdown-menu .dropdown-item {
        color: #ecf0f1;
    }

    .navbar-expand-sm .navbar-nav .show .dropdown-menu .dropdown-item:hover,
    .navbar-expand-sm .navbar-nav .show .dropdown-menu .dropdown-item:focus {
        color: #ecdbff;
    }

    .navbar-expand-sm .navbar-nav .show .dropdown-menu .dropdown-item.active {
        color: #ecdbff;
        background-color: #0f4537;
    }
}

@media (max-width: 767px) {
    .navbar-expand-md .navbar-nav .show .dropdown-menu .dropdown-item {
        color: #ecf0f1;
    }

    .navbar-expand-md .navbar-nav .show .dropdown-menu .dropdown-item:hover,
    .navbar-expand-md .navbar-nav .show .dropdown-menu .dropdown-item:focus {
        color: #ecdbff;
    }

    .navbar-expand-md .navbar-nav .show .dropdown-menu .dropdown-item.active {
        color: #ecdbff;
        background-color: #0f4537;
    }
}

@media (max-width: 991px) {
    .navbar-expand-lg .navbar-nav .show .dropdown-menu .dropdown-item {
        color: #ecf0f1;
    }

    .navbar-expand-lg .navbar-nav .show .dropdown-menu .dropdown-item:hover,
    .navbar-expand-lg .navbar-nav .show .dropdown-menu .dropdown-item:focus {
        color: #ecdbff;
    }

    .navbar-expand-lg .navbar-nav .show .dropdown-menu .dropdown-item.active {
        color: #ecdbff;
        background-color: #0f4537;
    }
}

@media (max-width: 1199px) {
    .navbar-expand-xl .navbar-nav .show .dropdown-menu .dropdown-item {
        color: #ecf0f1;
    }

    .navbar-expand-xl .navbar-nav .show .dropdown-menu .dropdown-item:hover,
    .navbar-expand-xl .navbar-nav .show .dropdown-menu .dropdown-item:focus {
        color: #ecdbff;
    }

    .navbar-expand-xl .navbar-nav .show .dropdown-menu .dropdown-item.active {
        color: #ecdbff;
        background-color: #0f4537;
    }
}

.navbar-expand .navbar-nav .show .dropdown-menu .dropdown-item {
    color: #ecf0f1;
}

.navbar-expand .navbar-nav .show .dropdown-menu .dropdown-item:hover,
.navbar-expand .navbar-nav .show .dropdown-menu .dropdown-item:focus {
    color: #ecdbff;
}

.navbar-expand .navbar-nav .show .dropdown-menu .dropdown-item.active {
    color: #ecdbff;
    background-color: #0f4537;
}

/* Card */
.card {
    border: 1px solid #FFFFFF;
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.15);
    border-radius: 4px;
    padding: 1rem;
    margin: 1rem 0;
}

/* Container Buttons */
.container-buttons-salvar {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 0.5rem 0;
    margin: 1rem 0 0 0;
}

/*         .container-buttons button:not(:last-child) {
               margin-right: 0.2rem;
           } */

.container-buttons--colunas {
    flex-direction: column;
}

.container-buttons--colunas button:not(:last-child) {
    margin-bottom: 0.2rem;
}

/* Form elementos*/
button {
    color: #FFF;
    padding: 5px 10px;
    background: #20896d;
    border: 1px solid #20856a;
    border-radius: 10px;
}

/* Inputs Select */
.input-select {

    display: inline-block;
    width: 100%;
    height: calc(1.5em + .75rem + 2px);
    padding: .375rem 1.75rem .375rem .75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    vertical-align: middle;
    background: #fff url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5'%3E%3Cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E") right .75rem center/8px 10px no-repeat;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

}

/* Tabela */
</style>