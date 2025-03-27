import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TabView, SceneMap } from 'react-native-tab-view';
import { useState } from 'react';
import tw from 'tailwind-react-native-classnames';
import Home from './Home';
import Settings from './Settings';
import Profile from './Profile';
import Header from './Header';

const initialLayout = { width: Dimensions.get('window').width };

export default function TabLayout() {
    const [index, setIndex] = useState(0);
    const [routes] = useState<{ key: string; title: string; icon: keyof typeof Ionicons.glyphMap }[]>([
        { key: 'home', title: 'Home', icon: 'home-outline' },
        { key: 'settings', title: 'Settings', icon: 'settings-outline' },
        { key: 'profile', title: 'Profile', icon: 'person-outline' },
    ]);

    const renderScene = SceneMap({
        home: Home,
        settings: Settings,
        profile: Profile,
    });

    return (
        <>
            <Header title={routes[index].title}/>

            {/* TabView */}
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={initialLayout}
                renderTabBar={() => null}
            />

            {/* Bottom Tabs */}
            <View style={tw`flex-row p-2 border-t border-gray-300 bg-white`}>
                {routes.map((route, i) => (
                    <TouchableOpacity
                        key={route.key}
                        style={tw`flex-1 justify-center items-center`}
                        onPress={() => setIndex(i)}
                    >
                        <Ionicons
                            name={route.icon}
                            size={24}
                            color={index === i ? '#000' : '#888'}
                        />
                        <Text style={tw`${index === i ? 'text-black' : 'text-gray-500'} text-xs`}>
                            {route.title}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
        </>
    );
}
