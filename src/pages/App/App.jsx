import React, {useState, useEffect} from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService'
import BoardgamesPage from '../BoardgamesPage/BoardgamesPage';
import GamePage from '../GamePage/GamePage';
import ProfilePage from '../ProfilePage/ProfilePage';
import UserService from '../../utils/userService';

function App() {
// USER, LOGIN, SIGNUP
  const [user, setUser] = useState(userService.getUser()) // getUser decodes our JWT token, into a javascript object
  // this object corresponds to the jwt payload which is defined in the server signup or login function that looks like 
  // this  const token = createJWT(user); // where user was the document we created from mongo

  function handleSignUpOrLogin(){
    setUser(userService.getUser()) // getting the user from localstorage decoding the jwt
  }

  function handleLogout(){
    userService.logout();
    setUser({user: null})
  }

/////////////////////////////////////////////////////////////////////////////////////////////////// 

// API DATA
  // console.log(`${i}: ${data.games[i].name}`) // This is for calling bg name w/in data
  // const [atlasApiUrl, setApiUrl] = useState('https://api.boardgameatlas.com/api/search?name=Catan&pretty=true&client_id=z3qRKx4kGS')

  const [bgData, setBgData] = useState()

  // let atlasApiUrl = 'https://api.boardgameatlas.com/api/search?name=Catan&pretty=true&client_id=z3qRKx4kGS' // Catan example by API

  let atlasApiUrl = 'https://api.boardgameatlas.com/api/search?categories?name=Adventure&limit=50&client_id=z3qRKx4kGS' // by adventure category
  
  useEffect(() => {
      fetch(atlasApiUrl)
        .then((res) => res.json())
        .then((data) => {
          setBgData(data.games)
        })
  }, [])
  
  // console.log(bgData, 'BG DATA')

///////////////////////////////////////////////////////////////////////////////////////////////////

// FUNCTIONS FOR ADDING FAVORITE GAME TO PROFILE/DATABASE
  const [userFavorites, setUserFavorites] = useState([])

  async function handleFavorite(gameId){
      // console.log(gameId, 'THIS IS GAME ID')
      try{
          const data = await UserService.handleFavDatabase(gameId)
          // console.log('Data from handleFavorite:', data)
          setUserFavorites(data)


      } catch(err){
          console.log(err, 'ERR from handleFavorite')
      }
  }

///////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <div className="App">
      <Switch>
          <Route exact path="/login">
             <LoginPage handleSignUpOrLogin={handleSignUpOrLogin}/>
          </Route>
          <Route exact path="/signup">
             <SignupPage handleSignUpOrLogin={handleSignUpOrLogin}/>
          </Route>
          <Route exact path="/">
             <Redirect to='/login'/>
          </Route>
          {userService.getUser() ? 
            <> 
            <Switch>
                <Route exact path='/boardgames/:id' render={(routerProps) =>
                  <GamePage user={user} handleLogout={handleLogout} bgData={bgData} routerProps={routerProps}/>}>
                </Route>
                <Route exact path="/boardgames">
                    <BoardgamesPage
                      user={user}
                      handleLogout={handleLogout}
                      atlasApiUrl={atlasApiUrl}
                      bgData={bgData}
                      handleFavorite={handleFavorite}/>
                </Route>
                <Route exact path='/:username'>
                  <ProfilePage user={user} atlasApiUrl={atlasApiUrl} />
                </Route>
            </Switch>
            </>
            :
            <Redirect to='/login'/>
          }
      </Switch>
    </div>
  );
}


export default App;
