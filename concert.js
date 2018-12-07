var func = {
  search(query) {

    var moment = require('moment');
    
        // console.log('concert')
        var axios = require("axios");
        // Run the axios.get function...
        // The axios.get function takes in a URL and returns a promise (just like $.ajax)
        axios.get("https://rest.bandsintown.com/artists/" + query + "/events?app_id=codingbootcamp").then(
          function(response) {
            var data = response.data
            // var events = []
             var number = response.data.length

            console.log(`\n ---------- LIRI Bot - Search for '${query}' events, found ${number} results: \n`)
            data.forEach((item) => {
              var venue = item.venue.name
              var country = item.venue.country
              var city = item.venue.city
              var region = item.venue.region
              var datetime = new Date(item.datetime + 'z')

              var options = {
                year: '2-digit', month: '2-digit', day: '2-digit'
              }
              var date = new Intl.DateTimeFormat('en-US', options).format(datetime)

              // console.log(date)
              console.log(date + ' | ' + city + ', ' + region + ' ' + country + ' at ' + venue)

            });
            
          
          },
        
          function(error) {
            
            if (error.response) {
              // The request was made and the server responded with a status code
              // that falls out of the range of 2xx
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
            } else if (error.request.agent) {
              // The request was made but no response was received
              // `error.request` is an object that comes back with details pertaining to the error that occurred.
              console.log(error.request);
            } else {
              // Something happened in setting up the request that triggered an Error
              console.log("Error", error.message);
            }
            console.log(error.config);
          }
        );
      // 
      
        // * Date of the Event (usName of the venue
      
        // * Venue e moment to format this as "MM/DD/YYYY")
      }


    }


module.exports = func;