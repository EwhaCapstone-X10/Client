import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity, Image, ImageSourcePropType } from 'react-native';
import { RootStackParamList } from '../models/navigation.model';

type LookupProps = {
  first: string;
  second: string;
  img: ImageSourcePropType;
  nav: keyof RootStackParamList;
};

const LookupButton = (props: LookupProps) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View className="py-3">
      <TouchableOpacity
        className="flex-row items-end justify-between w-full p-5 rounded-xl border-2 border-gray-200"
        onPress={() => navigation.navigate(props.nav)}
      >
        <View>
          <Text className="custom-description">{props.first}</Text>
          <Text className="custom-title text-primary_500">{props.second}</Text>
          <Text className="custom-title">둘러보기</Text>
        </View>
        <Image className="w-24 h-20" source={props.img} />
      </TouchableOpacity>
    </View>
  );
};

export default LookupButton;
