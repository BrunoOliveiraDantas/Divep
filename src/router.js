import Vue from "vue"
import VueRouter from "vue-router"


import Inicio from '@/pages/Inicio'
import LoginUsuario from '@/pages/LoginUsuario'
import FeriasServidor from '@/pages/FeriasServidor'
import AbonoServidor from '@/pages/AbonoServidor'
import DadosPessoais from '@/pages/DadosPessoais'


Vue.use(VueRouter)

export default new VueRouter({
    mode: "history",
    routes: [
        {
            path: '/inicio',
            name:"inicio",
            component: Inicio,
           
        },
        {
            path: '/',
            name:"login",
            component: LoginUsuario,
          
        },
        {
            path: '/ferias',
            component: FeriasServidor,
        },
        {
            path:'/abono',
            component: AbonoServidor
        },
        {
            path:'/dadosPessoais',
            component: DadosPessoais
        },

        
      
    ]
  })

