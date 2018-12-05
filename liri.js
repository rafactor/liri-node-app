require("dotenv").config();
var keys = require("./keys");
var Spotify = require('node-spotify-api');
// var axios = require("axios");


var spotify = new Spotify(keys.spotify);
var name = 'Let it be'
var tracks = [];

spotify.search({ type: 'track', query: name }, function (err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }

  var url = data.tracks.href;
  var limit = data.tracks.limit;
  var next = data.tracks.next;
  var previous = data.tracks.previous;
  var total = data.tracks.total;

  var items = data.tracks.items


  //console.log(data);
  console.log(`Found ${total} tracks matching '${name}':`);
  console.log(`Results from ${previous} to ${limit}':`);
  console.log(item[0])

  // console.log(items[0]);

  items.forEach(item => {
    // console.log(item)
    //track info
    let albumType = item.album.albumType;
    let artists = item.album.artists; //array
    let spotifyLink = item.album.external_urls.spotify;
    let href = item.album.href;
    let id = item.album.id;
    let images = item.album.images;
    let name = item.album.name;
    let released = item.album.release_date;
    let totalTracks = item.album.totalTracks;
    let type = item.album.type;
    let uri = item.album.uri;

    //artist info
    let artistName = item.artists.name;
    let artistType = item.artists.type;

    let record = [{
      // 'number': index,
      'track': name,
      'released': released,
      'type': type,
      'artist': artistName,
      'artist type': artistType,
      'list': artists
    }]

    tracks.push(record)
  });

  console.log(tracks)
  
});
// * `concert-this`

// * `spotify-this-song`

// * `movie-this`

// * `do-what-it-says`