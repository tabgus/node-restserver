const {response, request} = require('express');

const usuariosGet = (req=request, res=response) => {

    const query = req.query;

    res.json({
        msg: "get API-Controlador",
        query
    });
}

const usuariosPut = (req, res=response) => {

    const {id} = req.params;

    res.json({
        msg: "put API-controlador",
        id
    });
}

const usuariosPost = (req, res=response) => {
    
    const {nombre, edad} = req.body;

    res.status(201).json({
        msg: "post API-controlador",
        nombre, edad
    });
}

const usuariosDelete = (req, res=response) => {
    res.json({
        msg: "delete API-Controlador"
    });
}

const usuariosPatch = (req, res=response) => {
    res.json({
        msg: "patch API-Controlador"
    });
}



module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
}