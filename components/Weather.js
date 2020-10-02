import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import Forecast from './Forecast';

export default function Weather(props) {

    const apiKey = 'e94a4ddccbcae552028f7b5214a238ff'

    const [forecastInfo, setForecastInfo] = useState({
        main: 'main',
        description: 'description',
        temp: 0,
    })

    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {   

            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=${apiKey}`)
                .then((response) => response.json())
                .then((json) => {
                    setForecastInfo({
                        main: json.weather[0].main,
                        description: json.weather[0].description,
                        temp: json.main.temp
                    });
                    console.log(forecastInfo)
                })
                .catch((error) => {
                    console.warn(error);
                });
        }
    }, [props.zipCode])



    return (
        <View>
            <ImageBackground source={require('../12560185124981.jpg')} style={styles.backdrop}>
                <View style={styles.cover}>
                    <Text style={styles.medium}>Zip Code: {props.zipCode}</Text>
                    <Forecast {...forecastInfo} />
                </View>
            </ImageBackground>
        </View>
    );
}
const styles = StyleSheet.create({
    backdrop: {
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    cover: {
        backgroundColor: '#000',
        width: '100%',
        height: 300,
        opacity: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    medium: {
        fontSize: 20,
        color: '#FFF',
    }
});