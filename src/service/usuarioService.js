
import axios from "axios";

export const usuarioService = {

    
    salvarUsuario(usuario) {
        return new Promise((resolve, reject) => {
          axios.post(`http://sigepi.adalberto1538.c41.integrator.host/usuario`, usuario)
          .then(ret => {
            resolve(ret.data)
          }).catch(err => {
            reject(err)
          })
        });
      },
}