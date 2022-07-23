<template>
    <nav class="navbar navbar-expand-lg navbar-light">
        <a class="navbar-brand" @click="inicio">
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
                    <a class="nav-link nav-link--novo" @click="novoCadastro">Novo</a>
                </li>
                <b-dropdown text="Apoio">
                    <b-dropdown-item @click="diretoria">Diretoria</b-dropdown-item>
                    <b-dropdown-item @click="gerencia">Gerência</b-dropdown-item>
                    <b-dropdown-item @click="nucleo">Núcleo</b-dropdown-item>
                    <b-dropdown-item @click="setor">Setor</b-dropdown-item>
                </b-dropdown>
                <!-- <li class="nav-item">
                        <a class="nav-link nav-link--novo" @click="administrativo">Apoio</a>
                        

                    </li> -->



                <li class="nav-item">
                    <a class="nav-link nav-link--sair" @click="limpaLocalStore">Sair</a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>

export default {

    computed: {
        routes() {
            return this.$router.options.routes.filter(route => "meta" in route && "displayName" in route.meta)
        },



    },
    methods: {
        limpaLocalStore() {
            localStorage.clear();

        },
        novoCadastro() {
            this.$router.push({
                path: "dadosPessoais",
                params: { parametros: "" },
            });
        },
        administrativo() {
            this.$router.push({
                path: "administrativo",
                params: { parametros: "" },
            });
        },
        diretoria() {
            this.$router.push({
                path: "diretoria",
                params: { parametros: "" },
            });
        },
        gerencia() {
            this.$router.push({
                path: "gerencia",
                params: { parametros: "" },
            });
        },
        nucleo() {
            this.$router.push({
                path: "nucleo",
                params: { parametros: "" },
            });
        },
        setor() {
            this.$router.push({
                path: "setor",
                params: { parametros: "" },
            });
        },

        inicio() {
            this.$router.push({
                path: "inicio",
                params: { parametros: "" },
            });
        }
    }
}
</script>
