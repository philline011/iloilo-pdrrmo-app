import React, {Fragment, useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import {SnackbarProvider} from 'notistack';

import Controls from './components/Controls';
import Main from './components/Main';
import TimelinePage from './components/TimelinePage';

function App() {
  return (
    <Fragment>
      {/* <Sidebar /> */}
      <Router>
        <Routes>
          <Route exact path="" element={<Main />} />
          <Route exact path="/controls" element={<Controls />} />
          <Route exact path="/timeline" element={<TimelinePage />} />
        </Routes>
      </Router>
      
    </Fragment>
    
  );
}

export default App;
