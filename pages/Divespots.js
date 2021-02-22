import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import {StyleSheet, Text, View, ScrollView, ActivityIndicator} from 'react-native';
import {StatusBar} from "expo-status-bar";
import axios from 'axios';
import DivespotCard from "../component/DivespotCard";

export default function Divespots() {
    const [divesites, setDivesites] = useState(null);
    const [loading, toggleLoading] = useState(false);

    useEffect( () => {
        async function fetchData() {
            toggleLoading(true);
            try {
                const result = await axios.get("https://test-api-be2cb-default-rtdb.europe-west1.firebasedatabase.app/.json");
                setDivesites(result.data.divespots);
                toggleLoading(false);
            } catch (e) {
                console.error(e);
            }
        }
        fetchData();


    }, []);

    return (
        <ScrollView style={styles.scrollView}>
            <StatusBar style="auto" />
            <View>
                {loading && (
                    <View>
                    <ActivityIndicator style={styles.loading} size='large' />
                    <Text style={styles.loadingText}>Loading...</Text>
                    </View>
                        )}
                {divesites && divesites.map((location, index) => (
                        <DivespotCard
                            image={location.image}
                            name={location.name}
                            address={location.address}
                            divetype={location.divetype}
                            depth={location.depth}
                            sight={location.sight}
                            id={location.id}
                            key={location.id}
                        /> ))}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollView: {
        marginHorizontal: 0,
        backgroundColor: 'white'
    },
    loading: {
        marginTop: 150,
        alignContent: 'center',
        alignSelf: 'center',
    },
    loadingText: {
        marginTop: 10,
        alignContent: 'center',
        alignSelf: 'center',
        fontSize: 20
    },

});