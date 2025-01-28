/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import Navigator from './src/navigation/Navigator';

const BodyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
};

function App(): React.JSX.Element {
  return (
    <NavigationContainer
      theme={BodyTheme}
      linking={{
        prefixes: ['mydrivemate://'],
        config: {
          screens: {
            Main: '', //앱을 실행할 때 이동 지정안하면 navigator의 첫 화면(splash)
            EndChat: 'EndChat', // 딥링크 UL로 이동
          },
        },
      }}
    >
      <Navigator />
    </NavigationContainer>
  );
}

export default App;
