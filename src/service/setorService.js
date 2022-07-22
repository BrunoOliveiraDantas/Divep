
import axios from "axios";

export const setorService = {

    
    salvarSetor(setor) {
  
        return new Promise((resolve, reject) => {
          axios.post(`http://sigepi.adalberto1538.c41.integrator.host/setor`, setor)
          .then(ret => {
            resolve(ret)
          }).catch(err => {
            reject(err)
          })
        });
      },

      listarSetor(setor) {       

        return new Promise((resolve, reject) => {
          axios.get(`http://sigepi.adalberto1538.c41.integrator.host/setor`, setor)
          .then(ret => {
            resolve(ret)
          }).catch(err => {
            reject(err)
          })
        });
      },
     
        
}