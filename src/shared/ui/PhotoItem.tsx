import React, {memo} from 'react';
import {StyleSheet, View, Image, Pressable} from 'react-native';
import {AddSvg} from "@/src/shared/ui/SVG/AddSVG";
import {mainBackground} from "@/src/shared/const/constColor";
import {borderRadius} from "@/src/shared/const/otherConst";
import {DeleteSVG} from "@/src/shared/ui/SVG/DeleteSVG";

interface PhotoItemProps {
    src: string | null
    clearFunc: () => void
}

export const PhotoItem = memo((prop: PhotoItemProps) => {

    const {src, clearFunc} = prop

    return (
        <View>
            {src ? (
                <View style={styles.container}>
                    <Image
                        source={{uri: src}}
                        style={styles.img}
                    />
                    <Pressable
                        style={styles.deleteSVG}
                        onPress={clearFunc}
                    >
                        <DeleteSVG
                            width={'40'}
                            height={'40'}
                            fill='white'
                        />
                    </Pressable>
                </View>
            ) : (
                <AddSvg/>
            )}
        </View>
    );
});

const styles = StyleSheet.create({
    container: {
        backgroundColor: mainBackground,
        width: 70,
        height: 70,
        borderRadius: borderRadius,
        alignItems: 'center',
        justifyContent: 'center',
    },
    img: {
        width: '100%',
        height: '100%',
        borderRadius: borderRadius,
    },
    deleteSVG: {
        position: 'absolute',
        top: 0,
        right: 0,
    }
})