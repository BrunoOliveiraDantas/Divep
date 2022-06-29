import Vue from "vue"
import VueRouter from "vue-router"


import HelloWorld from './components/HelloWorld'
import LoginUsuario from './components/LoginUsuario'



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
      
    ]
  })

