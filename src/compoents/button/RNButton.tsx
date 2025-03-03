import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';

interface RNButtonTyle {
    title: string,
    onPress?: () => void,
    style?: any
}
const RNButton: React.FC<RNButtonTyle> = ({ title, onPress, style }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
};

export default RNButton;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingHorizontal: 150,
        paddingVertical: 15,
        borderRadius: 10
    },
    text: {
        textAlign: "center",
        fontSize: 18,
        fontWeight: "900"
    },
});
