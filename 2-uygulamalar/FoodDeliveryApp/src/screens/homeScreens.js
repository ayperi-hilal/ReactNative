import React from "react";
import { StyleSheet, Text, View ,StatusBar} from 'react-native';
import Header from "../components/Header";

/*ana ekranı oluşturacağımız iskelet yapısı kurmamız grekmektedir.*/
const homeScreens=()=>{

    return (
        <View style={styles.container}>
            <Header/>
            <Text>UYGULAMANIN ANA EKRANIDIR</Text>
            <StatusBar style="auto" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default homeScreens;/*var sayılan ana ekran tanımlandı.*/