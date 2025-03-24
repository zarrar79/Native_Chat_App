import { View, Text } from 'react-native';
import tw from 'tailwind-react-native-classnames';

export default function Index() {
  return (
    <View style={tw`flex-1 justify-center items-center`}>
      <Text style={tw`text-lg font-bold text-black`}>Hello, React Native</Text>
    </View>
  );
}
