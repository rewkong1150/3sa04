import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, FlatList, TouchableHighlight, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
    { place: 'Phuket', code: '83120' },
]

const ZipItem = ({ place, code, navigation }) => (
    <TouchableHighlight onPress={() => navigation.navigate('Weather', { zipCode: code })}>
        <View>
            <View style={styles.cover}>
                <Text style={styles.rewText}>{place}</Text>
                <Text style={styles.rewText}>{code}</Text>
            </View>
        </View>
    </TouchableHighlight>
)


const _keyExtractor = item => item.code

export default function ZipCodeScreen() {
    const navigation = useNavigation()
    return (
        <View style={styles.center}>

            <FlatList
                data={availableZipItems}
                keyExtractor={_keyExtractor}
                renderItem={({ item }) => <ZipItem {...item} navigation={navigation} />}
            />
            <StatusBar style="auto" />
        </View>
    );

}
const styles = StyleSheet.create({
    center: {
        alignItems: 'center',
        fontSize: 30,
        color: '#FFF',
        marginTop: 20,
    },
    simsan: {
        backgroundColor: 'blue',
        padding: "100px",
    },
    container: {
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bigBlue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
      },
      cover: {
        backgroundColor: 'red',
        width: '100%',
        height: 200,
        opacity: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    rewText: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    }


})
