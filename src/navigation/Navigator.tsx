import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../screens/Splash';
import Main from '../screens/Main';
import Entry from '../screens/Entry';
import BasicInformation from '../screens/BasicInformation';
import EndChat from '../screens/EndChat';
import {RootStackParamList} from '../models/navigation.model';

const Stack = createNativeStackNavigator<RootStackParamList>();

function Navigator() {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Entry"
        component={Entry}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="BasicInformation"
        component={BasicInformation}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="Main"
        component={Main}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="EndChat"
        component={EndChat}
        options={{headerShown: true}}
      />
    </Stack.Navigator>
  );
}

export default Navigator;
