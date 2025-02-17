import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Colors, FontFamily, FontSizes } from '../../theme/colors';
import TextComp from '../../Components/Text/TextComp';

const SplashScreen = () => {
    return (
        <View style={Style.container}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 'auto', }}>
                <Text style={Style.text}>OwelEvent</Text>
            </View>
        </View>
    );
};

export default SplashScreen;

const Style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary,
    },
    text: {
        color: Colors.white,
        fontSize: 50,
        fontFamily: FontFamily.medium,
    },
});
