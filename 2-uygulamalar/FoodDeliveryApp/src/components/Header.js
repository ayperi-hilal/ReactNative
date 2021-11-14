import React from "react";
import { StyleSheet, Text, View, StatusBar, Dimensions } from 'react-native';
//Dimensions uygulamanın çalıştığı cihazı tanmak için kullanılır. bunun sonucunda responsive bir taarım olmuş olmaktadır.



const cihazGenislik = Dimensions.get("window").width;

const Header = (props) => {
    /* tekrarlı bir şekilde kullanabilmek için props parametresini verdik. */
    return (
        <View style={styles.container}>
            <Text style={styles.labelStyles}>uygulamamnın başlığı buraya yazılacak</Text>
        </View>
    );
};

/*Bu kısıma şimdi kullanılacak olan sitilleri tanımlayalım. */
const styles = StyleSheet.create({
    container: {
        width: cihazGenislik,//cihazın genişliği ile uyumlu hale getirildi.
        height: 90,
        backgroundColor: '#a29bfe',
        justifyContent: 'flex-end',
        paddingBottom: 40,
        alignItems: 'center',

    },

    labelStyles: {
        fontSize: 24,
        fontWeight: '700',


    },
});


export default Header;/*dışa aktarım için bu komutu yazmamız gerekmektedir.*/
/*olıuştırulan bu bileşeni homescreens e dahil etmemiz gerekmketedir.bu nedenle import komutunda bundan bahsediyoruz. */
