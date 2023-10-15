import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const defaultIP = 'http://10.0.1.155:5000';

const getStoredOrDefaultIP = async () => {
    try {
        const storedIP = await AsyncStorage.getItem('raspberryPiIP');
        return storedIP ? 'http://' + storedIP + ':5000' : defaultIP;
    } catch (error) {
        console.error("Falha ao pegar o IP salvo", error);
        return defaultIP;
    }
};

const api = axios.create();

api.interceptors.request.use(async (config) => {
    config.baseURL = await getStoredOrDefaultIP();
    return config;
});

export const toggleLED = (data) => {
    console.log("toggleLED", data);
    return api.post('/led', data);
};

export const controlServo = (angle) => {
    return api.post('/servo', { rotation: angle });
};

export default api;
