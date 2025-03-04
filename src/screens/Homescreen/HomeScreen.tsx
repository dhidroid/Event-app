import {
    Pressable,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';
import TopTabNavigator from '../../compoents/TopTab/TopTab';
import { NoData } from '../../../assets/index'
const HomeScreen = () => {
    const [screenIndex, setScreenIndex] = React.useState<number>(1);
    const [data, setData] = React.useState([]);

    const sliderData = [
        { id: 1, Name: "Upcoming" },
        { id: 2, Name: "Past" }
    ];

    const TopIconsData = [
        {
            icon: 'ticket-outline',
            onPress: () => {
                console.log('ticket press');
            },
        },
        {
            icon: 'calendar-month-outline',
            onPress: () => {
                console.log('calendar press');
            },
        },
        {
            icon: 'compass-outline',
            onPress: () => {
                console.log('compass press');
            },
        },
    ];

    // Function to render content based on screenIndex
    const renderContent = () => {
        switch (screenIndex) {
            case 1:
                return (
                    <View style={styles.screenContainer}>
                        {data.length === 0 ? (
                            <View style={{
                                justifyContent: "center",
                                alignItems: "center",
                                rowGap: 18
                            }}>
                                <NoData height={250} fill={"black"} />
                                <Text>No Upcoming Events</Text>
                            </View>
                        ) : (null)}

                    </View>
                );
            case 2:
                return (
                    <View style={styles.screenContainer}>
                        <Text style={styles.screenText}>🎉 Past Events</Text>
                    </View>
                );
            default:
                return null;
        }
    };

    return (
        <LinearGradient
            colors={['rgba(87, 89, 246, 0.25)', 'rgba(255, 255, 255, 0)']}
            style={styles.container}
        >
            {/* Top Header */}
            <View style={styles.header}>
                {/* Left Section */}
                <View style={{ flexDirection: 'row', gap: 18 }}>
                    {TopIconsData.map((data, index) => (
                        <TouchableOpacity key={index} onPress={data.onPress}>
                            <MaterialCommunityIcons name={data.icon} size={25} />
                        </TouchableOpacity>
                    ))}
                </View>

                {/* Right Section (User Profile) */}
                <View>
                    <Pressable>
                        <FontAwesome5 name="user-circle" size={25} />
                    </Pressable>
                </View>
            </View>

            {/* Main Content */}
            <View style={{ flex: 2, marginTop: 50 }}>
                {/* Title & Tabs */}
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Event</Text>

                    <TopTabNavigator
                        tabs={sliderData}
                        initialActiveTabId={screenIndex}
                        onTabSelect={(id: number) => {
                            console.log(`Tab Selected: ${id}`);
                            setScreenIndex(id);
                        }}
                    />
                </View>

                {/* Render Content Based on Screen Index */}
                {renderContent()}
            </View>
        </LinearGradient>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginTop: 50,
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
    },
    title: {
        fontWeight: "700",
        color: "black",
        fontSize: 30,
    },
    screenContainer: {
        // marginTop: 20,
        // padding: 20,
        // backgroundColor: '#F3F3F3',
        // borderRadius: 10,
        // alignItems: 'center',
        // justifyContent: 'center',
        justifyContent: "center",
        alignContent: "center",
        flex: 2,
        alignItems: "center"
    },
    screenText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333',
    },
});
