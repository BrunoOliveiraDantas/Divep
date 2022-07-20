
import axios from "axios";

export const diretoriaService = {

    
    salvarDiretoria(diretoria) {
        return new Promise((resolve, reject) => {
          axios.post(`http://sigepi.adalberto1538.c41.integrator.host/diretoria`, diretoria)
          .then(ret => {
            resolve(ret)
          }).catch(err => {
            reject(err)
          })
        });
      },

      listarDiretoria(diretoria) {
        return new Promise((resolve, reject) => {
          axios.get(`http://sigepi.adalberto1538.c41.integrator.host/diretoria`, diretoria)
          .then(ret => {
            resolve(ret)
          }).catch(err => {
            reject(err)
          })
        });
      },
     
        
}