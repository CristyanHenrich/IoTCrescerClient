import React, { useState } from 'react';
import { View, Text, Switch } from 'react-native';
import { toggleLED } from '../services/api';

function LedToggle({ led_number }) {
    const [isLedOn, setIsLedOn] = useState(false);

    const toggleLed = async (value) => {
        setIsLedOn(value);
        const action = value ? 'on' : 'off';
        try {
            const response = await toggleLED({ action, led_number });
            console.log(response.data);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
            <Text>{`LED ${led_number}: `}</Text>
            <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isLedOn ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleLed}
                value={isLedOn}
            />
        </View>
    );
}

export default LedToggle;
