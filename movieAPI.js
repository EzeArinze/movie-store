class Movie {
  constructor(title, available = true) {
    this.title = title;
    this.available = available;
  }

  rentMovie() {
    if (this.available) {
      this.available = false;
      console.log(`Successfully rented ${this.title}`);
      return true;
    } else {
      console.log(`${this.title} is not available for rent`);
      return false;
    }
  }

  returnMovie() {
    this.available = true;
    console.log(`Returned ${this.title}`);
  }
}

class RentalStore {
  constructor() {
    this.movies = [];
  }

  addMovie(movie) {
    this.movies.push(movie);
  }

  findMovie(title) {
    return this.movies.find((movie) => movie.title === title);
  }
}

// Example usage:
let rentalStore = new RentalStore();

// Adding movies to the rental store
rentalStore.addMovie(new Movie("Usuofia in london"));
rentalStore.addMovie(new Movie("Tom & Jerry"));
console.log(rentalStore);

// Renting movies
let movie1 = rentalStore.findMovie("Usuofia in london");
let movie2 = rentalStore.findMovie("Tom & Jerry");

console.log(movie1.rentMovie()); // Rent Inception
console.log(movie2.rentMovie()); // Rent The Shawshank Redemption

// Returning movies
movie1.returnMovie(); // Return Inception
movie2.returnMovie(); // Return The Shawshank Redemption
