import axios from "axios";

export const usuarioService = {
  salvarUsuario(usuario) {
    return new Promise((resolve, reject) => {
      axios
        .post(
          `http://sigepi.adalberto1538.c41.integrator.host/usuario`,
          usuario
        )
        .then((ret) => {
          resolve(ret);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  listarUsuarioPorCpf(cpf) {
    return new Promise((resolve, reject) => {
      axios
        .get(`http://sigepi.adalberto1538.c41.integrator.host/usuario/${cpf}`)
        .then((ret) => {
          resolve(ret);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  editarUsuario(id, usuario) {
    return new Promise((resolve, reject) => {
      axios
        .put(
          `http://sigepi.adalberto1538.c41.integrator.host/usuario/value=/${id}`,
          usuario
        )
        .then((ret) => {
          resolve(ret);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};
