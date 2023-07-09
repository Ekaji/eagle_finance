import { Stack } from 'expo-router'
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen'
import { View } from 'react-native';

SplashScreen.preventAutoHideAsync();

export default function Layout() {
    const [fontsLoaded] = useFonts({
        Satoshi_Variable: require('../assets/fonts/Satoshi-Variable'),
        Satoshi_Itali: require('../assets/fonts/Satoshi-VariableItalic')
    })

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded])

    if (!fontsLoaded) return null

    return (
        <View onLayout={onLayoutRootView}>
            <Stack />
        </View>
    );
}

