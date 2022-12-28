import AsyncStorage from "@react-native-async-storage/async-storage";

const get = async (key: string): Promise<string | null> => {
  try {
    return await AsyncStorage.getItem(key);
  } catch (error) {
    let errorMessage = `getLocalStorage Error ${error}`;
    console.log("AsyncStorage", errorMessage);
    return null;
  }
};

const set = async (key: string, value: string): Promise<void> => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    let errorMessage = `setLocalStorage Error ${error}`;
    console.log("AsyncStorage", errorMessage);
  }
};

const remove = async (key: string): Promise<void> => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    let errorMessage = `removeLocalStorage Error ${error}`;
    console.log("AsyncStorage", errorMessage);
  }
};

const storeData = async (key: string, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (error) {
    let errorMessage = `removeLocalStorage Error ${error}`;
    console.log("AsyncStorage", errorMessage);
  }
};

const getData = async (key: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (error) {
    let errorMessage = `removeLocalStorage Error ${error}`;
    console.log("AsyncStorage", errorMessage);
  }
};

export { get, set, storeData, getData, remove };
