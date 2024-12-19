import React, {useEffect} from 'react';
import {StyleSheet, Text, View, ScrollView} from "react-native";
import {ButtonPressable} from "@/src/shared/ui/Button";
import {ListIsEmpty} from "@/src/shared/ui/ListIsEmpty";
import {mainBackground} from "@/src/shared/const/constColor";
import {router} from "expo-router";
import {observer} from "mobx-react";
import {useStore} from "@/src/entities/RootStore";
import {Card} from "@/src/shared/ui/Card";

export const Home = observer(() => {

    const {dataStore} = useStore()

    const data = dataStore.getData

    const navigateToCreatePostPage = () => {
        router.navigate('/(tabs)/explore');
    }

    useEffect(() => {
        console.log(data, 'lfdlflflfllflflflf')

    }, [data])


    return (
        <View style={styles.mainContainer}>


        <ScrollView
            style={styles.scrollContainer}
        >
            {data.length === 0 ? (
                <ListIsEmpty />
            ) : (
                data.map((item, index) => (
                    // Ваш компонент или элемент, который вы хотите отобразить для каждого элемента
                    <Card
                        key={index}
                        src={item.photo}
                        title={item.name}
                        description={item.description}
                        mode={item.mode}
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