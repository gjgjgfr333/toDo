import React, {memo} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {borderRadius} from "@/src/shared/const/otherConst";
import {DeleteSVG} from "@/src/shared/ui/SVG/DeleteSVG";

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
                    source={{uri: src ?? ''}}
                    style={styles.image}
                />
                <View style={styles.infoBlock}>
                    <Text style={styles.title}>{title}</Text>
                    <Text>{`post was created: ${dataCreatePost}`}</Text>

                    {mode === 'Published' ? (
                        <View style={[styles.modeContainer, {backgroundColor: '#2c9713'}]}>
                            <Text style={[styles.modeText, {color: "#354919"}]}>{mode}</Text>
                        </View>
                    ) : (
                        <View style={[styles.modeContainer, {backgroundColor: '#ca0b3e'}]}>
                            <Text style={[styles.modeText, {color: "#50041a"}]}>{mode}</Text>
                        </View>
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
            <Text>{description}</Text>
        </View>
    );
});

const styles = StyleSheet.create({
    deleteButton: {
        position: 'absolute',
        right: 10,
        top: 10,
    },
    container: {
        backgroundColor: '#fff',
        width: '100%',
        padding: 10,
        marginBottom: 15
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
        color: 'gray'
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: borderRadius,
    },
    modeContainer: {
        padding: 10,
        borderRadius: borderRadius,
    },
    modeText: {
        fontSize: 20,
    }
})