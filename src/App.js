import React from 'react';
import './App.css';
import {Route, Switch, Redirect} from 'react-router-dom';
import Homepage from "./pages/homepage/homepage.component";
import HatsPage from "./pages/hatspage/hatspage.component";
import ShopPage from './pages/shoppage/shoppage.component';
import SignUpSignInPage from './pages/sign-up-sign-in-page/sign-up-sign-in-page.component'
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions'
class App extends React.Component {

  
  unsuscribeFromAuth = null;

  componentDidMount(){
    const {setCurrentUser} = this.props;

    this.unsuscribeFromAuth = auth.onAuthStateChanged(async userAuth =>  {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        });
      }

      setCurrentUser(userAuth);
    });
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
            <Route path='/hats' component={HatsPage}></Route>
            <Route path='/signin' render={() => 
              this.props.currentUser ? (<Redirect to='/'/>) : (<SignUpSignInPage/>)}></Route>
        </Switch>

      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
