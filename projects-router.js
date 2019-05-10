const express = require('express')

const db = require('./dbconfig')
const router = require('express').Router();
router.use(express.json())

const Project = require('./project-model');


router.get('/', (req, res) => {
    Project.find()
      .then(project => {
        res.status(200).json(project);
      })
      .catch(error => {
        res
          .status(500)
          .json({ message: 'We ran into an error retrieving the tracks',error });
      });

    
  });

router.post('/', (req, res) =>{
    const project = req.body
    Project.add(project)
    .then( project =>{
        res.status(200).json(project)
    }).catch( error =>{
        res.status(500).json({message : "unable to add project", error })
    })
})


router.get('/:id',  async (req, res) =>{
  try{

  const project = await db('projects')
  .where({id: req.params.id})
  .first()

  const action = await db('actions')
  .where({projects_id: req.params.id})

  res.status(200).json({project, action})
  }catch (error){

    res.status(500).json({message:"nope",error})
  }

  

})

module.exports = router