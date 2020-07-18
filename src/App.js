import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Homepage from "./pages/homepage/homepage.component"
import HatsPage from "./pages/hatspage/hatspage.component"
import ShopPage from './pages/shoppage/shoppage.component'
function App() {
  return (
    <div>
      <Switch>
          <Route exact path='/' component={Homepage}></Route>
          <Route path='/shop' component={ShopPage}></Route>
          <Route path='/hats' component={HatsPage}></Route>
      </Switch>

    </div>
  );
}

export default App;
