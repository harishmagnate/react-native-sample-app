import React from "react";
import { Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
    }
});

export const MainLayout = () => {
    return <Text style={styles.text}>Main Layout</Text>
}