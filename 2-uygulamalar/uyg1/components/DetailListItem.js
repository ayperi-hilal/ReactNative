import React from "react";
import { StyleSheet,View,Text } from "react-native";
import Icon from 'react-native-vector-icons';
import PropTypes from 'prop-types';
import colors from "../utils/colors";
import { color } from "react-native-reanimated";

export default function DetailListItem({icon,title,subtitle}){
    return (
        <View style={styles.borderContainer}>
            <View style={styles.wrapper}>
                <View style={styles.container}>
                    {icon &&(
                        <Icon
                        name={icon}
                        size={24}
                        style={{
                            color:colors.black,
                            marginRight:20,
                        }}
                        />
                    )}
                    <View style={styles.contentContainer}>
                        <Text style={[styles.title]}>{title}</Text>

                        {subtitle&&(
                            <Text style={styles.subtitle}>{subtitle}</Text>
                        )}
                    </View>
                </View>
            </View>
        </View>
    );
}

DetailListItem.propTypes={
    icon:PropTypes.string,
    title:PropTypes.string.isRequired,
    subtitle:PropTypes.string,

};
DetailListItem.defaultProps={
    icon:null,
    subtitle:null,
};

const styles=StyleSheet.create({
    borderContainer:{
        paddingLeft:24,
    },
    wrapper:{
        flexDirection:'row',
        paddingTop:16,
    },
})