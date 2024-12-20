import React from 'react';
import {
    View, Text, StyleSheet
} from "react-native";

export const ListIsEmpty = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>The list of posts is currently empty.</Text>
            <Text style={styles.text}>Create a post!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
        marginTop: 100
    },
    text: {
        color: '#8c959c',
        fontSize: 20,
        fontWeight: "600"
    }

})