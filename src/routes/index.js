const { Router } = require('express');
const router = Router();

const { getUsers, getUsersID, addUser, updateUser, deleteUsers } = require('../controllers/index.controller')
const { getProyectos, getProyectID, postProyect, putProyect, borrarProyecto } = require('../controllers/index.controller')

//Usuarios
router.get('/users', getUsers);
router.get('/users/:id', getUsersID);
router.post('/users', addUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUsers);

//Proyectos
router.get('/proyectos', getProyectos);
router.get('/proyectos/:id', getProyectID);
router.post('/proyectos', postProyect);
router.put('/proyectos/:id', putProyect);
router.delete('/proyectos/:id', borrarProyecto);

module.exports = router;