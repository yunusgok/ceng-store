import React from 'react'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'



import HomePage from "./Pages/HomePage"
import UserPage from "./Pages/UserPage"


const App = () => {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/user/:userName" component={UserPage} />
          <Route exact path="/games" component={HomePage} />
          <Redirect to="/" />
        </Switch>
      </Router>
    )
  }
  
export default App
