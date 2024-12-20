import React from 'react';
import {Pressable, StyleSheet, Text, View} from "react-native";
import Svg, {Path} from "react-native-svg";
import {router} from "expo-router";
import {blackColor} from "@/src/shared/const/constColor";

export const CreatePostHeader = () => {

    return (
        <View style={styles.header}>
            <Pressable
                style={styles.button}
                onPress={() => router.push('/')}
            >
                <Svg>
                    <Path
                        d='M15.5429 32.4571C15.1524 32.0666 15.1524 31.4334 15.5429 31.0429L21.9069 24.6789C22.2974 24.2884 22.9305 24.2884 23.3211 24.6789C23.7116 25.0694 23.7116 25.7026 23.3211 26.0931L18.6642 30.75H47.75C48.3023 30.75 48.75 31.1977 48.75 31.75C48.75 32.3023 48.3023 32.75 47.75 32.75H18.6642L23.3211 37.4068C23.7116 37.7974 23.7116 38.4305 23.3211 38.8211C22.9305 39.2116 22.2974 39.2116 21.9069 38.8211L15.5429 32.4571Z'
                        fill='black'
                    />
                </Svg>
            </Pressable>
            <Text style={styles.text}>Create new post</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 70,
        position: 'relative'
    },
    text: {
        fontSize: 20,
        color: blackColor,
        fontWeight: '600',
    },
    button: {
        position: 'absolute',
        top: 10,
        left: 0,
        width: 70,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
    }
})