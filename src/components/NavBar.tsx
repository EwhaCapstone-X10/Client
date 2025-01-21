import { useEffect, useState } from 'react';
import { Image, ImageSourcePropType, Text, TouchableOpacity, View } from 'react-native';
import { RootStackParamList } from '../models/navigation.model';
import { NavigationProp, useNavigation } from '@react-navigation/native';

type NavProps = {
  type: string;
};

type Navs = {
  id: number;
  type: string;
  isBlue: boolean;
  graysrc: ImageSourcePropType;
  bluesrc: ImageSourcePropType;
  navi: keyof RootStackParamList;
};

const NavBar = (props: NavProps) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [navs, setNavs] = useState<Navs[]>([
    {
      id: 0,
      type: '홈',
      isBlue: false,
      graysrc: require('../assets/images/home_gray.png'),
      bluesrc: require('../assets/images/home_blue.png'),
      navi: 'Main',
    },
    {
      id: 1,
      type: '대화내역',
      isBlue: false,
      graysrc: require('../assets/images/clipboard_gray.png'),
      bluesrc: require('../assets/images/clipboard_blue.png'),
      navi: 'Splash', // 나중에 화면 생성 후 수정
    },
    {
      id: 2,
      type: '내 정보',
      isBlue: false,
      graysrc: require('../assets/images/user_gray.png'),
      bluesrc: require('../assets/images/user_blue.png'),
      navi: 'Splash', // 나중에 화면 생성 후 수정
    },
  ]);

  useEffect(() => {
    setNavs(navs.map((nav) => (nav.type === props.type ? { ...nav, isBlue: true } : { ...nav, isBlue: false })));
  }, [props.type]);

  return (
    <View className="flex-row w-full px-5 justify-between items-center gap-14 border-t-2 border-t-gray-200">
      {navs.map((nav) => (
        <TouchableOpacity
          className="flex items-center px-5 py-4 gap-2"
          key={nav.id}
          onPress={() => navigation.navigate(nav.navi)}
        >
          <Image source={nav.isBlue ? nav.bluesrc : nav.graysrc} className="w-8 h-8" />
          <Text className={`text-lg font-Semibold ${nav.isBlue ? 'text-primary_400' : 'text-primary_600'} `}>
            {nav.type}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default NavBar;
