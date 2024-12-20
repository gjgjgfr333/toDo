import React, {memo} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {borderRadius} from "@/src/shared/const/otherConst";

interface StatusViewProps {
    backgroundColor: string;
    color: string;
    mode: string
}

export const StatusView = memo((props: StatusViewProps) => {

    const {backgroundColor, color, mode} = props

    return (
        <View style={StyleSheet.flatten([styles.modeContainer, {backgroundColor}])}>
            <Text style={StyleSheet.flatten([styles.modeText, {color}])}>{mode}</Text>
        </View>
    );
});

const styles = StyleSheet.create({
    modeContainer: {
        padding: 5,
        borderRadius: borderRadius,
    },
    modeText: {
        fontSize: 10,
    }
})