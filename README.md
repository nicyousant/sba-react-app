SBA 320H - React Web Application Project

Requirements: 

Your application must meet these requirements to pass (this is your Minimum Viable Product):

- Built with HTML, CSS, JavaScript, and REACT.
- Hosted on Netlify.
- Frequent commits to GitHub.
- A README.md file in your GitHub repository with:

    - Explanations of the technologies used.
        - useEffect fetches exercises from the API (Chest, Back, Arms). Data is stored in useState(exercises).
        - setIndex updates the current exercise. React re-renders ExerciseDisplay with the new exercise.
        - setShowMore toggles instructions. React re-renders only the instructions section.
        - When user clicks "Save to Favorites", useContext calls addFavorite(workout) from FavoritesContext. Favorites list is updated globally, so any page can see the change.
        - useEffect in FavoritesContext can load saved favorites from localStorage. Favorites list is restored automatically across all pages.
    - Explanations of the approach taken.
        - Wrapped the app with FavoritesProvider to share favorites information across components. 
        - Wrapped the app in BrowserRouter inside of the main.jsx file. This allows me to make routes for various pages such as Back Exercises and Chest Exercises. 
    - A link to your live site.
    - Usage instructions, if relevant.
        - Use the Navigation bar at the top to click on the body part for which you'd like to see exercises. 
        - Click on the "Save to Favorites" button to add an exercise to the Favorites page.
        - Click on the "Saved" button to remove an exercise from the Favorites page. 
    - Unsolved problems.
        - I had a lot of repetitive code. I realize now that my React components probably could have been generated dynamically using parameters.

- Use AJAX to make a request to an external data source like OMDBapi, and insert some of the data retrieved into the DOM.
    - Using useEffect and fetch for API requests.


Bonus Features

- Have one or more complex user interface modules such as a carousel, drag and drop, a sticky nav, tooltips, etc.
    - The exercises appear in a carousel with previous and next buttons.
- Look into localstorage so you can save data to the user's browser.
    - The Favorites persist in local storage after the page refreshes. 

