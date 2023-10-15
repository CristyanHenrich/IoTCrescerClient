import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Controller from '../screens/DeviceController';
import SettingsScreen from '../screens/SettingsScreen';
import { useNavigation } from '@react-navigation/native';

const Stack = createStackNavigator();

function AppNavigator({ navigation }) {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Controller}
                options={{
                    title: 'Controle LED',
                    headerRight: () => {
                        const navigation = useNavigation();
                        return (
                            <TouchableOpacity
                                style={{ marginRight: 15 }}
                                onPress={() => navigation.navigate('Settings')}
                            >
                                <Ionicons name="menu-outline" size={24} color="black" />
                            </TouchableOpacity>
                        );
                    }
                }}
            />
            <Stack.Screen
                name="Settings"
                component={SettingsScreen}
                options={{ title: 'Configurações' }}
            />
        </Stack.Navigator>
    );
}

export default AppNavigator;
