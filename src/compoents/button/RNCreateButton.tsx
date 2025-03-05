import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


const RNCreateButton = ({ title, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Icon name="plus" color={"#98999B"} size={20} />
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

export default RNCreateButton

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 5,
        backgroundColor: "#EAE9EE",
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderRadius: 10
    },
    text: {
        color: "#98999B",
        textAlign: "center",
        fontSize: 15,
        fontWeight: "600"
    }
})