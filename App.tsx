import { SafeAreaView, StatusBar } from 'react-native';
import RootNavigation from './src/rootNavigation/RootNavigation';
import React from 'react';

const App = () => {
  return (
    <React.Fragment>
      <RootNavigation />
      <StatusBar barStyle={"dark-content"} />
    </React.Fragment>
  )
}

export default App;