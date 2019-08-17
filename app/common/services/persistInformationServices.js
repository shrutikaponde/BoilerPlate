import AsyncStorage from '@react-native-community/async-storage';

const obj = {

    async setAccessToken(accessToken) {
        try {
            console.log("set access token")
            await AsyncStorage.setItem('accessToken', JSON.stringify(accessToken));
        } catch (error) {
            console.log(error)
            return null ;
        }
    },
    async getAccessToken() {
        try {
            const accessToken = await AsyncStorage.getItem('accessToken');
            return JSON.parse(accessToken);
        } catch (error) {
            return null;
        }
    },
    async resetAll() {
        try {
            await AsyncStorage.removeItem('accessToken') ;
        } catch (error) {
            return null ;
        }
    },
}

export default obj;