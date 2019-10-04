import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

import Header from './Header'
import Footer from './Footer'
import Restaurants from './Restaurants'

function App() {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route path="/scg" component={Restaurants} />
        </Switch>
      </Router>
      <Footer />
    </>
  )
}

export default App;
