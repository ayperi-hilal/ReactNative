import React from "react";
import { Text, View, StyleSheet, Dimensions, Image } from "react-native";

const kart = () => {
    return (
        <View style={styles.kartContainer}>
            <Image
                style={styles.imageStyle}
                source={require('../../assets/image5.jpg')}
            />
            <View style={styles.InfoStyle}>
                <Text style={styles.titleStyle}>Çivi yeni nesil Restaurant</Text>
                <Text style={styles.kafagoriStyle}>Pizza,Patetes,Kahve...</Text>
            </View>
        </View>
    );
};


const genislik = Dimensions.get("window").width;

const radius = 20;

const styles = StyleSheet.create({
    kartContainer: {
        width: genislik - 20,
        backgroundColor: '#a29bfe',
        height: 200,
        borderRadius: radius,

        shadowColor: '#000',
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 0.75,
        shadowRadius: 5,
        elevation: 9,
    },
    imageStyle: {
        height: 130,
        width: genislik - 20,
        borderTopLeftRadius: radius,
        borderTopRightRadius: radius,
        opacity: 0.9,
        alignContent: 'center',
        alignSelf: 'center',
    },
    titleStyle: {
        fontSize: 20,
        fontWeight: '800',
    },

    kafagoriStyle: {
        fontWeight: '200',
    },

    InfoStyle: {
        marginHorizontal: 10,
        marginVertical: 5,
    },
});
export default kart;