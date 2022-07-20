
import axios from "axios";

export const gerenciaService = {

    
    salvarGerencia(gerencia) {
        return new Promise((resolve, reject) => {
          axios.post(`http://sigepi.adalberto1538.c41.integrator.host/gerencia`, gerencia)
          .then(ret => {
            resolve(ret)
          }).catch(err => {
            reject(err)
          })
        });
      },
}