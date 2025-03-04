import React, { useRef } from 'react';
import { View, Text, ToastAndroid, Platform } from 'react-native';
import Video, { VideoRef } from 'react-native-video';
import LinearGradient from 'react-native-linear-gradient';
import { SplashStyle } from './style/Splashstyle';
import RNButton from '../../compoents/button/RNButton';
import { CommonActions, useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

// Configure Google Sign-In
GoogleSignin.configure({
    webClientId: '821180289473-fgsodmflb3uqg5hfvf9u9nf40nrbbu2f.apps.googleusercontent.com',
    offlineAccess: false,
    forceCodeForRefreshToken: true
});

const LetsStartScreen = () => {
    const videoRef = useRef<VideoRef>(null);
    const navigation = useNavigation();
    const [loading, setLoading] = React.useState(false);

    const onGoogleButtonPress = async () => {
        setLoading(true);
        try {
            await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
            const signInResult = await GoogleSignin.signIn();
            console.log('Google Sign-In Result:', signInResult);

            const idToken = signInResult?.data?.idToken || signInResult?.idToken;

            if (!idToken) {
                throw new Error('No ID token found. Please ensure your Web Client ID is configured correctly.');
            }

            // Create Firebase credential
            const googleCredential = auth.GoogleAuthProvider.credential(idToken);
            const userCredential = await auth().signInWithCredential(googleCredential);
            console.log('Firebase Authentication successful', userCredential);
            await AsyncStorage.setItem('idtoken', idToken);
            const user = userCredential.user;

            const userData = {
                uid: user.uid,
                name: user.displayName,
                email: user.email,
                profilePicture: user.photoURL,
            };

            // Store user data in Firebase Realtime Database
            // await database()
            //     .ref(`/users/${user.uid}`)
            //     .set(userData).then(() => console.log("data stored successfully!"));



            if (Platform.OS === 'android') {
                ToastAndroid.show('Login successful!', ToastAndroid.BOTTOM);
            }

            navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [{ name: 'Home' }],
                })
            );
        } catch (error) {
            console.error('Google Sign-In Error:', error.message, error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={SplashStyle.container}>
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
            <LinearGradient
                colors={['rgba(255, 255, 255, 0)', 'rgba(0, 13, 39, 0.7)', 'rgba(0, 0, 0, 0.9)']}
                style={SplashStyle.overlay}
            >
                <View style={SplashStyle.contentContainer}>
                    <Text style={SplashStyle.title}>DhiMeet -</Text>
                    <View style={{ marginBottom: 50 }}>
                        <Text style={SplashStyle.subtitle}>Seamless Invites,</Text>
                        <Text style={SplashStyle.subtitle}>Effortless Gatherings</Text>
                    </View>
                    <RNButton title="Let's Start" loading={loading} onPress={onGoogleButtonPress} />
                </View>
            </LinearGradient>
        </View>
    );
};

export default LetsStartScreen;
