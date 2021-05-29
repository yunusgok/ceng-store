import React from 'react'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'



import HomePage from "./Pages/HomePage"

const App = () => {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Redirect to="/" />
        </Switch>
      </Router>
    )
  }
  
export default App
