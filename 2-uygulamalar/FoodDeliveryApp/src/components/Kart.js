import React from "react";
import { Text, View, StyleSheet, Dimensions, Image } from "react-native";
import IconExample from "./Ionicons";

const iconcolor = '#6c5ce7'
const kart = ({ info }) => {
    const { name, kategori, zaman, uzaklik, image } = info;
    return (
        <View style={styles.container}>
            <View style={styles.kartContainer}>
                <Image
                    style={styles.imageStyle}
                    source={image}
                />
                <View style={styles.InfoStyle}>
                    <Text style={styles.titleStyle}>{name}</Text>
                    <Text style={styles.kafagoriStyle}>{kategori}</Text>

                    <View style={styles.iconlabelStyle}>

                        <IconExample name="ios-time" label={zaman} color={iconcolor} />
                        <IconExample name="map-outline" label={uzaklik} color={iconcolor} />
                    </View>

                </View>
            </View>
        </View>
    );
};
const genislik = Dimensions.get("window").width;
const offset = 40;
const radius = 20;

const styles = StyleSheet.create({
    container: {
        width: genislik - offset,
        alignItems: 'center',
        marginTop: 25,
    },
    kartContainer: {
        width: genislik - 20,
        backgroundColor: '#a29bfe',
        height: 220,
        borderRadius: radius,

        shadowColor: '#000',
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 0.75,
        shadowRadius: 5,
        elevation: 9,
        marginTop: 20,
    },
    imageStyle: {
        height: 130,
        width: genislik - offset,
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
    iconlabelStyle: {
        flexDirection: 'row',
        marginTop: 10,
    },

});
export default kart;