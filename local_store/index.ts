import { get, getData, set, storeData } from "./manipulate";

const latestLatKey = "LatestLat";
const latestLongKey = "LatestLong";
const hotelsDataFeedKey = "HotelsDataFeed";
const lastSelectedTypeKey = "LastSelectedType";
const restaurantsDataFeedKey = "RestaurantsDataFeed";
const attractionsDataFeedKey = "AttractionsDataFeed";

const getLatestLat = async () => {
  return await get(latestLatKey);
};

const setLatestLat = async (val: string) => {
  return await set(latestLatKey, val);
};

const getLatestLong = async () => {
  return await get(latestLongKey);
};

const setLatestLong = async (val: string) => {
  return await set(latestLongKey, val);
};

const getRestaurantsDataFeed = async () => {
  return await getData(restaurantsDataFeedKey);
};

const setRestaurantsDataFeed = async (val) => {
  return await storeData(restaurantsDataFeedKey, val);
};

const getHotelsDataFeed = async () => {
  return await getData(hotelsDataFeedKey);
};

const setHotelsDataFeed = async (val) => {
  return await storeData(hotelsDataFeedKey, val);
};

const getAttractionsDataFeed = async () => {
  return await getData(attractionsDataFeedKey);
};

const setAttractionsDataFeed = async (val) => {
  return await storeData(attractionsDataFeedKey, val);
};

const getLastSelectedType = async () => {
  return await get(lastSelectedTypeKey);
};

const setLastSelectedType = async (val: string) => {
  return await set(lastSelectedTypeKey, val);
};

export {
  getLatestLat,
  setLatestLat,
  getLatestLong,
  setLatestLong,
  getHotelsDataFeed,
  setHotelsDataFeed,
  getLastSelectedType,
  setLastSelectedType,
  getAttractionsDataFeed,
  setAttractionsDataFeed,
  getRestaurantsDataFeed,
  setRestaurantsDataFeed,
};
