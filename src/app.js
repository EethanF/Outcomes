// console.log(process.argv[0]); logs array of node loc and app.js loc can add to array ""
//oop is object oriented processes

// const Movie = require("./utils"); //automatically aims for index.js because of its name

// const app = (args) => { //switch statements are easier to right but only check for a quality
//     if (args[2] == "add" && args[5] == "add"){
//         const movie = new Movie(args[3], args[4])
//         const movieTwo = new Movie(args[6], args[7])
//         movie.addMovie()
//         console.log(movieTwo.addMovie())
//     }else if (args[2] == "add") {
//         const movie = new Movie(args[3], args[4])
//         return console.log(movie.addMovie()); //will = the conext of movie array
//         // take user inputted movie, add to an array and console.log that array
//     }else{
//         console.log("input is incorrect");
//     }
// };

// app(process.argv); //gotta run function to display in console 

const Movie = require("./utils");

const app = (args) => {
  switch (args[2]) {
    case "add":
      const movie = new Movie(args[3], args[4]);
      movie.addMovie();
      const movieTwo = new Movie(args[5], args[6]);
      console.log(movieTwo.addMovie());
      // take user inputted movie, add to an array and console.log that array
      break;
    default:
      console.log("Incorrect input");
      break;
  }
};
//can make anoher case with "add multi"

app(process.argv);
