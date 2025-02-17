import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './app/Screens/home/HomeScreen'
import SplashScreen from './app/Screens/Splash/SplashScreen';
import { StatusBar } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnBoradingScreen from './app/Screens/Splash/OnBorading/OnBoradingScreen';

const App = () => {
  const Stack = createNativeStackNavigator();
  const [isSplash, setIsSplash] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsSplash(false);
    }, 3000);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isSplash ? (
          <Stack.Group>
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="onboarding" component={OnBoradingScreen} />
          </Stack.Group>
        ) : (
          <Stack.Group>
            <Stack.Screen name="Home" component={SplashScreen} />
          </Stack.Group>
        )}
      </Stack.Navigator>

      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="default"
      />
    </NavigationContainer>
  );
};

export default App;
