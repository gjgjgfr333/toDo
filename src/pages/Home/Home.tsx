import React, {useCallback, useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {ButtonPressable} from "@/src/shared/ui/Button";
import {ListIsEmpty} from "@/src/shared/ui/ListIsEmpty";
import {buttonColor, mainBackground, whiteColor} from "@/src/shared/const/constColor";
import {router} from "expo-router";
import {observer} from "mobx-react";
import {useStore} from "@/src/entities/RootStore";
import {Card} from "@/src/shared/ui/Card";
import {TrashSVG} from "@/src/shared/ui/SVG/TrashSVG";
import {ModalWindow} from "@/src/shared/ui/ModalWindow";
import {borderRadius} from "@/src/shared/const/otherConst";

export const Home = observer(() => {

    const {dataStore} = useStore()

    const {getPostData, deletePostData, deleteAllPostsData} = dataStore
    const data = getPostData

    const [isOpenModal, setIsOpenModal] = useState(false)

    const navigateToCreatePostPage = useCallback(() => {
        router.navigate('/(tabs)/explore');
    }, [])

    const deletePostFunc = useCallback((postId: string) => {
        deletePostData(postId)
    }, [])

    const deleteAllPostsFunc = useCallback(() => {
        deleteAllPostsData()
        setIsOpenModal(false)
    }, [])

    const closeModal = () => {
        setIsOpenModal(false)
    }

    return (
        <View style={styles.mainContainer}>
            {data.length > 1 && (
                <TouchableOpacity
                    onPress={() => setIsOpenModal(true)}
                    style={styles.deleteButton}
                >
                    <TrashSVG/>
                </TouchableOpacity>)
            }

            <View style={styles.listContainer}>
                {data.length === 0 ? (
                    <ListIsEmpty/>
                ) : (
                    <FlatList
                        data={data}
                        renderItem={({item}) => (
                            <Card
                                key={item.postId}
                                src={item.photo}
                                title={item.name}
                                description={item.description}
                                mode={item.mode}
                                deleteFunc={() => deletePostFunc(item.postId)}
                                dataCreatePost={item.dataCreate}
                            />
                        )}
                        keyExtractor={(item) => item.postId}
                    />
                )}
            </View>

            <ButtonPressable
                onPressFunc={navigateToCreatePostPage}
            >
                <Text style={styles.text}>New Post</Text>
            </ButtonPressable>

            {isOpenModal && (
                <ModalWindow
                    onSuccess={deleteAllPostsFunc}
                    closeModal={closeModal}
                />
            )}
        </View>
    );
});

const styles = StyleSheet.create({
    deleteButton: {
        marginBottom: 10,
        left: 170,
        backgroundColor: buttonColor,
        borderRadius: borderRadius,
    },
    mainContainer: {
        flex: 1,
        backgroundColor: mainBackground,
        alignItems: "center",

        paddingTop: 10,
        paddingBottom: 10,
    },
    text: {
        fontSize: 25,
        color: whiteColor
    },
    scrollContainer: {
        gap: 10
    },
    listContainer: {
        flex: 1,
        marginBottom: 20,
    },
})