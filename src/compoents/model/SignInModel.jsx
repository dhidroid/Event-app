import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Modal from 'react-native-modal';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import { useState } from "react";
import { BlurView } from '@react-native-community/blur';



const SignInModal = ({isVisible}) => {

    const signInWithGoogle = async () => {
    };

    const openTermsAndConditions = () => {
        console.log("Opening Terms & Conditions");
    };

    return (
        <Modal isVisible={isVisible}>
            <BlurView style={{ flex: 1, position: 'absolute', width: '100%',  }} blurType="extraDark" blurAmount={10} />
            <View style={{  }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold',}}>Sign In</Text>
                <TouchableOpacity 
                    onPress={signInWithGoogle} 
                    style={{ backgroundColor: 'white', padding: 10, borderRadius: 5, alignItems: 'center' }}>
                    <Text style={{ color: 'white', fontSize: 16 }}>Sign in with Google</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={openTermsAndConditions} style={{ marginTop: 10, alignSelf: 'center' }}>
                    <Text style={{ color: 'blue', fontSize: 14 }}>Terms & Conditions</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    );
};

export default SignInModal;
