import movieModel from '../models/movies.js';

export function DisplayMovieList(req, res, next){
    movieModel.find(function(err, moviesCollection){
        if(err){
            console.log(err);
            res.end(err);
        }
        res.render('index', {title: 'Movie List', page: 'movies/list', movies: moviesCollection})
    })
}