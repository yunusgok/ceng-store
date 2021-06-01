import React from 'react'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'



import HomePage from "./Pages/HomePage"
import UserPage from "./Pages/UserPage"
import GamePage from "./Pages/GamePage"


const App = () => {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/user/:userName" component={UserPage} />
          <Route exact path="/games" component={GamePage} />
          <Redirect to="/" />
        </Switch>
      </Router>
    )
  }
  
export default App
