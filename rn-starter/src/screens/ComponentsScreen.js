import React from 'react';
import { Button , Text , StyleSheet } from 'react-native';

const ComponentsScreen = () => {
    return <Text style={styles.textStyle}>This is a components screen.</Text>;
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
});

export default ComponentsScreen;