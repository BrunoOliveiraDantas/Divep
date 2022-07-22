import axios from "axios";
export const loginService = {

    loginAcesso(cpf, senha) {
        return new Promise((resolve, reject) => {
            console.log("ENTREI NO SERVIÇO")
            axios.post(`http://sigepi.adalberto1538.c41.integrator.host/login`, {cpf:cpf, senha:senha})
            .then(ret => {
              resolve(ret.data)
            }).catch(err => {
              reject(err)
            })
          }); 
    },
  
}