import React from 'react';
import {StyleSheet, View} from "react-native";
import {CreatePost} from "@/src/features/CreatePost/ui/CreatePost";
import {mainBackground} from "@/src/shared/const/constColor";

export const CreatePostPage = () => {
    return (
        <View>
            <CreatePost/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: mainBackground
    }
})