import React, {Fragment, useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import {SnackbarProvider} from 'notistack';

import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  return (
    // <Header />
    <Sidebar />
  );
}

export default App;
