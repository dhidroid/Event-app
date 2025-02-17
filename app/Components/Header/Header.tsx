import { View, StyleSheet, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import TextComp from '../Text/TextComp';
import { Profile } from '../../../assets/icons';

const Header = ({ onPress }: any) => {
    return (
        <View style={Style.container}>
            <TextComp medium>Event</TextComp>

            <TouchableOpacity onPress={onPress}>
                <Profile height={30} width={30} fill={'black'} />
            </TouchableOpacity>
        </View>
    )
}

export default Header;

const Style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 50,

    },
});
