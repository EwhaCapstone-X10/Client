import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../screens/Splash';
import Main from '../screens/Main';
import Entry from '../screens/Entry';
import EndChat from '../screens/EndChat';
import { RootStackParamList } from '../models/navigation.model';
import { Text } from 'react-native';
import getDate from '../utils/getDate';
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
      <Stack.Screen
        name="FormName"
        component={FormName}
        options={{
          headerTitle: '',
          headerRight: () => <Text className="custom-title text-primary_500">DriveMate</Text>,
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="FormAge"
        component={FormAge}
        options={{
          headerTitle: '',
          headerRight: () => <Text className="custom-title text-primary_500">DriveMate</Text>,
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="FormGender"
        component={FormGender}
        options={{
          headerTitle: '',
          headerRight: () => <Text className="custom-title text-primary_500">DriveMate</Text>,
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="FormJob"
        component={FormJob}
        options={{
          headerTitle: '',
          headerRight: () => <Text className="custom-title text-primary_500">DriveMate</Text>,
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="Main"
        component={Main}
        options={{
          headerLeft: () => <Text className="text-lg font-Bold">{getDate()}</Text>,
          headerTitle: '',
          headerRight: () => <Text className="custom-title text-primary_500">DriveMate</Text>,
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="EndChat"
        component={EndChat}
        options={{
          headerLeft: () => <Text className="text-lg font-Bold">{getDate()}</Text>,
          headerTitle: '',
          headerRight: () => <Text className="custom-title text-primary_500">DriveMate</Text>,
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="StretchingList"
        component={StretchingList}
        options={{
          headerLeft: () => <Text className="text-lg font-Bold">{getDate()}</Text>,
          headerTitle: '',
          headerRight: () => <Text className="custom-title text-primary_500">DriveMate</Text>,
          headerShadowVisible: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default Navigator;
