import React, { useEffect, } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/Homescreen/HomeScreen';
import LetsStartScreen from '../screens/Splash/LetsStartScreen';
import Splash from '../screens/Splash/Splash';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CreateEventScreen from '../screens/createEvent/CreateEventScreen';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Splash" component={SplashScreen} />
                <Stack.Screen name="LetStart" component={LetsStartScreen} />
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Create" component={CreateEventScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        const checkToken = async () => {
            try {
                const token = await AsyncStorage.getItem('idtoken');
                console.log("token", token);
                if (token) {
                    navigation.replace('Home');
                } else {
                    navigation.replace('LetStart');
                }
            } catch (error) {
                console.error('Error retrieving token:', error);
                navigation.replace('LetStart');
            }
        };

        setTimeout(checkToken, 1000);
    }, [navigation]);

    return <Splash />;
};

export default RootNavigation;
