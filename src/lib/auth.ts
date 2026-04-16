import AsyncStorage from "@react-native-async-storage/async-storage";

const TOKEN_KEY = "auth_token";
const INST_KEY = "institutions";

export const auth = {
  async setToken(token: string) {
    await AsyncStorage.setItem(TOKEN_KEY, token);
  },

  async getToken() {
    return AsyncStorage.getItem(TOKEN_KEY);
  },

  async clear() {
    await AsyncStorage.removeItem(TOKEN_KEY);
  },

  async setInstitutions(data: any) {
    await AsyncStorage.setItem(INST_KEY, JSON.stringify(data));
  },

  async getInstitutions() {
    const data = await AsyncStorage.getItem(INST_KEY);
    return data ? JSON.parse(data) : null;
  },

  async clearInstitutions() {
    await AsyncStorage.removeItem(INST_KEY);
  },
};
