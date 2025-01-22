import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../models/navigation.model';

import Splash from '../screens/Splash';
import Main from '../screens/Main';
import Entry from '../screens/Entry';
import EndChat from '../screens/EndChat';
import StretchingList from '../screens/StretchingList';
import FormName from '../screens/FormName';
import FormAge from '../screens/FormAge';
import FormGender from '../screens/FormGender';
import FormJob from '../screens/FormJob';

const Stack = createNativeStackNavigator<RootStackParamList>();

function Navigator() {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
      <Stack.Screen name="Entry" component={Entry} options={{ headerShown: false }} />
      <Stack.Screen name="FormName" component={FormName} options={{ headerShown: false }} />
      <Stack.Screen name="FormAge" component={FormAge} options={{ headerShown: false }} />
      <Stack.Screen name="FormGender" component={FormGender} options={{ headerShown: false }} />
      <Stack.Screen name="FormJob" component={FormJob} options={{ headerShown: false }} />
      <Stack.Screen name="Main" component={Main} options={{ headerShown: false }} />
      <Stack.Screen name="EndChat" component={EndChat} options={{ headerShown: false }} />
      <Stack.Screen name="StretchingList" component={StretchingList} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default Navigator;
