import React from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../models/navigation.model';
import { Nav } from './NavBar';

type NavButtonProps = {
  type: Nav;
  nav: keyof RootStackParamList;
};

const NavBtn = (props: NavButtonProps) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <TouchableOpacity
      style={{ flex: 0, alignItems: 'center', paddingHorizontal: 10, gap: 3 }}
      onPress={() => navigation.navigate(props.nav)}
    >
      <Image style={{ width: 24, height: 24 }} source={props.type.isBlue ? props.type.bluesrc : props.type.graysrc} />
      <Text
        style={{
          fontFamily: 'Pretendard-SemiBold',
          fontSize: 14,
          color: props.type.isBlue ? '#3182f6' : '#9db2ce',
        }}
      >
        {props.type.title}
      </Text>
    </TouchableOpacity>
  );
};

export default NavBtn;
