import React from "react";
import { StyleSheet, Text, View, StatusBar, FlatList } from 'react-native';

import Header from "../components/Header";
import kart from "../components/Kart";
import Cart from "../components/Kart";



const restoranlar = [
    {
        name: "1.restoran",
        kategori: "pasta, kek, poğaça",
        zaman: '35 dakika',
        uzaklik: '3,7 km',
        image: require('../../assets/image1.jpg'),
        id: 1
    },
    {
        name: "2.restoran",
        kategori: "tuzlu, kek, poğaça",
        zaman: '55 dakika',
        uzaklik: '5 km',
        image: require('../../assets/image2.jpg'),
        id: 2,
    },
    {
        name: "3.restoran",
        kategori: "tatlı, kek, poğaça",
        zaman: '5 dakika',
        uzaklik: '1 km',
        image: require('../../assets/image3.jpg'),
        id: 3,
    }, {
        name: "4.restoran",
        kategori: "börek, kek, poğaça",
        zaman: '100 dakika',
        uzaklik: '20 km',
        image: require('../../assets/image4.jpg'),
        id: 4,
    },
    {
        name: "5.restoran",
        kategori: "baklava, kek, poğaça",
        zaman: '80 dakika',
        uzaklik: '5 km',
        image: require('../../assets/image5.jpg'),
        id: 5,
    },
];

/*ana ekranı oluşturacağımız iskelet yapısı kurmamız grekmektedir.*/
const homeScreens = () => {

    return (
        <View style={styles.container}>
            <Header />
            {/* <Cart />*/}
            <StatusBar barStyle="dark-container" />
            <FlatList
                data={restoranlar}
                renderItem={({ item }) => {
                    return <Cart info={item} />;
                }}
                keyExtractor={(restoran) => restoran.id.toString()}
                showsHorizontalScrollIndicator={false}
            />
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