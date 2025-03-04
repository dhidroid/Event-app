import { Dimensions, StyleSheet } from "react-native";

const { height } = Dimensions.get("screen")
export const SplashStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        width: '100%',
        height: '100%',
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentContainer: {
        position: 'absolute',
        bottom: 50,
        alignSelf: 'center',
        paddingHorizontal: 16
    },
    title: {
        color: 'white',
        fontSize: 30,
        fontWeight: '400',
    },
    subtitle: {
        color: 'white',
        fontSize: 40,
        fontWeight: '800',
    },
})