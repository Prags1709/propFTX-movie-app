const express =  require('express');
const {MovieModel} = require("../model/movie-data-mode");
const movieRouter = express.Router();

movieRouter.get("/", async (req, res)=>{
    try {
        let data = await MovieModel.find();
        res.send(data)
    } catch (error) {
        console.log(error);
        res.status(500).send({message:`INTERNAL_SERVER ${error}`})
    }
})

//Search end pint
movieRouter.get("/:search", async (req, res)=>{
    const searchQuery = req.params.search;
    try {
        const data = await MovieModel.find({$text: {$search: searchQuery}});
        res.send(data)
    } catch (error) {
        console.log(error);
        res.status(500).send({message:`INTERNAL_SERVER ${error}`})
    }
})

movieRouter.post("/add",async (req, res)=>{
    const payload = req.body
    try {
        let data = new MovieModel(payload);
        await data.save();
        res.status(201).send("Movie data has been added")
    } catch (error) {
        console.log(error);
        res.status(500).send({message:`INTERNAL_SERVER ${error}`})
    }
})

movieRouter.patch("/update/:id", async (req, res)=>{
    const id=req.params.id;
    const payload = req.body;
    const data = await MovieModel.findById({_id:id});
    try {
        if(!data){
            res.send("Data not found")
        }else{
            await MovieModel.findByIdAndUpdate({_id: id}, payload);
            res.send(`Movie data has been updated`)
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({message:`INTERNAL_SERVER ${error}`})
    }
})

movieRouter.delete("/delete/:id", async (req, res)=>{
    const id=req.params.id;
    const data = await MovieModel.findById({_id:id});
    try {
       await MovieModel.findByIdAndDelete({_id:id})
       res.send(`${data.title} data has been deleted`)
    } catch (error) {
        console.log(error);
        res.status(500).send({message:`INTERNAL_SERVER ${error}`})
    }
})

module.exports = { movieRouter }