import React, {memo} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {borderRadius, screenWidth} from "@/src/shared/const/otherConst";
import {DeleteSVG} from "@/src/shared/ui/SVG/DeleteSVG";
import {StatusView} from "@/src/shared/StatusView";
import {
    blackColor,
    darkGreenColor,
    darkRedColor,
    grayColor,
    greenColor,
    redColor,
    whiteColor
} from "@/src/shared/const/constColor";
import Logo from '../../../public/img/MainLogo.jpg'

interface ICardProps {
    title: string;
    src: string | null
    mode: string
    description: string,
    deleteFunc: () => void
    dataCreatePost: string
}

export const Card = memo((props: ICardProps) => {

    const {src, mode, description, title, deleteFunc, dataCreatePost} = props;

    return (
        <View style={styles.container}>
            <View style={styles.secondContainer}>
                <Image
                    source={src ? {uri: src} : Logo}
                    style={styles.image}
                />

                <View style={styles.infoBlock}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.dataCreatePost}>{`Post was created: ${dataCreatePost}`}</Text>

                    {mode === 'Published' ? (
                        <StatusView
                            backgroundColor={greenColor}
                            color={darkGreenColor}
                            mode={mode}
                        />
                    ) : (
                        <StatusView
                            backgroundColor={redColor}
                            color={darkRedColor}
                            mode={mode}
                        />
                    )}
                </View>
            </View>
            <TouchableOpacity
                onPress={deleteFunc}
                style={styles.deleteButton}
            >
                <DeleteSVG
                    width={'35'}
                    height={'35'}
                />
            </TouchableOpacity>
            <Text style={StyleSheet.flatten([styles.description, {
                fontWeight: 'bold',
                color: blackColor
            }])}>Description</Text>
            <Text style={styles.description}>{description}</Text>
        </View>
    );
});

const styles = StyleSheet.create({
    dataCreatePost: {
        flexWrap: 'wrap',
        fontSize: 15,
        fontWeight: 'bold',
        width: '95%',
    },
    deleteButton: {
        position: 'absolute',
        right: 10,
        top: 10,
    },
    container: {
        backgroundColor: whiteColor,
        maxWidth: screenWidth,
        padding: 10,
        marginBottom: 15,
        gap: 10,
    },
    secondContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        gap: 20
    },
    infoBlock: {
        alignItems: 'flex-start',
        justifyContent: 'space-around',
    },
    title: {
        fontSize: 20,
        color: grayColor
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: borderRadius,
    },
    description: {
        fontSize: 15,
        color: grayColor,
        fontWeight: 'normal',
    }
})