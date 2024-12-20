import React, {useMemo, useState} from 'react';
import {Pressable, StyleSheet, Text, TextInput, View} from "react-native";
import {borderRadius} from "@/src/shared/const/otherConst";
import {blackColor, mainBackground, whiteColor} from "@/src/shared/const/constColor";
import {DownArrowSvg} from "@/src/shared/ui/SVG/DownArrowSVG";
import {ModalChooseSetting} from "@/src/shared/ui/ModalChooseSetting";
import * as ImagePicker from 'expo-image-picker'
import {PhotoItem} from "@/src/shared/ui/PhotoItem";
import {observer} from "mobx-react";
import {useStore} from "@/src/entities/RootStore";
import {ButtonPressable} from "@/src/shared/ui/Button";
import {router} from "expo-router";
import {getCurrentData} from "@/src/shared/helper/getCurrentData";

const list = [
    'Published',
    'No published'
]

export const CreatePost = observer(() => {

    const {dataStore} = useStore()
    const {setPostData} = dataStore

    const [inputText, setInputText] = useState<string>('')
    const [selectValue, setSelectValue] = useState<string>(list[0]);
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [description, setDescription] = useState<string>('')
    const [heightDescription, setHeightDescription] = useState<number>()
    const [image, setImage] = useState<string | null>(null)

    const pickImage = async () => {
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (!permissionResult.granted) {
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    }

    const isDisabledButton = useMemo(() => {
        return Boolean(selectValue.length <= 0 || description.length <= 0);
    }, [selectValue, description]);

    const setAllData = () => {
        setPostData({
            description,
            mode: selectValue,
            photo: image,
            name: inputText,
            postId: String(Date.now()),
            dataCreate: getCurrentData()
        })
        router.push('..')
    }

    return (
        <View style={styles.mainContainer}>
            <View style={styles.block}>
                <TextInput
                    value={inputText}
                    onChangeText={(text) => setInputText(text)}
                    style={styles.inputText}
                    placeholderTextColor="#A9A9A9"
                    placeholder={'Name'}
                />
                <Pressable
                    style={styles.selectBlock}
                    onPress={() => setIsOpenModal(true)}
                >
                    <Text style={styles.textSelectBlock}>{selectValue}</Text>
                    <DownArrowSvg/>
                </Pressable>
                <TextInput
                    value={description}
                    onChangeText={(text) => setDescription(text)}
                    style={StyleSheet.flatten([styles.inputText, {height: heightDescription}])}
                    placeholderTextColor="#A9A9A9"
                    placeholder={'Description'}
                    multiline
                    onContentSizeChange={(event) => setHeightDescription(event.nativeEvent.contentSize.height)}
                />
            </View>

            <View style={styles.secondBlock}>
                <Text style={styles.textSelectBlock}>Photo</Text>

                <Pressable
                    onPress={pickImage}
                >
                    <PhotoItem
                        src={image}
                        clearFunc={() => setImage(null)}
                    />
                </Pressable>
            </View>

            <ButtonPressable
                onPressFunc={setAllData}
                style={styles.submitButton}
                disabled={isDisabledButton}
            >
                <Text style={StyleSheet.flatten([styles.textSelectBlock, {color: whiteColor}])}>Select</Text>
            </ButtonPressable>

            {isOpenModal && (
                <ModalChooseSetting
                    setIsOpenModal={setIsOpenModal}
                    list={list}
                    selectItem={selectValue}
                    setSelectItem={setSelectValue}
                />)
            }
        </View>
    );
});

const styles = StyleSheet.create({
    submitButton: {
        position: "absolute",
        bottom: 90,
        left: 20
    },
    inputText: {
        width: '95%',
        height: 50,
        borderRadius: borderRadius,
        backgroundColor: mainBackground,
        fontSize: 20,
        color: blackColor
    },
    mainContainer: {
        paddingBottom: 10,
        height: '100%',
        gap: 15
    },
    block: {
        backgroundColor: '#fff',
        alignItems: "center",
        paddingBottom: 10,
        paddingTop: 10,
        gap: 15,
    },
    secondBlock: {
        gap: 15,
        paddingLeft: 10,
        backgroundColor: '#fff',
        flexDirection: 'column',
        paddingBottom: 10,
        paddingTop: 10,
    },
    selectBlock: {
        width: '95%',
        height: 50,
        borderRadius: borderRadius,
        backgroundColor: mainBackground,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        paddingLeft: 10,
        paddingRight: 10,
    },
    textSelectBlock: {
        fontSize: 20,
        color: '#000'
    }
})