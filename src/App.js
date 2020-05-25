import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './component/Home';
import AboutUs from './component/AboutUs';
import GitSearch from './component/GitSearch';
import Navigation from './component/Navigation';
import Form from './component/Form';


function App() {
  return (
    <Router>
        <Navigation/>
      <div className="container">
        <h3 className="m-3 d-flex  justify-content-center"> React Js Learnings</h3>
        <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path='/aboutus' component={AboutUs}></Route>
          <Route path='/gitSearch' component={GitSearch}></Route>
          <Route path='/form' component={Form}></Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
