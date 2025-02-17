import { StyleSheet, Text } from 'react-native';
import React from 'react';
import { FontFamily } from '../../theme/colors';

interface TextProps {
    children: React.ReactNode;
    medium?: boolean;
    bold?: boolean;
    numberOfLines?: number;
    style?: object;
}

const TextComp: React.FC<TextProps> = ({ children, medium, bold, numberOfLines, style }) => {
    return (
        <Text
            numberOfLines={numberOfLines}
            ellipsizeMode="tail"
            style={[
                styles.text,
                medium && styles.medium,
                bold && styles.bold,
                style
            ]}>
            {children}
        </Text>
    );
};

export default TextComp;

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        color: '#000',
        fontFamily: FontFamily.regular,
    },
    medium: {
        fontFamily: FontFamily.medium,
    },
    bold: {
        fontFamily: FontFamily.bold,
    },
});
