
//pegar usuários
import { db } from "../db.js"; //importando banco 

export const getUsers = (_, res) => {  //requisição e o response
    const q = "SELECT * FROM usuarios";  //pegando todos users do DB

    db.query(q, (err, data) => {  //  tratamento da resposta da query
        if (err) return res.json(err); //erro com o json

        return res.status(200).json(data) // OK 
    });
};

//add usuário

export const addUser = (req, res) => { //receber por parametro request e response
    const q =
        " INSERT INTO usuarios (`nome`, `email`,`fone`,`data_nascimento`) VALUES(?)"; //valores vão substituir (?) e vai seguir uma ordem de inserção
    const values = [
        req.body.nome,
        req.body.email,
        req.body.fone,
        req.body.data_nascimento,
    ];

    db.query(q, [values], (err) => {
        if (err) return res.json(err); //retornar o erro

        return res.status(200).json('Usuário criado com sucesso!') //status 200 sucess
    });
};

export const updateUser = (req, res) => {
    const q =
        "UPDATE usuarios SET `nome`= ?, `email` =?, `fone`= ?,`data_nascimento` = ? WHERE`id` = ? "

    const values = [
        req.body.nome,
        req.body.email,
        req.body.fone,
        req.body.data_nascimento,
    ];
    db.query(q, [...values, req.params.id], (err) => {
        if (err) return res.json(err); //retornar o erro

        return res.status(200).json('Usuário atualizado com sucesso!') //status 200 sucess

    });

};

export const deleteUser = (req, res) => { //receber por parametro request e response
    const q =
        " DELETE FROM usuarios WHERE `id` = ? "; //valores vão substituir (?) e vai seguir uma ordem de inserção


    db.query(q, [req.params.id], (err) => {
        if (err) return res.json(err); //retornar o erro

        return res.status(200).json('Usuário deletado com sucesso!') //status 200 sucess
    });
};

