const catchError = require('../utils/catchError');
const Song = require('../models/Song');
const Album = require('../models/Album');
const Genre = require('../models/Genre');
const Artist = require('../models/Artist');

const getAll = catchError(async (req, res) => {
    const results = await Song.findAll({ include: [Album, Artist, Genre] });
    return res.json(results);
});

const create = catchError(async (req, res) => {
    const result = await Song.create(req.body);
    return res.status(201).json(result);
});

const getOne = catchError(async (req, res) => {
    const { id } = req.params;
    const result = await Song.findByPk(id);
    if (!result) return res.sendStatus(404);
    return res.json(result);
});

const remove = catchError(async (req, res) => {
    const { id } = req.params;
    const result = await Song.destroy({ where: { id } });
    if (!result) return res.sendStatus(404);
    return res.sendStatus(204);
});

const update = catchError(async (req, res) => {
    const { id } = req.params;
    const result = await Song.update(
        req.body,
        { where: { id }, returning: true }
    );
    if (result[0] === 0) return res.sendStatus(404);
    return res.json(result[1][0]);
});

const setArtists = catchError(async (req, res) => {
    const {id} = req.params
    //*localisamos el id
    const song = await Song.findByPk(id)
    //! seteamos los artistas a la cancion
    await song.setArtists(req.body)
    //*obtenemos los artistas asignados a la cancion
    const artist = await song.getArtists()
    //?retornamos la vista
    return res.json(artist)
})

const setGenres = catchError(async (req, res) => {
    const { id } = req.params
    //*localisamos el id
    const song = await Song.findByPk(id)
    //! seteamos el genero a la cancion
    await song.setGenres(req.body)
    //*obtenemos el genero asignado a la cancion
    const genres = await song.getGenres()
    //? retornamos la vista 
    return res.json(genres)
})

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update,
    setArtists,
    setGenres
}