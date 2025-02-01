import { Image, Text, View } from 'react-native';
import CommonStyles from '../styles/CommonStyles';
import { Summary } from '../models/chatting.model';

type SummaryProps = {
  item: Summary;
};

const ChatSummary = ({ item }: SummaryProps) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
        {item.id % 2 === 0 ? (
          <Image style={{ width: 30, height: 30 }} source={require('../assets/images/note_blue.png')} />
        ) : (
          <Image style={{ width: 30, height: 30 }} source={require('../assets/images/note_sky.png')} />
        )}
        <View>
          <Text style={CommonStyles.description}>{item.date}</Text>
          <Text style={{ fontFamily: 'Pretendard-Regular' }}>{item.summary}</Text>
        </View>
      </View>

      <Image style={{ width: 30, height: 30 }} source={require('../assets/images/forward.png')} />
    </View>
  );
};

export default ChatSummary;
