import React from "react";
import { StyleSheet, Text, View } from 'react-native';
//import { Icon } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
//import { Icon } from "react-native-vector-icons/Icon";
//import { Icon } from 'react-native-elements';

const IconExample = ({ name, label, color }) => {
    return (
        <View style={styles.container}>
            <Ionicons name={name} size={15} color={color} style={styles.iconstyle} />
            <Text style={styles.labelStyles}>{label}</Text>
        </View>
    );

};



/*export default class IconExample extends React.Component {
    render() {
        return <Ionicons name="pin-outline" size={13} color="black" />;
    }
}*/



/*
export default class IconExample extends React.Component {
    render() {
        return <Ionicons name="pin-outline" size={32} color="black" />;
    }
}
*/
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginRight: 10,
        alignItems: 'center',
    },
    labelStyles: {
        fontSize: 12,
    },
    iconstyle: {
        marginRight: 2,
    },

});

export default IconExample;