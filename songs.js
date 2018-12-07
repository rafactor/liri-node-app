var func = {
    search(query) {

        // call spotify api
        require("dotenv").config();
        var keys = require("./keys");
        var Spotify = require('node-spotify-api');
        var spotify = new Spotify(keys.spotify);

        //create new variable to hold the API response
        var tracks = [];

        if (query === '') {
            query = "The Sign Ace of Base"
    
        }

        //API call
        spotify.search({
            type: 'track',
            query: query
        }, function (err, data) {
            if (err) {
                console.log(`No record found using "${query}" as search parameter. Please change your keywords `)
                return //console.log('Error occurred: ' + err);

            }

            var url = data.tracks.href;
            var limit = data.tracks.limit;
            var next = data.tracks.next;
            var previous = (data.tracks.previous === null) ? 0 : data.tracks.previous;
            var total = data.tracks.total;

            var item = data.tracks.items

            console.log(`\n ---------- LIRI Bot - Search for song with '${query}' events, found ${total} results: \n`)
            console.log(`Results from ${previous} to ${limit}': \n`);

            for (let i = 0; i < limit; i++) {

                let artist = item[i].artists[0].name;
                let album = item[i].album.name;
                let released = item[i].album.release_date;
                let spotifyLink = item[i].album.external_urls.spotify;
                let trackName = item[i].name


                let record = {

                    'resultNo': (i + 1 < 10) ? '0' + (i + 1) : (i + 1),
                    'artist': artist,
                    'album': album,
                    'released': released,
                    //   'list': artists,
                    'link': spotifyLink,
                    'track': trackName
                }

                tracks.push(record)

                console.log('#' + tracks[i].resultNo + ': ' + tracks[i].track + ' from: ' + tracks[i].artist + ' | album: ' + tracks[i].album + ' on ' + tracks[i].released + '\n     link: ' + tracks[i].link + '\n')
            };
                console.log('\n --- end --- \n')
        });
    }
}

module.exports = func;