    require("dotenv").config();

// ============================================

    var keys = require("./keys.js");

    var Spotify = require('node-spotify-api');
    var omdb = require("omdb");
    // Make sure to run 'npm i request' in this folder first
    var request = require("request");
    // Could not get Twitter to work
 // var Twitter = require('');
 
    var songName = process.argv[3];
    var movieName = process.argv[3];

//  var client = new Twitter(keys.twitter);
    var spotify = new Spotify(keys.spotify);

    // ===========
     
    spotify.search({ type: 'track', query: songName }, function(err, data) {
      if (err) {
        return console.log('Error occurred: ' + err);
      }
      console.log(JSON.stringify(data.tracks.items[0].album.artists[0].name, null, 5));
      console.log(JSON.stringify(data.tracks.items[0].name, null, 5));
      console.log(JSON.stringify(data.tracks.items[0].preview_url, null, 5));
      console.log(JSON.stringify(data.tracks.items[0].album.artists[0].name, null, 5));
      // console.log(JSON.stringify(data, null, 5))
    });





    // =============




    
  //   omdb.search('Title', function(err, movies) {
  //     if (err) {
  //         return console.error(err);
  //     }
   
  //     if (movies.length < 1) {
  //         return console.log('No movies were found!');
  //     }
   
  //     movies.forEach(function(movie) {
  //         console.log('%s (%d)', movie.title, movie.year);
  //     });
  // });
   
    omdb.get({ title: movieName }, true, function(err, movie) {
      if (err) {
          return console.error(err);
      }
      if (!movie) {
          return console.log('Movie not found!');
      }
        console.log(movie.title);
        console.log(movie.year);
        console.log(movie.imdb.rating);
        console.log(movie.plot);
        console.log(movie.country);
        console.log(movie.actors);
    });

    // =============

// Then run a request to the OMDB API with the movie specified
    request("http://www.omdbapi.com/?t=" + movieName + "&apikey=trilogy", function(error, response, body) {
    
    if (!error && response.statusCode === 200) {

// Parse the body of the site and recover just the imdbRating
// (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
    console.log("The movie's rating is: " + JSON.parse(body).imdbRating + "/10");
    console.log(JSON.parse(body));
    };

    // ================

    if (parse.argv[2] === 'spotify-this') {
        function() //spotify function??
    } else {
        omdb() // function???
    };