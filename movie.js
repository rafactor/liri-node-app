var axios = require("axios");

var func = {
    search(query) {
      axios.get(`https://www.omdbapi.com/?t=${query}&apikey=trilogy`)
        .then(function (response) {
          var data = response.data;

            var movie = {
             title : data.Title,
             year : data.Year,
             imdbRating : data.imdbRating,
            //  rottenRating : data.Ratings[1].Value,
             language : data.Language,
             plot : data.Plot,
             actors: data.Actors,
            }

            console.log(`\n ---------- LIRI Bot - Seach for ${query} in movies database:  \n`)
            console.log('- Movie Title: ' + movie.title)
            console.log('- Year: ' + movie.year)
            console.log('- IMDB Rating: ' + movie.imdbRating)
            // console.log('- Rotten Tomatos Rating: ' + movie.rottenRating)
            console.log('- Language: ' + movie.language)
            console.log('- Plot: ' + movie.plot)
            console.log('- Actors: ' + movie.actors)


            console.log(data.Ratings)
        })
        .catch(function (error) {
          console.log(error);
        });

    }
}

module.exports = func;