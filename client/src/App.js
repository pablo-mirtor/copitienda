import React, {useEffect, Suspense, lazy} from 'react';
import './App.scss';
import {Route, Switch, Redirect} from 'react-router-dom';

import Header from './components/header/header.component';
import {connect} from 'react-redux';
import {selectCurrentUser} from './redux/user/user.selectors';
import {createStructuredSelector} from 'reselect';
import {checkUserSession} from './redux/user/user.actions';
import Footer from './components/footer/footer.component';
import Spinner from './components/spinner/spinner.component'
import ErrorBoundary from './components/error-boundary/error-boundary.component';
//lazy components for dividing the load
const Homepage = lazy(() => import('./pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('./pages/shoppage/shoppage.component'));
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'));
const SignUpSignInPage = lazy(() => import('./pages/sign-up-sign-in-page/sign-up-sign-in-page.component'));

const App = ({checkUserSession, currentUser}) => {

  useEffect(() => {
    checkUserSession()
  }, [checkUserSession]);

  return (
      <div>
        <Header/>
        <main className='content'>
          <ErrorBoundary>
          <Switch className='content'>
            <Suspense fallback={<Spinner/>}>
              <Route exact path='/' component={Homepage}></Route>
              <Route path='/shop' component={ShopPage}></Route>
              <Route exact path='/checkout' component={CheckoutPage}></Route>
              <Route path='/signin' render={() => 
                currentUser ? (<Redirect to='/'/>) : (<SignUpSignInPage/>)}></Route>
            </Suspense>
          </Switch>
          </ErrorBoundary>
        </main>
        <Footer/>
      </div>
    );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
