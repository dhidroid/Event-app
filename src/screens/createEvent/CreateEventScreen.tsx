import { StyleSheet, Text, View, Image, ActivityIndicator, ScrollView, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';
import LinearGradient from 'react-native-linear-gradient';
import { Formik } from 'formik';
import firebse from '@react-native-firebase/app'
import '@react-native-firebase/database';

const UNSPLASH_ACCESS_KEY = 'NI_RW_iY_myOgw568hPRqb9NzAtVGHEbii9hFqyOYu8';
const UNSPLASH_URL = `https://api.unsplash.com/photos/random?query=event,conference,meeting&client_id=${UNSPLASH_ACCESS_KEY}`;

const CreateEventScreen = () => {
    const [imageUrl, setImageUrl] = useState(null);
    const [loading, setLoading] = useState(true);
    const [showDatePicker, setShowDatePicker] = useState(false);

    useEffect(() => {
        axios.get(UNSPLASH_URL)
            .then((response) => {
                setImageUrl(response.data.urls.regular);
            })
            .catch((error) => console.error('Error fetching image:', error))
            .finally(() => setLoading(false));
    }, []);

    const handleEventSubmit = (values: any) => {
        const newEventRef = firebse.database().ref('/events');
        newEventRef.set({
            eventName: values.eventName,
            eventDate: values.eventDate.toISOString(),
            eventDescription: values.eventDescription,
            eventLocation: values.eventLocation,
            ticket: values.ticket,
            imageUrl: imageUrl
        }).then(() => {
            Alert.alert("Success", "Event added to Firebase!");
        }).catch(error => {
            Alert.alert("Error", error.message);
        });
    };

    return (
        <LinearGradient colors={['rgba(87, 89, 246, 0.25)', 'rgba(255, 255, 255, 0)']} style={{ flex: 1, paddingHorizontal: 16 }}>
            <SafeAreaView>
                <ScrollView>
                    <View style={{ marginTop: 20 }}>
                        {loading ? (
                            <ActivityIndicator size="large" color="#000" />
                        ) : (
                            <TouchableOpacity onPress={() => Alert.alert('Image URL', imageUrl)}>
                                <Image source={{ uri: imageUrl }} style={styles.image} />
                            </TouchableOpacity>
                        )}
                    </View>
                    <Formik
                        initialValues={{
                            eventName: '',
                            eventDate: new Date(),
                            eventDescription: '',
                            eventLocation: '',
                            ticket: ''
                        }}
                        onSubmit={handleEventSubmit}
                    >
                        {({ handleChange, handleBlur, handleSubmit, setFieldValue, values }) => (
                            <View>
                                <TextInput
                                    placeholder='Event Name'
                                    placeholderTextColor={"#C8C2F2"}
                                    style={styles.input}
                                    onChangeText={handleChange('eventName')}
                                    onBlur={handleBlur('eventName')}
                                    value={values.eventName}
                                />
                                <TouchableOpacity onPress={() => setShowDatePicker(true)}>
                                    <Text style={styles.dateText}>{values.eventDate.toDateString()}</Text>
                                </TouchableOpacity>
                                <TextInput
                                    placeholder='Event Description'
                                    placeholderTextColor={"#C8C2F2"}
                                    style={styles.input}
                                    onChangeText={handleChange('eventDescription')}
                                    onBlur={handleBlur('eventDescription')}
                                    value={values.eventDescription}
                                />
                                <TextInput
                                    placeholder='Event Location'
                                    placeholderTextColor={"#C8C2F2"}
                                    style={styles.input}
                                    onChangeText={handleChange('eventLocation')}
                                    onBlur={handleBlur('eventLocation')}
                                    value={values.eventLocation}
                                />
                                <TextInput
                                    placeholder='Ticket Price'
                                    placeholderTextColor={"#C8C2F2"}
                                    style={styles.input}
                                    onChangeText={handleChange('ticket')}
                                    onBlur={handleBlur('ticket')}
                                    value={values.ticket}
                                    keyboardType="numeric"
                                />
                                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                                    <Text style={styles.buttonText}>Submit Event</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                    </Formik>
                </ScrollView>
            </SafeAreaView>
        </LinearGradient >
    );
};

export default CreateEventScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: "100%",
        height: 300,
        borderRadius: 10,
        backgroundColor: "#BAB1F8",
        marginBottom: 20
    },
    input: {
        paddingVertical: 15,
        color: 'gray',
        fontSize: 18,
        fontWeight: "500",
        borderBottomWidth: 1,
        borderBottomColor: "#C8C2F2",
        marginBottom: 20
    },
    dateText: {
        fontSize: 18,
        color: '#5F28FD',
        marginBottom: 20
    },
    button: {
        backgroundColor: '#5F28FD',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center'
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    }
});