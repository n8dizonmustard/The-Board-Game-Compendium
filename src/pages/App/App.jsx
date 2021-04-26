import React, {useState, useEffect} from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService'
import BoardgamesPage from '../BoardgamesPage/BoardgamesPage';
import GamePage from '../GamePage/GamePage';


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

// API DATA
  // console.log(`${i}: ${data.games[i].name}`) // This is for calling bg name w/in data
  const [bgData, setBgData] = useState({})

  const makeApiCall = () => {
    let atlasApiUrl = 'https://api.boardgameatlas.com/api/search?order_by=popularity&ascending=false&pretty=true&client_id=z3qRKx4kGS';
    fetch(atlasApiUrl)
      .then((res) => res.json())
      .then((data) => {
        setBgData(data.games)
      });
  };

  useEffect(() => {
    makeApiCall();
  }, []);

  console.log('this is the bgData state', bgData)

  return (
    <div className="App">
      <Switch>
          <Route exact path="/login">
             <LoginPage handleSignUpOrLogin={handleSignUpOrLogin}/>
          </Route>
          <Route exact path="/signup">
             <SignupPage handleSignUpOrLogin={handleSignUpOrLogin}/>
          </Route>
          {userService.getUser() ? 
            <> 
             <Switch>
                <Route exact path="/">
                    <BoardgamesPage user={user} handleLogout={handleLogout} bgData={bgData} />
                </Route>
            </Switch>
            </>
            :
            <Redirect to='/login'/>
          }
          <Route exact path='/gamepage' component={GamePage}/>
      </Switch>
    </div>
  );
}


export default App;
