import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Homepage from "./pages/homepage/homepage.component";
import HatsPage from "./pages/hatspage/hatspage.component";
import ShopPage from './pages/shoppage/shoppage.component';
import SignUpSignInPage from './pages/sign-up-sign-in-page/sign-up-sign-in-page.component'
import Header from './components/header/header.component';
function App() {
  return (
    <div>
      <Header/>
      <Switch>
          <Route exact path='/' component={Homepage}></Route>
          <Route path='/shop' component={ShopPage}></Route>
          <Route path='/hats' component={HatsPage}></Route>
          <Route path='/signin' component={SignUpSignInPage}></Route>
      </Switch>

    </div>
  );
}

export default App;
