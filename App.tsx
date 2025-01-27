/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import Navigator from './src/navigation/Navigator';
import './src/input.css';

const BodyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
};

function App(): React.JSX.Element {
  return (
    <NavigationContainer theme={BodyTheme}>
      <Navigator />
    </NavigationContainer>
  );
}

export default App;
