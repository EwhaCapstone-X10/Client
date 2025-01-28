import { useNavigation, NavigationProp } from '@react-navigation/native';
import { View, Text } from 'react-native';
import { RootStackParamList } from '../models/navigation.model';
import React from 'react';
import CommonStyles from '../styles/CommonStyles';

type HeaderProps = {
  left: string;
  title: string;
};

const Header = (props: HeaderProps) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const onClickLeft = (left: string) => {
    if (left === '<-') {
      navigation.goBack();
    } else {
      return;
    }
  };
  return (
    <View
      style={{
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 24,
      }}
    >
      <Text style={CommonStyles.title} onPress={() => onClickLeft(props.left)}>
        {props.left}
      </Text>
      <Text style={CommonStyles.title}>{props.title}</Text>
      <Text />
    </View>
  );
};

export default Header;
