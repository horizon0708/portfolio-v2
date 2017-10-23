var fs = require('fs');
var fm = require('front-matter');
var path = require('path');
var async = require('async');
var projectsPath = '../data/projects';

fs.readdir(projectsPath, function(err, fileNames){
    if (err) throw err;

    var output = '[';
    async.eachOf(fileNames, function(file,index,callback){
        var filePath = path.join(projectsPath, file.toString());
        fs.readFile(filePath, 'utf8', function(err,data){
            if (err) throw err;
            var content = JSON.stringify(fm(data));
            output += content;
            if(index < fileNames.length -1){
                output += ','
            }
            callback();
        });
    }, function(err){
        if(err) console.log(err);
        output += ']';
        fs.writeFile('test.json', output,  function(err) {
            if (err) {
                return console.error(err);
            }
            console.log("Data written successfully!");
        });
    });
});


