import React from 'react';
import Header from './src/components/Header';
import MenuBar from './src/components/MenuBar';
import {NavigationContainer} from '@react-navigation/native';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Header title="MyfirstMobileApp" />
      <MenuBar />
    </NavigationContainer>
  );
}

export default App;
