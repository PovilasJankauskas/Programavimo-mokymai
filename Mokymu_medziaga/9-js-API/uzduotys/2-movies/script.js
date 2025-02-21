async function fetchMovie(params) {
    const url = `https://api.tvmaze.com/search/shows?q=${params}`
    const response = await fetch(url);

    return await response.json();
    /* kitas galimas variantas 
    
    const data = await response.json();
    const movie = data[0];
    
    document.getElementById('movie').innerHTML = `
    <img src='${movie.show.image.medium}>
    <h2>${movie.show.name} (${movie.show.premiered})</h2>
    <a 
    target='_blank'
    href='https://www.imdb.com/title/${movie.show.externals.imdb}/'>
    link to IMDB </a>
    
    <p>Genres: ${movie.show.genres}</p>
    <p>${movie.show.summary}</p>
    `;*/
}

/* pirmos uzduoties dalis fetchMovie()
.then(data => {
    const moviesContainer = document.createElement('div');
    moviesContainer.className = 'movies-container';

    for (let movie of data) {
        const movieDiv = document.createElement('div');
        movieDiv.className = 'movie';

        movieDiv.innerHTML = `
        <img src='${movie.show.image.medium}'>
        <h3>${movie.show.name}</h3>
        <p> genres: ${movie.show.genres.join (',')}</p>
        <p> ${movie.show.summary} </p>
`;
moviesContainer.appendChild(movieDiv);
    }
    document.body.appendChild(moviesContainer);
}); */

/* search dalis console.log('-----2 Antra uzduotis----------'); */

function onSearchClick() {
    let inputValue = document.getElementById('searchInput').value;

    if (inputValue) {
        fetchMovie(inputValue)
            .then(data => {
                const moviesContainer = document.getElementById('movie-list');
                moviesContainer.innerHTML ='';
                moviesContainer.className = 'movies-container';

                for (let movie of data) {
                    const movieDiv = document.createElement('div');
                    movieDiv.className = 'movie';

                    movieDiv.innerHTML = `
        <img src='${movie.show.image.medium}'>
        <h3>${movie.show.name}</h3>
        <p> genres: ${movie.show.genres.join(',')}</p>
        <p> ${movie.show.summary} </p>
`;
                    moviesContainer.appendChild(movieDiv);
                }
            });
    }
}