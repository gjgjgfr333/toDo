import React, {memo} from 'react';
import {StyleProp, StyleSheet, TouchableOpacity, ViewStyle} from "react-native";
import {buttonColor} from "@/src/shared/const/constColor";

interface ButtonProps {
    children?: React.ReactNode;
    onPressFunc?: () => void;
    style?: StyleProp<ViewStyle>
    disabled?: boolean;
}

export const ButtonPressable = memo((props: ButtonProps) => {

    const {children, onPressFunc, style, disabled} = props;

    return (
        <TouchableOpacity
            style={StyleSheet.flatten([styles.button, style, disabled ? {opacity: 0.5} : {}])}
            onPress={onPressFunc}
            disabled={disabled}
        >
            {children}
        </TouchableOpacity>
    );
});

const styles = StyleSheet.create({
    button: {
        width: '90%',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: buttonColor,
        borderRadius: 10,
    }
})