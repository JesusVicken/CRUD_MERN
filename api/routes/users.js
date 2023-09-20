import express from 'express';
import {
    getUsers,
    addUser,
    updateUser,
    deleteUser
} from '../controllers/user.js';

const router = express.Router(); //indica que é uma rota

router.get('/', getUsers); //atribuindo o método GET (/) indica q o get vai ser na raiz e vou chamar uma função getUsers

router.post('/', addUser);

router.put('/:id', updateUser);

router.delete('/:id', deleteUser);


export default router;