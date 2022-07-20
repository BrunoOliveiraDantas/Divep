
import axios from "axios";

export const nucleoService = {

    
    salvarNucleo(nucleo) {
  
        return new Promise((resolve, reject) => {
          axios.post(`http://sigepi.adalberto1538.c41.integrator.host/nucleo`, nucleo)
          .then(ret => {
            resolve(ret)
          }).catch(err => {
            reject(err)
          })
        });
      },

      listarNucleo(nucleo) {       

        return new Promise((resolve, reject) => {
          axios.get(`http://sigepi.adalberto1538.c41.integrator.host/nucleo`, nucleo)
          .then(ret => {
            resolve(ret)
          }).catch(err => {
            reject(err)
          })
        });
      },
     
        
}