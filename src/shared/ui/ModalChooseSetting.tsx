import React, {memo, useCallback} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {DownArrowSvg} from "@/src/shared/ui/SVG/DownArrowSVG";
import {ButtonPressable} from "@/src/shared/ui/Button";

interface ModalChooseSettingProps {
    setIsOpenModal: (value: boolean) => void,
    list: string[],
    selectItem: string,
    setSelectItem: (value: string) => void,
}

export const ModalChooseSetting = memo((props: ModalChooseSettingProps) => {

    const {setIsOpenModal, list, selectItem, setSelectItem} = props;

    const onCloseFunc = useCallback((item: string) => {
        setIsOpenModal(false)
        setSelectItem(item)
    }, [])

    return (
        <View style={styles.overlay}>
            <View style={styles.viewData}>
                {list.map((item) => (
                    <Pressable
                        key={item}
                        onPress={() => onCloseFunc(item)}
                        style={styles.buttonContainer}
                    >
                        <Text style={styles.text}>{item}</Text>
                        {item === selectItem && (<DownArrowSvg/>)}
                    </Pressable>
                ))}

                <ButtonPressable
                    onPressFunc={() => setIsOpenModal(false)}
                    style={styles.buttonClose}
                >
                    <Text style={[styles.text, {color: '#fff'}]}>Close</Text>
                </ButtonPressable>
            </View>
        </View>
    );
});

const styles = StyleSheet.create({
    buttonClose: {
        position: 'absolute',
        bottom: 90,
        left: 20,
        width: '100%',
    },
    buttonContainer: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
    },
    overlay: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(128, 128, 128, 0.5)',
        zIndex: 1,
    },
    viewData: {
        position: 'absolute',
        left: 0,
        bottom: 0,
        width: '100%',
        height: '50%',
        backgroundColor: '#fff',
        zIndex: 5,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
    },
    text: {
        fontSize: 20,
        color: 'gray',
        fontWeight: '600',
    }
})