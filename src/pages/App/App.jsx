import React, {useState, useEffect} from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService'
import Boardgames from '../Boardgames/Boardgames';


function App() {

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

  useEffect(() => {
    let atlasApiUrl = 'https://api.boardgameatlas.com/api/search?order_by=popularity&ascending=false&pretty=true&client_id=z3qRKx4kGS';
    const makeApiCall = () => {
      fetch(atlasApiUrl)
        .then((res) => res.json())
        .then((data) => {
          for (let i in data.games){
            console.log(`${i}: ${data.games[i].name}`)
          }
        });
    };
    makeApiCall();
  }, []);

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
                    <Boardgames user={user} handleLogout={handleLogout} />
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
