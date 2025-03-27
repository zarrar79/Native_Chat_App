import { View, Text } from "react-native";
import tw from "tailwind-react-native-classnames";

type HeaderProps = {
    title: string;
};

export default function Header({ title }: HeaderProps) {
    return (
        <View style={tw`p-4 justify-center items-start bg-gray-100 border-b border-gray-300`}>
            <Text style={tw`text-lg font-bold`}>
                {title}
            </Text>
        </View>
    );
}