const Post = require("../models/model")

const Create = async (req, res) => {
    const dados = { titulo, corpo, autor } = req.body  
    if (!titulo || !corpo || !autor) {
        return res.status(400).json({message: "Preencha todos campos!"})
    }
    try {
        const response = await Post.create(dados)
        res.status(201).json({message: "Post criado com sucesso!", response})
    } catch (error) {
        console.log(`Erro: ${error}`)
    }
}

const Read = async (req, res) => {
    try {
        const response = await Post.find()
        res.status(200).json({response})
    } catch (error) {
        console.log(`Erro: ${error}`)
    }
}

const ReadOne = async (req, res) => {
    const id = req.params.id
    if(!id){
        return res.status(400).json({message: "Informe um id!"})
    }
    try {
        const response = await Post.findById(id)
        if (!response) {
            return res.status(400).json({message: "Post não encontrado!"})
        }
        res.status(200).json({response})
    } catch (error) {
        console.log(`Erro: ${error}`)
    }
}

const Update = async (req, res) => {
    const dados = { titulo, corpo, autor } = req.body  
    if (!titulo || !corpo || !autor) {
        return res.status(400).json({message: "Preencha todos campos!"})
    }
    const id = req.params.id
    if(!id){
        return res.status(400).json({message: "Informe um id!"})
    }
    try {
        const response = await Post.findByIdAndUpdate(id, dados)
        if (!response) {
            return res.status(400).json({message: "Post não encontrado!"})
        }
        res.status(201).json({message: "Post atualizado com sucesso!", response})
    } catch (error) {
        console.log(`Erro: ${error}`)
    }
}

const Delete = async (req, res) => {
    const id = req.params.id
    if(!id){
        return res.status(400).json({message: "Informe um id!"})
    }
    try {
        const response = await Post.findByIdAndDelete(id)
        if (!response) {
            return res.status(400).json({message: "Post não encontrado"})
        }
        res.status(201).json({message: "Post excluído com sucesso!", response})
    } catch (error) {
        console.log(`Erro: ${error}`)
    }
}

module.exports = { Create, Read, ReadOne, Update, Delete }