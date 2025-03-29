import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";
import tw from "tailwind-react-native-classnames";

const ChatScreen = () => {
  const { id } = useLocalSearchParams(); // ✅ Get chat ID from URL

  return (
    <View style={tw`flex-1 justify-center items-center bg-white`}>
      <Text style={tw`text-lg font-bold`}>Chat with User {id}</Text>
    </View>
  );
};

export default ChatScreen;
