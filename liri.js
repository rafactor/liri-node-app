var app = require("./concert");


var argv = process.argv

var command = process.argv[2]
var query = process.argv[3]

function concert() {
  app.concert(query)

}

function song() {
  console.log('song logic')

  // call spotify api
  require("dotenv").config();
  var keys = require("./keys");
  var Spotify = require('node-spotify-api');
  var spotify = new Spotify(keys.spotify);

  //create new variable to hold the API response
  var tracks = [];

  //API call
  spotify.search({
    type: 'track',
    query: query
  }, function (err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }

    var url = data.tracks.href;
    var limit = data.tracks.limit;
    var next = data.tracks.next;
    var previous = data.tracks.previous;
    var total = data.tracks.total;

    var items = data.tracks.items

    console.log(`Found ${total} tracks matching '${name}':`);
    console.log(`Results from ${previous} to ${limit}':`);
    console.log(item[0])

    // console.log(items[0]);

    items.forEach((index, item) => {
      // console.log(item)
      //track info
      let artistName = item.artists.name;
      let artists = item.album.artists; //array
      let name = item.album.name;
      let href = item.album.href;

      /* not in use
      let albumType = item.album.albumType;
      let artistType = item.artists.type;
      let spotifyLink = item.album.external_urls.spotify;
      let id = item.album.id;
      let images = item.album.images;
      let released = item.album.release_date;
      let totalTracks = item.album.totalTracks;
      let type = item.album.type;
      let uri = item.album.uri;
      */

      let record = [{
        'artist': artistName,
        'track': name,
        'released': released,
        'list': artists,
        'link':href,
      }]

      tracks.push(record)
    });

    console.log(tracks)

  });

}

function movie() {
  console.log('movie logic')
}

function doWhat() {
  console.log('doWhat logic')
}

switch (command) {
  case 'concert-this':
    concert();
    break;
  case 'spotify-this-song':
    song();
    break;
  case 'movie-this':
    movie();
    break;
  case 'do-what-it-says':
    doWhat();
    break;

  default:
    console.log('Please enter one of the following commands and its complement:');
    console.log("  $ node liri concert-this 'name of the band or artist'");
    console.log("  $ node liri spotify-this-song 'name of the song'");
    console.log("  $ node liri movie-this 'name of the movie'");
    console.log("  $ node liri do-what-it-says 'TDB'");

}
