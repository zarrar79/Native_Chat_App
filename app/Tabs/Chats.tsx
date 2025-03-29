import React, { useState } from "react";
import { View, Text, Image, FlatList, Pressable } from "react-native";
import { useRouter } from "expo-router";
import tw from "tailwind-react-native-classnames";

const initialChats = [
  { id: 1, name: "John Doe", image: "https://randomuser.me/api/portraits/men/1.jpg", lastMessage: "Hey, how are you?", time: "10:45 AM" },
  { id: 2, name: "Alice Smith", image: "https://randomuser.me/api/portraits/women/2.jpg", lastMessage: "Let's meet up later!", time: "09:30 AM" },
  { id: 3, name: "David Johnson", image: "https://randomuser.me/api/portraits/men/3.jpg", lastMessage: "Did you check the files?", time: "Yesterday" },
];

const Chats = () => {
  const router = useRouter(); // ✅ Initialize navigation

  return (
    <View style={tw`flex-1 bg-white`}>
      <FlatList
        data={initialChats}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Pressable
          onPress={() => router.push(`/Tabs/Chat[${item.id}]`)}
            style={({ pressed }) => [
              tw`flex-row items-center border-b border-gray-200 px-4 py-3 rounded-lg`,
              pressed ? tw`bg-gray-200` : tw`bg-white`
            ]}
          >
            <Image source={{ uri: item.image }} style={tw`w-12 h-12 rounded-full`} />
            <View style={tw`flex-1 ml-3`}>
              <Text style={tw`text-md font-bold`}>{item.name}</Text>
              <Text style={tw`text-gray-500`}>{item.lastMessage}</Text>
            </View>
            <Text style={tw`text-gray-400 text-sm`}>{item.time}</Text>
          </Pressable>
        )}
      />
    </View>
  );
};

export default Chats;
