var axios = require("axios");

var func = {
    search(query) {
      axios.get(`https://www.omdbapi.com/?t=${query}&apikey=trilogy`)
        .then(function (response) {
          var data = response.data;

          var ratings = data.Ratings
          var rottenRating = 0

          ratings.forEach(item => {
              if(item.Source === 'Rotten Tomatoes') {
                rottenRating = item.Value ;
                console.log(rottenRating)
              }
          });
            var movie = {
             title : data.Title,
             year : data.Year,
             imdbRating : data.imdbRating,
             rottenRating : rottenRating,
             language : data.Language,
             plot : data.Plot,
             actors: data.Actors,
            }

            console.log(`\n ---------- LIRI Bot - Seach for ${query} in movies database:  \n`)
            console.log('- Movie Title: ' + movie.title)
            console.log('- Year: ' + movie.year)
            console.log('- IMDB Rating: ' + movie.imdbRating)
            console.log('- Rotten Tomatos Rating: ' + rottenRating)
            console.log('- Language: ' + movie.language)
            console.log('- Plot: ' + movie.plot)
            console.log('- Actors: ' + movie.actors)


            // console.log(data)
        })
        .catch(function (error) {
          console.log(error);
        });

    }
}

module.exports = func;