var fs = require("fs")

var log = {
    command(line){
        // fs.writeFile("log.txt",line(command, query),function(err){
            fs.appendFile("log.txt",line,function(err){
            if (err) {
                return console.log(err);
              }
        })
    }
}

module.exports = log;