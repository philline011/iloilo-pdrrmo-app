import React, {Fragment, useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import {SnackbarProvider} from 'notistack';

import Controls from './components/Controls';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <Fragment>
      {/* <Sidebar /> */}
      <Router>
        <Routes>
          <Route exact path="" element={<Sidebar />} />
          <Route exact path="/controls" element={<Controls />} />
        </Routes>
      </Router>
      
    </Fragment>
    
  );
}

export default App;
