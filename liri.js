var concert = require("./concert");
var song = require("./songs");
var movie = require("./movie");
var what = require("./what");
var log = require("./log");

var moment = require("moment")
var time  = moment().format()

var argv = process.argv

var command = argv[2]
var query = argv[3]

var selector = {
  switch(command, query) {

    var line = "\n"+'log ' + time + ' --command: ' + command + ' --query: ' + query
    log.command(line);

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
        what.search();
        break;

      case 'w':
      //passing the function as an argument, so that it can be acessible in what.js
        what.search(selector.switch);
        break;

      default:

        console.log('Please enter one of the following commands and its complement:');
        console.log("  $ node liri concert-this 'name of the band or artist'");
        console.log("  $ node liri spotify-this-song 'name of the song'");
        console.log("  $ node liri movie-this 'name of the movie'");
        console.log("  $ node liri do-what-it-says 'TDB'");

    }
  }
}


module.exports = selector;

selector.switch(command, query);

