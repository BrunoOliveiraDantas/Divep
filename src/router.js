import Vue from "vue"
import VueRouter from "vue-router"

import PessoasInicio from '@/pages/PessoasInicio'


Vue.use(VueRouter)

const routes = [
    // paginas iniciais
    {
        name: 'PessoasInicio',
        path: '/PessoasInicio',
        component: PessoasInicio,
    },
   
]
export default router 