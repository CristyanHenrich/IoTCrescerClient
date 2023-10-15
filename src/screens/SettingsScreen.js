import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function SettingsScreen() {
    const [ipAddress, setIpAddress] = useState('');

    useEffect(() => {
        fetchIP();
    }, []);

    const fetchIP = async () => {
        try {
            const storedIP = await AsyncStorage.getItem('raspberryPiIP');
            if(storedIP) setIpAddress(storedIP);
        } catch (error) {
            console.error("Falha ao setar o endereço IP", error);
        }
    };

    const saveSettings = async () => {
        try {
            await AsyncStorage.setItem('raspberryPiIP', ipAddress);
            console.log("Endereço IP Salvo!");
        } catch (error) {
            console.error("Falha ao Salvar endereço IP", error);
        }
    };

    return (
        <View style={styles.container}>
            <Text>IP do Raspberry Pi:</Text>
            <TextInput
                style={styles.input}
                value={ipAddress}
                onChangeText={setIpAddress}
                placeholder="Ex: 10.0.0.9"
            />
            <Button title="Salvar" onPress={saveSettings} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 16,
        padding: 10,
    },
});

export default SettingsScreen;
