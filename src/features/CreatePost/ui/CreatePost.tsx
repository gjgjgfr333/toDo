import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, TextInput, View} from "react-native";
import {borderRadius} from "@/src/shared/const/otherConst";
import {mainBackground} from "@/src/shared/const/constColor";
import {DownArrowSvg} from "@/src/shared/ui/SVG/DownArrowSVG";
import {ModalChooseSetting} from "@/src/shared/ui/ModalChooseSetting";
import * as ImagePicker from 'expo-image-picker'
import {PhotoItem} from "@/src/shared/ui/PhotoItem";
import {observer} from "mobx-react";
import {DataStore} from "@/src/entities/DataStore";
import {useStore} from "@/src/entities/RootStore";
import {ButtonPressable} from "@/src/shared/ui/Button";
import {router} from "expo-router";

const list = [
    'Published',
    'NoPublished'
]

export const CreatePost = observer(() => {

    const {dataStore} = useStore()
    const {getData, setData} = dataStore

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
            allowsEditing: true, // Позволяет обрезать фото
            aspect: [4, 3], // Пропорции для обрезки (например, 4:3)
            quality: 1, // Качество изображения от 0 до 1
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    }

    const setAllData = () => {
        setData({
            description,
            mode: selectValue,
            photo: image,
            name: inputText
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
                    style={[styles.inputText, {height: heightDescription}]}
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
                    />
                </Pressable>
            </View>

            <ButtonPressable
                onPressFunc={setAllData}
            >
                <Text style={styles.textSelectBlock}>Select</Text>
            </ButtonPressable>

            {isOpenModal && (
                <ModalChooseSetting
                    closeModal={setIsOpenModal}
                    list={list}
                    selectItem={selectValue}
                    setSelectItem={setSelectValue}
                />)
            }
        </View>
    );
});

const styles = StyleSheet.create({
    inputText: {
        width: '95%',
        height: 50,
        borderRadius: borderRadius,
        backgroundColor: mainBackground,
        fontSize: 20,
        color: '#000'
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