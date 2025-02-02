import { Text, View } from 'react-native';
import { Video } from '../models/video.model';
import CommonStyles from '../styles/CommonStyles';

type StretchingProps = {
  item: Video;
};

const StretchingVideo = ({ item }: StretchingProps) => {
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <View style={{ width: 120, height: 70, backgroundColor: '#F6F6F6' }}></View>
      <Text style={CommonStyles.myTitle}>{item.title}</Text>
    </View>
  );
};

export default StretchingVideo;
