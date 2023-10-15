import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
                                                                                                    
import { controlServo } from '../services/api';

function ServoButton() {
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    const handleServoButtonPress = async () => {
        setIsButtonDisabled(true);

        try {
            const response = await controlServo(0);
            console.log(response.data);
        } catch (error) {
            console.error("Error:", error);
        }

        setTimeout(() => {
            setIsButtonDisabled(false);
        }, 100);
    };

    return (
        <TouchableOpacity 
            style={[styles.button, isButtonDisabled && styles.buttonDisabled]}
            onPress={handleServoButtonPress}
            disabled={isButtonDisabled}
        >
            <Text style={styles.buttonText}>Garagem</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#2196F3',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        width: 150,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
    buttonDisabled: {
        backgroundColor: '#b0c4de',
    }
});

export default ServoButton;
