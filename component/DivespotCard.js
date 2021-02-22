import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function DivespotCard(props) {

const { image, name, address, divetype, depth, sight, id } = props;

return (

    <View style={styles.container} key={id}>

        <Image source={{uri: image}} style={{width: 125, height: 125, marginRight: 5}} />

            <View style={styles.divedata}>
                <Text style={{fontWeight: 'bold', fontSize: 15, paddingBottom: 8}}>{name}</Text>
                <Text>Adres:</Text>
                <Text>{address}</Text>
                <Text>Duiksoort: {divetype}</Text>
                <Text>Diepte: {depth}</Text>
                <Text>Zicht: {sight}</Text>
            </View>
    </View>
);
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
        padding: 5,
        backgroundColor: '#F7F5FB'
    },
    divedata: {
        flexShrink: 1
    }

});