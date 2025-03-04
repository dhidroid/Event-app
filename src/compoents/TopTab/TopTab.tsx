import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface Tab {
    id: number;
    Name: string;
}

interface TopTabNavigatorProps {
    tabs: Tab[];
    onTabSelect: (Name: String) => void;
    initialActiveTabId?: number;
}

export default function TopTabNavigator({
    tabs,
    onTabSelect,
    initialActiveTabId = tabs[0]?.id,
}: TopTabNavigatorProps) {
    const [activeTabId, setActiveTabId] = useState(initialActiveTabId);

    const handleTabPress = (id: number) => {
        setActiveTabId(id);
        onTabSelect(id);
    };

    return (
        <View style={Styles.container}>
            {tabs.map(tab => (
                <TouchableOpacity
                    key={tab.id}
                    style={[
                        Styles.innerContainer,
                        tab.id === activeTabId ? Styles.activeTab : Styles.inactiveTab,
                    ]}
                    onPress={() => handleTabPress(tab.id)}>
                    <Text
                        style={[
                            Styles.text,
                            tab.id === activeTabId ? Styles.activeText : Styles.inactiveText,
                        ]}>
                        {tab.Name}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
    );
}

const Styles = StyleSheet.create({
    container: {
        backgroundColor: '#EDEAFF',
        width: '50%',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 3,
    },
    innerContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        borderRadius: 5,
    },
    activeTab: {
        backgroundColor: 'white',
        borderRadius: 8
    },
    inactiveTab: {
        backgroundColor: '#EDEAFF',
    },
    text: {
        textAlign: 'center',
        fontSize: 14,
    },
    activeText: {
        color: '#5F28FD',
        fontWeight: "500"
    },
    inactiveText: {
        color: 'gray',
    },
});