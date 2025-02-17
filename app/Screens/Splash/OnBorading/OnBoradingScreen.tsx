import { Pressable, StyleSheet, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import TextComp from '../../../Components/Text/TextComp';
import { Colors } from '../../../theme/colors';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = ({ setIsOtp }) => {
    const [phone, setPhone] = useState('');

    return (
        <View style={styles.container}>
            <TextComp bold style={styles.title}>ChatGPT Login</TextComp>
            <TextInput
                style={styles.input}
                placeholder='+91 91xxx xxxxx'
                keyboardType='phone-pad'
                value={phone}
                onChangeText={setPhone}
            />
            <Pressable style={styles.button} onPress={() => setIsOtp(true)}>
                <TextComp medium style={styles.buttonText}>Get OTP</TextComp>
            </Pressable>
        </View>
    );
};

const OtpScreen = () => {
    const [otp, setOtp] = useState('');
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TextComp large bold style={styles.title}>Enter OTP</TextComp>
            <TextInput
                style={styles.input}
                placeholder='Enter OTP'
                keyboardType='number-pad'
                value={otp}
                onChangeText={setOtp}
            />
            <Pressable style={styles.button} onPress={() => navigation.navigate("Home")}>
                <TextComp medium style={styles.buttonText}>Verify OTP</TextComp>
            </Pressable>
        </View>
    );
};

const OnBoradingScreen = () => {
    const [isPhone, setIsPhone] = useState(false);
    const [isOtp, setIsOtp] = useState(false);

    return (
        <>
            {isOtp ? (
                <OtpScreen />
            ) : isPhone ? (
                <LoginScreen setIsOtp={setIsOtp} />
            ) : (
                <View style={styles.container}>
                    <TextComp bold style={styles.title}>Welcome to OwlEvents</TextComp>
                    <TextComp medium style={styles.subtitle}>Connect with yopu local events & celebration</TextComp>
                    <Pressable style={styles.button} onPress={() => setIsPhone(true)}>
                        <TextComp medium style={styles.buttonText}>Get Started</TextComp>
                    </Pressable>
                </View>
            )}
        </>
    );
};

export default OnBoradingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.background,
        padding: 20,
    },
    title: {
        marginBottom: 20,
    },
    subtitle: {
        marginBottom: 30,
        textAlign: 'center',
    },
    input: {
        width: '100%',
        padding: 10,
        borderWidth: 1,
        borderColor: Colors.primary,
        borderRadius: 10,
        marginBottom: 20,
        backgroundColor: 'white',
    },
    button: {
        backgroundColor: Colors.primary,
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
    },
});