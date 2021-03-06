# The Board Game Compendium
If you and your friends are avid board game collectors like me, you'll know it's difficult to keep track of everything in your collection! The Board Game Compendium allows users to peruse through the vast library of almost every board game ever created and keep track of their collection on an easy-to-use app.

![board games page no favorites](./src/pics/boardgames-page-empty.png)

## Getting Started:
Visitors and users can find The Board Game Compendium by clicking the link [here](http://the-board-game-compendium.herokuapp.com/).

### 1. Login / Sign Up
Visitors will automatically be redirected to the Login Page where they can log in or sign up for an account. Signing up for an account requires the user to input a desired user name, email address, password, bio, and profile pic but upon returning, the user is only required to enter their email address and password to login.

Currently there is a bug that prevents the user to login if they have games saved in their favorites so I plan to resolve this issue as soon as possible.

![login](./src/pics/login.png)

![signup](./src/pics/signup.png)

### 2. Home Page (Board Games!)
After logging in or signing up, users will be redirected to the Home Page which shows a long list of the board game cards. Clicking the grey star button at the bottom of a board game card will add that game to the user's favorites. Once clicked, the button will change colors. Clicking the button again will remove the game from the user's favorites. A user can view all their favorite games from their Profile Page.

![board games page with favorites](./src/pics/boardgames-page.png)

### 3. Detailed Game Page
Alternatively, a user can view game details by clicking on a board game's title or image. The user will then redirected to the board game's Game Page, the user can read information regarding the board game:
- Players
- Average play time
- Recommended minimum age
- Publishers of the game
- Release year
- Average user rating
- A description of the setting the players can expect

![game page](./src/pics/game-page.png)

### 4. User Profile Page
Users can view their Profile Page by clicking on their username or profile picture in the top-left corner of the app. Here, the user can view all the cards of the games they've added to their favorites. They can also view a larger photo of their profile picture and their user bio. Users can remove board games from their favorites by clicking the star button at the bottom of the card.

![profile page](./src/pics/profile-page.png)

### 5. The Page Header
Once logging in, users can use the Header component to navigate to important features of the app:
- The User Profile (top-left corner)
- All board games (home icon, top-right corner)
- Logout (top-right corner)

![header](./src/header/signup.png)

### The Board Game Atlas
This app is made possible by consuming the third party API, [Board Game Atlas](https://www.boardgameatlas.com/api/docs). 

![signup](./src/pics/signup.png)

## Technologies Used:
- MongoDB Atlas
- Express
- React
- Node
- Javascript
- CSS
- Heroku
- The Board Game Atlas

## What's Next?
This app is still under development and hopefully I'll be able to include several features soon!
- Currently there is a bug that prevents the user to login if they have games saved in their favorites so I plan to resolve this issue as soon as possible.
- If a user is reading a game from its details page, I plan to add an 'Add to Favorites' button on that page too for the user's convenience.
- This app will soon maximize Board Game Atlas' vast library of data by allowing the user to filter cards on the board games page or on profile pages by the categories found in the header. Afterward, I plan to implement a search bar so users can view cards of games with matching inputs. Board Game Atlas has many more categories and for the sake of simplifying the user experience, I only included the most encompassing and popular genres.
- I plan to add a friends list feature to this app where...
    1. Users can add other users to their friends lists,
    2. Users can view other users' favorite board games, and
    3. Users can schedule events to meet with other users and play specific games from one of their favorites.

You can view my progress on my public [Trello Board](https://trello.com/b/OGZnZ3Ga/the-board-game-compendium)

### Note from the developer:
Though I'd like to focus on front-end development, utilizing my newly acquired skills from General Assembly is such a gratifying experience. Developing a full stack application in a week was challenging, but I couldn't have been more satisfied with my growth. If you'd like to connect with me to talk about this app, Software Development in general, or any and all board games, please feel free to reach out to me on GitHub or [LinkedIn](https://www.linkedin.com/in/nathaniel-dizon/)!