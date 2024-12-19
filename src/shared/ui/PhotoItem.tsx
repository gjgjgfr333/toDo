import React, {memo} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {AddSvg} from "@/src/shared/ui/SVG/AddSVG";
import {mainBackground} from "@/src/shared/const/constColor";
import {borderRadius} from "@/src/shared/const/otherConst";

interface PhotoItemProps {
    src: string | null
}


export const PhotoItem = memo((prop: PhotoItemProps) => {

    const {src} = prop

    return (
        <View style={styles.container}>
            {src ? (
                <Image
                    source={{uri: src}}
                    style={styles.img}
                />
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
    }
})