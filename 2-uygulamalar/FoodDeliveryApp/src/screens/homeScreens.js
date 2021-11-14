import React from "react";
import { StyleSheet, Text, View, StatusBar } from 'react-native';

import Header from "../components/Header";
import Cart from "../components/Kart";
import Icon from "../components/Icon";

/*ana ekranı oluşturacağımız iskelet yapısı kurmamız grekmektedir.*/
const homeScreens = () => {

    return (
        <View style={styles.container}>
            <Header />
            <Text>UYGULAMANIN ANA EKRANIDIR</Text>
            <Cart />
            <Icon />
            <StatusBar barStyle="dark-container" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#6c5ce7',
        alignItems: 'center',
        // justifyContent: 'center',
    },
});

export default homeScreens;/*var sayılan ana ekran tanımlandı.*/