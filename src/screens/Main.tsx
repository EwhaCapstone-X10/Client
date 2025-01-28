import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import Header from '../components/Header';
import NavBar from '../components/NavBar';
import CommonStyles from '../styles/CommonStyles';

const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header left="" title="drivemate" />
      <View
        style={[
          CommonStyles.leftview,
          {
            flex: 1,
            gap: 40,
          },
        ]}
      >
        <Text style={CommonStyles.title}>
          <Text style={{ color: '#3182F6' }}>개인 맞춤형 대화</Text>
          {'를 통해\n'}
          졸음 운전을 예방해보세요
        </Text>
      </View>
      <NavBar type={'home'} />
    </View>
  );
};

export default Main;
