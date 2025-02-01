import { Image, Text, View } from 'react-native';
import CommonStyles from '../styles/CommonStyles';

const NoChat = () => {
  return (
    <View style={{ alignItems: 'center', gap: 20, paddingTop: 60 }}>
      <Image style={{ width: 80, height: 80 }} source={require('../assets/images/paperplane.png')} />
      <View style={{ alignItems: 'center' }}>
        <Text style={CommonStyles.title}>아직 주고받은 대화 내역이 없습니다 </Text>
        <Text style={CommonStyles.description}>AI와 음성 대화를 나눠보세요</Text>
      </View>
    </View>
  );
};

export default NoChat;
