import Vue from "vue"
import VueRouter from "vue-router"


import HelloWorld from './components/HelloWorld'
import LoginUsuario from './components/LoginUsuario'
import FeriasServidor from './components/FeriasServidor'
import AbonoServidor from './components/AbonoServidor'


Vue.use(VueRouter)

export default new VueRouter({
    mode: "history",
    routes: [
        {
            path: '/helloWorld',
            component: HelloWorld,
        },
        {
            path: '/',
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
      
    ]
  })

