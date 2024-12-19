import React from 'react';
import {View, StyleSheet, Image} from "react-native";
import logo from '../../../../public/img/MainLogo.jpg'

export const HomeHeader = () => {
    return (
        <View style={styles.headerContainer}>
            <Image
                source={logo}
                style={styles.img}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 70,
        marginTop: 10,
    },
    img: {
        width: 50,
        height: 50,
        borderRadius: 25
    }
})