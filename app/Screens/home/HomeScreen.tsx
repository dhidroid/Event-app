import { Alert, StatusBar, View } from 'react-native';
import React from 'react';
import TextComp from '../../Components/Text/TextComp';
import Header from '../../Components/Header/Header';
import { Colors } from '../../theme/colors';



const HomeScreen = () => {
    return (
        <View style={{ display: 'flex', flex: 1, paddingHorizontal: 16, backgroundColor: Colors.background }}>
            <Header onPress={() => alert("profile")} />
            <View style={{ display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <TextComp>Home</TextComp>
            </View>
            <StatusBar
                translucent
                backgroundColor="transparent"
                barStyle="dark-content" />
        </View >
    );
};

export default HomeScreen;
