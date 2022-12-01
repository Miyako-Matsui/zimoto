import request from 'superagent'

export function fetchAllMovies() {
    return request.get('/api/v1/movies')
        .then((response) => {
            return response.body
        })
}

export function postAMovie(movie) {
    return request.post('/api/v1/movies')
        .send(movie)
        .then((response) => {
            const wholeMovie = response.body
            return wholeMovie
        })
}