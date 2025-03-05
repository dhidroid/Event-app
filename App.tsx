import { StatusBar } from 'react-native';
import RootNavigation from './src/rootNavigation/RootNavigation';
import React from 'react';
const App = () => {
  return (
    <React.Fragment>
      <RootNavigation />
      <StatusBar translucent backgroundColor="transparent" barStyle={"dark-content"} animated networkActivityIndicatorVisible showHideTransition={'slide'} />
    </React.Fragment>
  );
};

export default App;
