import React, { useRef } from 'react';
import { View, Text, ToastAndroid, Platform } from 'react-native';
import Video, { VideoRef } from 'react-native-video';
import LinearGradient from 'react-native-linear-gradient';
import { SplashStyle } from './style/Splashstyle';
import RNButton from '../../compoents/button/RNButton';
import { CommonActions, useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import AsyncStorage from '@react-native-async-storage/async-storage';


GoogleSignin.configure({
    webClientId: 'autoautoDetect821180289473-fgsodmflb3uqg5hfvf9u9nf40nrbbu2f.apps.googleusercontent.com',
    offlineAccess: true
});

const LetsStartScreen = () => {
    const videoRef = useRef<VideoRef>(null);
    const navigation = useNavigation();

    const onGoogleButtonPress = async () => {
        try {
            console.log('Starting Google Sign-In...');
            await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
            const result = await GoogleSignin.signIn();
            // console.log('Google Sign-In Result:', result);

            // Extract the ID token explicitly
            const idToken = result.idToken || result?.data?.idToken;

            console.log('Extracted ID Token:', idToken);

            if (!idToken) {
                throw new Error('No ID token found. Please ensure your Web Client ID is configured correctly.');
            }

            // Create a Google credential
            const googleCredential = auth.GoogleAuthProvider.credential(idToken);

            // Sign in to Firebase with the credential
            await auth().signInWithCredential(googleCredential);
            console.log('Firebase Authentication successful');
            await AsyncStorage.setItem('idtoken', idToken);

            if (Platform.OS === "android") {
                ToastAndroid.show("Login successfully !", ToastAndroid.BOTTOM);
            }

            navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [{ name: "main" }]
                })
            );
        } catch (error) {
            console.error('Google Sign-In Error:', error.message, error);
        }
    };


    return (
        <View style={SplashStyle.container}>
            {/* Background Video */}
            <Video
                source={require('../../../assets/video/splash.mp4')}
                style={SplashStyle.backgroundVideo}
                ref={videoRef}
                muted
                repeat
                resizeMode="cover"
                rate={1.0}
                ignoreSilentSwitch="obey"
            />

            {/* Linear Gradient Overlay */}
            <LinearGradient
                colors={['rgba(255, 255, 255, 0)', 'rgba(0, 13, 39, 0.7)', 'rgba(0, 0, 0, 0.9)']}
                style={SplashStyle.overlay}
            >
                {/* Content */}
                <View style={SplashStyle.contentContainer}>
                    {/* Title */}
                    <Text style={SplashStyle.title}>DhiMeet -</Text>
                    <View style={{ marginBottom: 50 }}>
                        <Text style={SplashStyle.subtitle}>Seemless Invites,</Text>
                        <Text style={SplashStyle.subtitle}>Effectless Gatherings</Text>
                    </View>
                    <RNButton title="Let's Start" onPress={() =>
                        onGoogleButtonPress().then(() => console.log('Signed in with Google!'))
                    } />

                </View>
            </LinearGradient>
        </View>
    );
};


export default LetsStartScreen;
