import React, {Fragment, useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import {SnackbarProvider} from 'notistack';

import Controls from './components/Controls';
import Main from './components/Main';
import Header from './components/Header';
import Login from './components/Login';

const App = props => {
  const AppHeader = () => {
    let location = window.location.pathname;
    if (location !== '/login' && location !== '/'){
      return <Header/>
    }
  }
  return (
    <Fragment>
      <Router>
        {AppHeader()}
        <Routes>
          <Route exact path="" element={<Login />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/main" element={<Main/>}/>
          <Route exact path="/controls" element={<Controls />} />
        </Routes>
      </Router>
      
    </Fragment>
    
  );
}

  

export default App;
