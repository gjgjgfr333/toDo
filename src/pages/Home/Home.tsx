import React, {useCallback} from 'react';
import {Pressable, ScrollView, StyleSheet, Text, View} from "react-native";
import {ButtonPressable} from "@/src/shared/ui/Button";
import {ListIsEmpty} from "@/src/shared/ui/ListIsEmpty";
import {mainBackground} from "@/src/shared/const/constColor";
import {router} from "expo-router";
import {observer} from "mobx-react";
import {useStore} from "@/src/entities/RootStore";
import {Card} from "@/src/shared/ui/Card";
import {TrashSVG} from "@/src/shared/ui/SVG/TrashSVG";

export const Home = observer(() => {

    const {dataStore} = useStore()

    const {getData, deletePost, deleteAllPosts} = dataStore

    const data = getData

    const navigateToCreatePostPage = useCallback(() => {
        router.navigate('/(tabs)/explore');
    }, [])

    const deletePostMemo = useCallback((postId: string) => {
        deletePost(postId)
    }, [])

    const deleteAllPostsMemo = useCallback(() => {
        deleteAllPosts()
    }, [])

    return (
        <View style={styles.mainContainer}>
            {data.length > 1 && (
                <Pressable
                    onPress={deleteAllPostsMemo}
                    style={styles.deleteButton}
                >
                    <TrashSVG/>
                </Pressable>)}

            <ScrollView
                style={styles.scrollContainer}
            >
                {data.length === 0 ? (
                    <ListIsEmpty/>
                ) : (
                    data.map((item) => (
                        <Card
                            key={item.postId}
                            src={item.photo}
                            title={item.name}
                            description={item.description}
                            mode={item.mode}
                            deleteFunc={() => deletePostMemo(item.postId)}
                            dataCreatePost={item.dataCreate}
                        />
                    ))
                )}
            </ScrollView>

            <ButtonPressable
                onPressFunc={navigateToCreatePostPage}
            >
                <Text style={styles.text}>New Post</Text>
            </ButtonPressable>
        </View>
    );
});

const styles = StyleSheet.create({
    deleteButton: {
        marginBottom: 10,
        left: 150,
    },
    mainContainer: {
        flex: 1,
        backgroundColor: mainBackground,
        alignItems: "center",
        justifyContent: "space-between",
        paddingTop: 10,
        paddingBottom: 10,
    },
    text: {
        fontSize: 25,
        color: '#fff'
    },
    scrollContainer: {
        gap: 10
    }
})