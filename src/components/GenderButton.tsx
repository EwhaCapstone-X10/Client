import { View, TouchableOpacity, Text } from 'react-native';
import { Gender } from '../models/user.model';

type GenderProps = {
  genders: Gender[];
  onClick: (id: number) => void;
};

const GenderButton = (props: GenderProps) => {
  return (
    <View className="flex-row w-full justify-center gap-8 py-3">
      {props.genders.map((gender) => (
        <TouchableOpacity
          key={gender.id}
          className="gender-button"
          onPress={() => props.onClick(gender.id)}
          style={{
            borderColor: gender.isClicked ? '#5299FF' : '#DFDEDA',
          }}
        >
          <Text
            className="font-Medium text-xs"
            style={{
              color: gender.isClicked ? '#5299FF' : 'black',
            }}
          >
            {gender.type}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default GenderButton;
