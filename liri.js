var axios = require("axios");

var concert = require("./concert");
var song = require("./songs");
var movie = require("./movie");
var what = require("./what");

var argv = process.argv

var command = process.argv[2]
var query = process.argv[3]

switch (command) {
  case 'concert-this':
    concert.search(query);
    break;

  case 'c':
    concert.search(query);
    break;

  case 'spotify-this-song':
    song.search(query);
    break;

  case 's':
    song.search(query);
    break;

  case 'movie-this':
    movie.search(query);
    break;

  case 'm':
    movie.search(query);
    break;

  case 'do-what-it-says':
    what.search(query);
    break;

  case 'd':
    what.search(query);
    break;

  default:
    console.log('Please enter one of the following commands and its complement:');
    console.log("  $ node liri concert-this 'name of the band or artist'");
    console.log("  $ node liri spotify-this-song 'name of the song'");
    console.log("  $ node liri movie-this 'name of the movie'");
    console.log("  $ node liri do-what-it-says 'TDB'");

}
