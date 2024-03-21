import { Footballers } from "./footballers.model.js";

export const createFootballer = async (req, res) => {
    try {

        const newFootballerPayload = {
            name: req.body.name,
            age: req.body.age,
            team: req.body.team
        }


        await Footballers.create(newFootballerPayload);     //Footballers imported from model.js

        res.status(200).json({message: "New Footballer added!"})
    }
    catch(err){
        res.status(500).json({message: "Internal Server Error"})
    }
}


export const updateFootballer = async(req,res) => {
    try{

        await Footballers.update(req.body,{
            where:{
                id: req.params.id
            }
        })

        res.status(200).json({message: 'Footballer details updated successfully!'})
    }
    catch(err){
        res.status(500).json({message: 'Internal Server Error'})
    }
}


export const deleteFootballer = async(req,res) => {

    try{

        await Footballers.destroy({
            where: {
                id: req.params.id
            }
        })

        res.status(201).json({message: "Deleted Footballer details successfully!!"})
    }
    catch(err){
        res.status(500).json({message: 'Internal Server Error'})
    }
}


export const getAllFootballers = async (req,res) => {
    try{

        const footballers = await Footballers.findAll()      //Footballers model imported from model.js

        res.json({data: footballers})
    }
    catch(err){
        res.status(500).json({message: "Internal Server Error"})
    }
}


export const getSingleFootballer = async (req,res) => {
    try{

        const footballer = await Footballers.findOne({      //Footballers model imported from model.js
            where: {
                id: req.params.id
            }
        })

        res.json({data: footballer})
    }
    catch(err){
        res.status(500).json({message: "Internal Server Error"})
    }
}


