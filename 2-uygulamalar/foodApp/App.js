import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Yemek Tarifi Uygulamamıza Hoş geldiniz </Text>,
      <StatusBar style="auto" />
    </View>
    

  );
}

const menu=()=>{
        <SafeAreaView>
         <TouchableOpacity style={styles.row}>
       
         <Text style={styles.isim}> tarif adı</Text>
        </TouchableOpacity>

        <View style={styles.cizgi}/>
        
        <TouchableOpacity style={styles.row}>
       
       <Text style={styles.isim}> tarif adı</Text>
      </TouchableOpacity>

        <View style={styles.cizgi}/>

        </SafeAreaView>

}
 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  isim:{

    color:'red',
    
  },
  cizgi:{
        height:StyleSheet.hairlineWidth,
        /*bu kısımda yüksekliğe bi sayı değerii verebilirdik fakat ekran ekrana değer değişimi olacağı için en küçük değeri bu şekilde verdik.*/ 
        backgroundColor:'#e2e2e2',
        marginStart:16
  },

  row:{
    paddingHorizontal:16,/*hem sağdan hemdesoldan boşluk bırakacaktır.*/
    paddingVertical:20,/*hem üstten hemde alttan boşluk bırakacaktır.*/

  },
});
