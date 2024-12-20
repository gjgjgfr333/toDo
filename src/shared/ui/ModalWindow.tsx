import React, {memo} from 'react';
import {Modal, Text, View, StyleSheet} from "react-native";
import {ButtonPressable} from "@/src/shared/ui/Button";
import {buttonColor, grayColor, whiteColor} from "@/src/shared/const/constColor";

interface ModalWindowProps {
    onSuccess: () => void;
    closeModal: () => void
}

export const ModalWindow = memo((props: ModalWindowProps) => {

    const {onSuccess, closeModal} = props

    return (
        <Modal
            transparent={true}
            animationType="fade"
        >
            <View style={styles.overlay}>
                <View style={styles.modalContent}>

                    <Text style={styles.text}>Do you want delete all posts?</Text>

                    <View style={styles.container}>
                        <ButtonPressable
                            onPressFunc={onSuccess}
                            style={StyleSheet.flatten([styles.button, {backgroundColor: grayColor}])}
                        >
                            <Text style={styles.text}>Yes</Text>
                        </ButtonPressable>
                        <ButtonPressable
                            onPressFunc={closeModal}
                            style={styles.button}
                        >
                            <Text style={styles.text}>No</Text>
                        </ButtonPressable>
                    </View>
                </View>
            </View>
        </Modal>
    );
});

const styles = StyleSheet.create({
    container: {
        gap: 20,
    },
    button: {
        width: 200,
        backgroundColor: buttonColor,
    },
    text: {
        fontSize: 20,
        color: whiteColor,
        fontWeight: 'bold'
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.7)', // Полупрозрачный черный фон
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        padding: 20,
        alignItems: 'center',
        gap: 20
    },
})