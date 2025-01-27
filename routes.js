const express = require('express');

const router = express.Router();

const {movies, users} = require('./models');
//const users = require('./models');




router.get('/movies', async(req, res) => {

    const Movies = await movies.findAll();

    res.status(200).json(Movies);
});


router.post('/movies', async(req, res) => {

    const {title, actor, year, genres, director, timestamp} = req.body;

    const newMovies = movies.build({

        'title' : title,
        'actor' : actor,
        'year' : year,
        'genres' : genres,
        'director' : director,
        'timestamp' : new Date()
    });

   try {
       
        await newMovies.save()

      res.status(201).json(newMovies);
    } catch (error) {
        res.json(error)}
});






router.get('/users', async(req, res) => {

    const Users = await users.findAll();

    res.status(200).json(Users);
});


router.post('/users', async(req, res) => {
    const {id_istrue, name, phoneNo, location, DateOfBirth, email,} = req.body;
    const newUsers = users.build({
        'id_istrue' : id_istrue,
        'name'  : name,
        'phoneNo' : phoneNo,
        'location' : location,
        'email' : email,
        'DateOfBirth' : DateOfBirth,
        'is_complete' : true
    });

    try {
       
        await newUsers.save()

      res.status(201).json(newUsers);
    } catch (error) {
        res.json(error)}
});




router.get('/movies/:id', async(req, res) => {
    const Movies = await movies.findOne({
        where: {
            id: req.params.id
        }
    })
    res.status(200).json(Movies);
});


// to update a single data
router.patch('/movies/:id', async(req, res) => {

    const Movies = await movies.findOne({
        where: {
            id: req.params.id
        }
    })
     
    const {year, genres, director} = req.body;
    await Movies.set({
        year: year,
        genres: genres,
        director: director
    });
    await Movies.save();
    res.status(200).json(Movies);
});


// to update all the data 

router.put('/movies/:id', async(req, res) => {

    const Movies = await movies.findOne({
        where: {
            id: req.params.id
        }
    })

    const {title, actor, year, genres, director} = req.body;
    await Movies.set({
        title: title,
        actor: actor,
        year: year,
        genres: genres,
        director: director
    });
    await Movies.save();
    res.status(200).json(Movies);

});




router.delete('/movies/:id', async(req, res) => {

    const Movies = await movies.findOne({
        where: {
            id: req.params.id
        }
    })
    await Movies.delete();
    res.status(204);

});


module.exports = router;