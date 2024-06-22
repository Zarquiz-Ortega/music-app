const Album = require("./Album");
const Artist = require("./Artist");
const Genre = require("./Genre");
const Song = require("./Song");

//TODOS RELACIONES DE UNO A MUCHOS (N-M)
//! album -> artist
Album.belongsTo(Artist) //un album pertene a un artista (artistId)
Artist.hasMany(Album) // un artista puede tener muchso albunes
//! song -> album 
Song.belongsTo(Album) //una cancion pertenese a un album (albumId)
Album.hasMany(Song) // un album puede tener muchas canciones


//TODOS RELACIONES DE MUCHOS A MUCHOS (M-M)
//! un genero pertenese a muchos artistas asi como un 
Genre.belongsToMany(Artist, {through: 'genreArtist'})
//! artista pertenece a muchos generos
Artist.belongsToMany(Genre, {through: 'genreArtist'})
//! una cancion pude pertenecer a muchos artistas asi como un artista pude tener varias canciones
Song.belongsToMany(Artist, {through: 'songArtist'})
Artist.belongsToMany(Song, {through: 'songArtist'})
//! una cancion pertenece a muchso generos asi como un genero pertenece a muchas canciones
Song.belongsToMany(Genre,{through: 'songGenre'})
Genre.belongsToMany(Song,{through: 'songGenre'})
