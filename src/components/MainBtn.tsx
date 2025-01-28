import { CommonActions, NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { RootStackParamList } from '../models/navigation.model';
import CommonStyles from '../styles/CommonStyles';

type ButtonProps = {
  text: string;
  nav: keyof RootStackParamList;
  isAbled: boolean;
  onClick: () => void;
};

const MainBtn = (props: ButtonProps) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const handlePress = () => {
    navigation.navigate(props.nav);
    props.onClick();
  };

  return (
    <View style={CommonStyles.view}>
      <TouchableOpacity
        style={[
          {
            alignItems: 'center',
            width: '100%',
            paddingVertical: 12,
            borderRadius: 12,
          },
          props.isAbled ? { backgroundColor: '#DFDEDA' } : { backgroundColor: '#5299FF' },
        ]}
        onPress={handlePress}
        disabled={props.isAbled}
      >
        <Text
          style={{
            color: 'white',
            fontFamily: 'Pretendard-SemiBold',
            fontSize: 12,
          }}
        >
          {props.text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default MainBtn;
