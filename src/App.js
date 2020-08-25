import React from 'react';
import './App.css';
import {Route, Switch, Redirect} from 'react-router-dom';
import Homepage from "./pages/homepage/homepage.component";
import ShopPage from './pages/shoppage/shoppage.component';
import CheckoutPage from './pages/checkout/checkout.component';
import SignUpSignInPage from './pages/sign-up-sign-in-page/sign-up-sign-in-page.component'
import Header from './components/header/header.component';
import {connect} from 'react-redux';
import {selectCurrentUser} from './redux/user/user.selectors';
import {createStructuredSelector} from 'reselect';
import {checkUserSession} from './redux/user/user.actions';
class App extends React.Component {

  unsuscribeFromAuth = null;


  componentDidMount(){
    const {checkUserSession} = this.props;
    checkUserSession();
  }

  componentWillUnmount(){
    this.unsuscribeFromAuth();
  }

  render(){
  return (
      <div>
        <Header/>
        <Switch>
            <Route exact path='/' component={Homepage}></Route>
            <Route path='/shop' component={ShopPage}></Route>
            <Route exact path='/checkout' component={CheckoutPage}></Route>
            <Route path='/signin' render={() => 
              this.props.currentUser ? (<Redirect to='/'/>) : (<SignUpSignInPage/>)}></Route>
        </Switch>

      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
