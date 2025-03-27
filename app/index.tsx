import { useEffect, useRef } from 'react';
import { Animated, View } from 'react-native';
import { useRouter } from 'expo-router';
import Subtract from '../assets/images/Splash.svg';

export default function Index() {
  const router = useRouter();
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Fade in
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start();

    // Wait, then fade out and navigate
    const timer = setTimeout(() => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start(() => {
        router.replace('/Tabs/Home');
      });
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Animated.View style={{ flex:1, justifyContent:'center', alignItems:'center', opacity: fadeAnim }}>
      <Subtract />
    </Animated.View>
  );
}
