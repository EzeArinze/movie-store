# movie-store

## Movie Class:

The Movie class represents individual movies that can be rented and returned. Each movie has a title and availability status.

## Methods:

constructor(title, available = true):
Initializes a new movie with the given title and availability status. By default, a movie is available when created.

rentMovie():
Allows a movie to be rented if it's available. Updates the availability status accordingly.

returnMovie():
Updates the availability status of a movie when it's returned.

## RentalStore Class:

The RentalStore class manages a collection of movies and methods to add movies to the store and find movies by their titles.

## Methods:

addMovie(movie):
Adds a movie to the rental store's inventory.

findMovie(title):
Finds a movie in the store by its title and returns it.
