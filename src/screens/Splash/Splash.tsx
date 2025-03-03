import { Image, Text, View } from 'react-native'
import React from 'react'
import { Icon } from '../../../assets'
import LinearGradient from 'react-native-linear-gradient'
import { SplashStyle } from './style/Splashstyle'

const Splash = () => {
    return (
        <LinearGradient colors={['#7F52FF', '#5F28FD', '#250F63', '#180350']} style={SplashStyle.overlay}>
            <View style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}>
                <Image source={Icon} style={{ height: 100, width: 100, borderRadius: 100 }} />
            </View>
            <View style={{ alignItems: 'center', paddingBottom: 30 }}>
                <Text style={{ color: "white", fontSize: 20, fontWeight: '200' }}>
                    Made with Dhinesh 💙
                </Text>
            </View>
        </LinearGradient>
    )
}

export default Splash
