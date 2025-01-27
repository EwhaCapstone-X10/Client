import React from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../models/navigation.model';
import { Nav } from './NavBar';

type NavButtonProps = {
  type: Nav;
};

const NavButton = (props: NavButtonProps) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <TouchableOpacity
      style={{ flex: 0, alignItems: 'center', paddingHorizontal: 10 }}
      onPress={() => navigation.navigate('Main')}
    >
      <Image style={{ width: 28, height: 28 }} source={props.type.isBlue ? props.type.bluesrc : props.type.graysrc} />
      <Text
        style={{
          color: props.type.isBlue ? '#3182f6' : '#9db2ce',
        }}
        className={'text-base font-Semibold'}
      >
        {props.type.title}
      </Text>
    </TouchableOpacity>
  );
};

export default NavButton;
