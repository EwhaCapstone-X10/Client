import { Image, Text, TouchableOpacity, View } from 'react-native';
import CommonStyles from '../styles/CommonStyles';
import { InfoItem } from '../models/user.model';

type InfoProps = {
  info: InfoItem;
};

const MyInfoEdit = ({ info }: InfoProps) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <View
        style={{
          gap: 6,
          paddingVertical: 5,
        }}
      >
        <Text style={CommonStyles.myTitle}>{info.title}</Text>
        <Text
          style={{
            fontFamily: 'Pretendard-Regular',
            color: '#8D8D8A',
            fontSize: 12,
          }}
        >
          {info.value}
        </Text>
      </View>
      <Image style={{ width: 25, height: 25 }} source={require('../assets/images/forward.png')} />
    </TouchableOpacity>
  );
};

export default MyInfoEdit;
