import tw from 'tailwind-react-native-classnames';
import { View, Text } from 'react-native';
import Subtract from '../assets/images/Splash.svg';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';

export default function Index() {

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View>
        <Subtract/>
      </View>
    </View>
  );
}
