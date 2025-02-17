import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const OnBoradingScreen = () => {
    return (
        <View style={styles.container}>
            <Text>OnBoradingScreen</Text>
        </View>
    );
};

export default OnBoradingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
