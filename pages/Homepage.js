import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, ImageBackground } from 'react-native';

export default function Homepage( {navigation} ) {

    const image = { uri: "https://digidivespot.nl/divespot-images/snorkeling.jpg" };

    return (
    <View style={styles.container}>
        <ImageBackground source={image} style={styles.image}>
            <StatusBar style="auto" />
            <View style={styles.wrapper}>
                <Text style={styles.titleText}>FIND YOUR PERFECT DIVESPOT</Text>
                <TouchableHighlight
                title="Alle locaties"
                onPress={() => navigation.navigate('Divespots')}
                >
                    <View style={styles.button}>
                        <Text style={styles.buttontext}>Alle locaties</Text>
                    </View>
                </TouchableHighlight>
            </View>
        </ImageBackground>
    </View>



);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        alignItems: 'center',
        backgroundColor: "#000000",
        padding: 15,
        maxWidth: '50%'
    },
    titleText: {
        marginTop: 450,
        marginBottom: 15,
        fontSize: 20,
        fontWeight: "bold"
    },
    buttontext: {
        color: "white"
    },
    image: {
        flex: 1,
        width: "100%",
    },
    wrapper: {
        alignSelf: 'center',
        alignItems: 'center'
    },
});
