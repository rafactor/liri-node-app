var func = {
    search(query) {

        console.log('song logic')

        // call spotify api
        require("dotenv").config();
        var keys = require("./keys");
        var Spotify = require('node-spotify-api');
        var spotify = new Spotify(keys.spotify);
      
        //create new variable to hold the API response
        var tracks = [];
        // console.log(spotify)
      
        //API call
        spotify.search({
          type: 'track',
          query: 'let it be'
        }, function (err, data) {
          if (err) {
            return console.log('Error occurred: ' + err);
          }
      
          console.log(data)
          // var url = data.tracks.href;
          // var limit = data.tracks.limit;
          // var next = data.tracks.next;
          // var previous = data.tracks.previous;
          // var total = data.tracks.total;
      
          // var items = data.tracks.items
      
          // console.log(`Found ${total} tracks matching '${name}':`);
          // console.log(`Results from ${previous} to ${limit}':`);
          // console.log(item[0])
      
          // console.log(items[0]);
      
          // items.forEach((index, item) => {
          //   console.log(item)
          //   //track info
          //   let artistName = item.artists.name;
          //   let artists = item.album.artists; //array
          //   let name = item.album.name;
          //   let href = item.album.href;
      
          //   /* not in use
          //   let albumType = item.album.albumType;
          //   let artistType = item.artists.type;
          //   let spotifyLink = item.album.external_urls.spotify;
          //   let id = item.album.id;
          //   let images = item.album.images;
          //   let released = item.album.release_date;
          //   let totalTracks = item.album.totalTracks;
          //   let type = item.album.type;
          //   let uri = item.album.uri;
          //   */
      
          //   let record = [{
          //     'artist': artistName,
          //     'track': name,
          //     'released': released,
          //     'list': artists,
          //     'link':href,
          //   }]
      
          //   tracks.push(record)
          // });
      
          // console.log(tracks)
      
        });
    }
}

module.exports = func;