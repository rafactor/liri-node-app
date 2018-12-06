var func = {
    concert(query) {

        // console.log('concert')
        var axios = require("axios");
        console.log(query)
        // Run the axios.get function...
        // The axios.get function takes in a URL and returns a promise (just like $.ajax)
        axios.get("https://rest.bandsintown.com/artists/" + query + "/events?app_id=codingbootcamp").then(
          function(response) {
           console.log('part 2')
            var status = response.status
            console.log(status);
            console.log(response.data)
          },
        
          function(error) {
              console.log('part 3')
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
      
      
        // * Date of the Event (usName of the venue
      
        // * Venue e moment to format this as "MM/DD/YYYY")
      }


    }


module.exports = func;