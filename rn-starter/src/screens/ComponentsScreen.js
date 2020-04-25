import React from 'react';
import { Button , Text , StyleSheet , View } from 'react-native';

const ComponentsScreen = () => {
    const name = 'Daniel';
    return (
        <View>
            <Text style={styles.textStyleOne}>Getting Started with React Native</Text>
            <Text style={styles.textStyleTwo}>My name is {name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyleOne: {
        fontSize: 45
    },
    textStyleTWo: {
        fontSize: 20
    }
});

export default ComponentsScreen;