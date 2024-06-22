const express = require('express');
const routerGenre = require('./genre.roter');
const routerArtist = require('./artist.router');
const routerAlbum = require('./album.router');
const routerSong = require('./song.router');
const router = express.Router();

// colocar las rutas aquí

//? GENRES
router.use('/genres', routerGenre)

//? ARTISTS
router.use('/artists', routerArtist)

//? ALBUMS
router.use('/albums', routerAlbum)

//? SONGS
router.use('/songs', routerSong)


module.exports = router;