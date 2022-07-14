<template>
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
                        <a class="nav-link nav-link--novo" @click="novoCadastro">Novo</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link nav-link--sair" @click="limpaLocalStore">Sair</a>
                    </li>
                </ul>
            </div>
        </nav>
</template>

<script>

export default {
methods: { 
    limpaLocalStore(){
        localStorage.clear();

    },
    novoCadastro(){
        this.$router.push({
                path: "dadosPessoais",
                params: { parametros: "" },
            });
    }
}
}
</script>
