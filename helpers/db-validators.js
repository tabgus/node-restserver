const Role = require('../models/role');
const Usuario = require('../models/usuario');

const rolValido = async(rol = '')=> {
    const existeRol = await Role.findOne({rol});
    if(!existeRol){
        throw new Error(`El rol (${rol}) no está registrado en la DB`)
    }
}

const emailExiste = async(correo="") => {
    const email = await Usuario.findOne({correo});
    if(email){
        throw new Error(`El correo (${correo}) ya está registrado`)
    }
}

const idExiste = async(id) => {
    const existeId = await Usuario.findById(id);
    if(!existeId){
        throw new Error(`El ID (${id}) no existe`)
    }
}

module.exports = {
    rolValido,
    emailExiste,
    idExiste
}