const movieURL = 'https://jsonfakery.com/movies/random/12';

fetch(movieURL)
    .then(resp => resp.json())
    .then(data => {
        const movieList = document.getElementById('movieList');
        movieList.innerHTML = '';
        let movieTemplate = '';

        data.forEach(movie => {
            movieTemplate += `
                        <div class="col-md-4 col-sm-6 col-xl-3 mb-4">
                            <div class="card h-100 shadow-lg">
                                <img src="${movie.poster || 'https://via.placeholder.com/250x350?text=No+Image'}" 
                                     class="card-img-top" 
                                     alt="${movie.title || 'No Title'}" 
                                     style="height: 250px; object-fit: cover;">
                                <div class="card-body bg-secondary text-white">
                                    <h5 class="card-title">${movie.title || 'Untitled'}</h5>
                                    <p class="card-text">Year: ${movie.year || 'N/A'}</p>
                                    <button class="btn btn-danger"
                                        data-title="${movie.title || ''}"
                                        data-poster="${movie.poster || ''}"
                                        data-year="${movie.year || ''}"
                                        onclick="createModal(this.dataset.title, this.dataset.poster, this.dataset.year)">
                                        View
                                    </button>
                                </div>
                            </div>
                        </div>`;
        });

        movieList.innerHTML = movieTemplate;
    })
    .catch(error => {
        console.error('Error fetching movies:', error);
        document.getElementById('movieList').innerHTML =
            `<p class="text-danger">Failed to load movies.</p>`;
    });