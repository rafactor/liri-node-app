var fs = require("fs");


var func = {
    search() {
        
        fs.readFile("random.txt", "utf8", function(error, data) {

            // If the code experiences any errors it will log the error to the console.
            if (error) {
              return console.log(error);
            }
          
           var obj = JSON.parse(data)

           var randomFunction = Math.floor(Math.random() * 3)
           var randomValue = Math.floor(Math.random() * obj.functions[randomFunction].alternatives.length)

           var func = obj.functions[randomFunction].name
           var query = obj.functions[randomFunction].alternatives[randomValue]
          
           var response = query

            return query
           
          
          });
        // console.log(obj.functions[1])
    }
}

module.exports = func;