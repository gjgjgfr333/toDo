import React, {memo} from 'react';
import {Pressable, StyleProp, StyleSheet, ViewStyle} from "react-native";
import {buttonColor} from "@/src/shared/const/constColor";

interface ButtonProps {
    children?: React.ReactNode;
    onPressFunc?: () => void;
    style?: StyleProp<ViewStyle>
}

export const ButtonPressable = memo((props: ButtonProps) => {

    const {children, onPressFunc, style} = props;

    return (
        <Pressable
            style={[styles.button, style]}
            onPress={onPressFunc}
        >
            {children}
        </Pressable>
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