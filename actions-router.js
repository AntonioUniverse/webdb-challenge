const express = require('express')


const router = require('express').Router();

const Action = require('./action-model');
router.use(express.json())


router.get('/', (req, res) => {
    Action.find()
      .then(actions => {
        res.status(200).json(actions);
      })
      .catch(error => {
        res
          .status(500)
          .json({ message: 'We ran into an error retrieving the actions' });
      });
  });

router.post('/', (req, res) =>{
    const actions = req.body
    Action.add(actions)
    .then( action =>{
        console.log(action)
        res.status(200).json(action)
    }).catch( error =>{
        res.status(500).json({message : "unable to add action", error})
    })
})

// router.get('/:id', (req, res) => {
//     const projectid = req.params.id
//   Project.findById(projectid)
//     .then(Project => {
//       res.status(200).json(project);
//     })
//     .catch(error => {
//       res
//         .status(500)
//         .json({ message: 'We ran into an error retrieving the tracks' });
//     });
// });

module.exports = router