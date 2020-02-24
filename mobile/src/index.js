import React from 'react';
import {SafeAreaView, Text, StatusBar} from 'react-native';

import Routes from './routes';

const App = () => {
  return (
    <>
      <StatusBar></StatusBar>
      <Routes></Routes>
    </>
  );
};

export default App;
