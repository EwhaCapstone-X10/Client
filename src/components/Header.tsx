import {useNavigation, NavigationProp} from '@react-navigation/native';
import {View, Text} from 'react-native';
import {RootStackParamList} from '../models/navigation.model';
import React from 'react';

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
    <View className="flex flex-row w-full items-center justify-between p-6">
      <Text
        className="text-2xl font-Bold"
        onPress={() => onClickLeft(props.left)}>
        {props.left}
      </Text>
      <Text className="text-2xl font-Bold">{props.title}</Text>
      <Text />
    </View>
  );
};

export default Header;
