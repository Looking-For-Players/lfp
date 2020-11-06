import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Landing from './components/landing/Landing';
import Header from './components/header/Header';
import Home from './components/home/Home';
import NotFound from './components/notFound/NotFound';
import Profile from './components/profile/Profile';
import './App.scss';
import Results from './components/results/Results';
import Footer from './components/footer/Footer';
import AuthenticatedRoute from './components/utilities/authenticatedRoute/AuthenticatedRoute';
import UnauthenticatedRoute from './components/utilities/unauthenticatedRoute/UnauthenticatedRoute';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <div
        className='App__container'
        style={{ backgroundImage: 'url(./background.png)' }}
      >
        <div className='App__content'>
          <Switch>
            <AuthenticatedRoute exact path='/' component={Home} />
            <UnauthenticatedRoute exact path='/login' component={Landing} />
            <UnauthenticatedRoute exact path='/results' component={Results} />
            <AuthenticatedRoute exact path='/profile' component={Profile} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>

     <Switch>
      <Route exact path='/login' component={Footer} />
     </Switch> 
    </div>
  );

};

export default App;
