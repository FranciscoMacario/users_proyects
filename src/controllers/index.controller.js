const { Pool } = require('pg');

const pool = new Pool ({
    host: 'localhost',
    user: 'postgres',
    password: 'iris1503',
    database: 'users',
    port: '5432'
});


//Lista de usuarios
const getUsers = async (req, res) => {
    const response = await pool.query('SELECT * FROM users');
    console.log(response.rows);
    res.json(response.rows);
}
//Obtener ususarios por id
const getUsersID = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    res.json(response.rows);
}
//Añadir usuarios
const addUser = async (req, res) => {
    const { username, email, lenguaje_fav } = req.body;

    const response = await pool.query('INSERT INTO users (username, email, lenguaje_fav) VALUES ($1, $2, $3)', [
        username, 
        email, 
        lenguaje_fav]);
    console.log(response);
    res.json({
        message: 'Usuario añadido correctamente.',
        body: {
            user: {username, email, lenguaje_fav}
        }
    })
}
//Actualizar usuarios
const updateUser = async (req, res) => {
    const id = req.params.id;
    const { username, email, lenguaje_fav } = req.body;
    const response = await pool.query('UPDATE users SET username = $1, email = $2, lenguaje_fav = $3 WHERE id = $4', [
        username,
        email,
        lenguaje_fav,
        id
    ]);
    console.log(response);
    res.json('Ususario actualizado correctamente');
}
//Borrar usuarios
const deleteUsers = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('DELETE FROM users WHERE id = $1', [id]);
    console.log(response);
    res.json(`Usuario ${id} eliminado correctamente`);
}
//

//Lista de proyectos
const getProyectos = async (req, res) => {
    const response = await pool.query('SELECT * FROM proyectos');
    console.log(response.rows);
    res.json(response.rows);
}
//Proyectos por id
const getProyectID = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM proyectos WHERE id = $1', [id]);
    res.json(response.rows);
}
//Publicar proyecto
const postProyect = async (req, res) => {
    const { nombre, lenguaje, user_id } = req.body;
    const response = await pool.query('INSERT INTO proyectos (nombre, lenguaje, user_id) VALUES ($1, $2, $3)', [
        nombre,
        lenguaje,
        user_id
    ]);
    console.log(response);
    res.json({
        message: 'Proyecto añadido correctamente',
        body: {
            proyecto: { nombre, lenguaje, user_id}
        }
    })
}
//Actualizar proyecto
const putProyect = async (req, res) => {
    const id = req.params.id;
    const { nombre, lenguaje } = req.body;
    const response = await pool.query('UPDATE proyectos SET nombre = $1, lenguaje = $2 WHERE id = $3', [
        nombre,
        lenguaje,
        id
    ]);
    console.log(response);
    res.json('Proyecto actualizado correctamente');
}
//Borrar proyecto
const borrarProyecto = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('DELETE FROM proyectos WHERE id = $1', [id]);
    console.log(response);
    res.json(`Proyecto ${id} fue eliminado con exito`);
}
module.exports = {
    getUsers,
    addUser,
    getUsersID,
    deleteUsers,
    updateUser,
    getProyectos,
    getProyectID,
    postProyect,
    putProyect,
    borrarProyecto
}