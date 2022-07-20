
import axios from "axios";

export const diretoriaService = {

    
    salvarDiretoria(diretoria) {
   /*    let axiosConfig = {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            'Content-Length':'<calculated when request is sent>',
            'Content-Host':'<calculated when request is sent>',
            "Access-Control-Allow-Origin": "*"
        }
      }; */
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