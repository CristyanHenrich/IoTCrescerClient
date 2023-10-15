import React from 'react';
import { View, StyleSheet } from 'react-native';
import LedToggle from '../components/ToggleSwitch';
import ServoButton from '../components/ServoButton';

function Controller() {
    return (
        <View style={styles.container}>
            <LedToggle led_number={1} />
            <LedToggle led_number={2} />
            <LedToggle led_number={3} />
            <LedToggle led_number={4} />
            <LedToggle led_number={5} />
            <ServoButton />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Controller;
