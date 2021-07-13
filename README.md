
# Movie List

## Getting Started

1. Fork and clone this repo, then open two terminal tabs and navigate to the root directory.

2. In one of the two seperate terminal tabs run the following script:
  ```
  npm start
  ```

3. In the second terminal tab run:
  ```
  npm run react-dev
  ```

4. Open localhost:3000 in the browser and you should see **Hello World!** if React is running correctly.

Now you can get started building the application by visiting gLearn and following the next instructions there.


================Desc =============

Exercise: Movie List
For this Exercise, you will set out to further explore React and master React fundamentals as you create a movie list app! The levels get increasingly difficult and some refactoring may be necessary. Wireframes accompany each level to give you a better idea of what that level should include.

What is Movie List?
Movie List is a prompt for a front end application. The purpose is to give you an additional exercise in working with React so that you may:

Better understand your current comprehension level with React
Determine what areas you need additional training/learning with React concepts and functionality
Increase your comfort level with the front-end portion of a full-stack application
Movie List is neither a test nor an assessment. It will not be reviewed by the staff to assess your performance (unless you book an office hour or we reach out to you!) and is solely intended for you to get more practice and identify areas of improvement for yourself.

How should I approach completing this exercise?
In this exercise we provided some boiler-plate code with a basic environnment to help you jump in to practice with React. To use the provided environment, set it up with the following steps:

Fork and clone this repo, then open two terminal tabs and navigate to the root directory.

In one of the two seperate terminal tabs run the following script: npm start

In the second terminal tab run: npm run react-dev

Open localhost:3000 in the browser and you should see Hello World! if React is running correctly.

Once you've set up your dev environment, work through each level to MVP (minimum viable product) before moving to the next level.

While you're working through each level, try to only use official documentation. Try to not use Stack Overflow, your own notes, past sprint code, or any other external resources. This will help you develop familiarity with the docs as well as get you acclimated to a real test-like environment. See below for a list of suggested resources!

If you do need to reference past code/Stack Overflow, write down what topics you needed extra help on. Then, go find these topics in the official documentation.

Level 0
 Display a list of movies from hardcoded data.
level 0

You can use the following data:

var movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];
Level 1
 Add a search bar so that a user may see if a movie is in the list.
 After a user submits the search, display all matches (or partial matches) to that title.
 Bonus: Handle the case of "no movie by that name found" gracefully.
level 1

Level 2
 Add an input field for users to add movies.
 Display only user added movies, not the hardcoded data.
level 2

Level 3
 Add a button to each list item that allows the user to toggle a 'watched' property.
 Add two buttons to allow the users to toggle between a list of 'watched' movies and movies 'to watch'.
level 3

Level 4
 Add a panel of movie information that appears when the title is clicked (consider starting with hardcoded information)
 Refactor the watch toggle to be part of the movie information panel
 Get movie information from the The Movie Database API (https://www.themoviedb.org/documentation/api)
level 4_image 1 level 4_image 2

You've reached the end of the front end levels! If you don't want to start servers yet, but want to add more to your front end, here are some bonus ideas:

Other ideas (not pictured)
 Think about when it makes sense to request this information from the api - when the user clicks on the title? When the movie gets added? Refactor your code as necessary.
 Add a way for the user to add their own rating
 Add a sorting mechanism so the user can sort on rating or other properties
 Refactor search to allow users to search for movies with a specific director or actor/actress
Level 5 (Server & Database)
 In your request handler, when a GET request is made to /api/movies, respond with a list of movies (just start with some made up list)
 Confirm, using postman, that your route works as expected and responds to all other requests with "Hello World"
 Refactor your front end to get the list of movie titles from the server, instead of using a hardcoded list of movie titles
 Persist that list of information on the server using a database (MySQL or MongoDB)