const { Router } = require('express');
const { check } = require('express-validator');
const {validarCampos} = require('../middelwares/validar-campos');
const { usuariosGet, usuariosPut, usuariosPost, usuariosDelete, usuariosPatch } = require('../controllers/usuarios');
const { rolValido, emailExiste, idExiste } = require('../helpers/db-validators');

const router = Router();


router.get('/', usuariosGet);

router.put('/:id',[
    check('id', "No es un ID válido").isMongoId(),
    check('id').custom(idExiste),
    check('rol').custom(rolValido),
    validarCampos
], usuariosPut);

router.post('/', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'El password debe tener más de 6 caracteres').isLength({min:6}),
    check('correo', 'Correo inválido').isEmail(),
    check('correo').custom(emailExiste),
    //check('rol', 'No es un rol válido').isIn(['ADMIN_ROLE', 'USER_ROLE']),
    check('rol').custom(rolValido),
    validarCampos
], usuariosPost);

router.delete('/:id',[
    check('id', "No es un ID válido").isMongoId(),
    check('id').custom(idExiste),
    validarCampos
], usuariosDelete);

router.patch('/', usuariosPatch);



module.exports = router;