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

const getDiscoverFeedData = async () => {
  return await getData(restaurantsDataFeedKey);
};

const setDiscoverFeedData = async (val) => {
  return await storeData(restaurantsDataFeedKey, val);
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
  getLastSelectedType,
  setLastSelectedType,
  getDiscoverFeedData,
  setDiscoverFeedData,
};
