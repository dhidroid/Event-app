import { ActivityIndicator, StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';

interface RNButtonTyle {
    title: string,
    onPress?: () => void,
    style?: any,
    loading?: boolean
}
const RNButton: React.FC<RNButtonTyle> = ({ title, onPress, style, loading }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
            {loading ? (
                <ActivityIndicator size={'small'} color={"#5F28FD"} />
            ) : (
                <Text style={styles.text}>{title}</Text>
            )}

        </TouchableOpacity>
    );
};

export default RNButton;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingHorizontal: 136,
        paddingVertical: 10,
        borderRadius: 10
    },
    text: {
        textAlign: "center",
        fontSize: 18,
        fontWeight: "900"
    },
});
