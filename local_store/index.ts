import { getData, storeData } from "./manipulate";

const latestLatKey = "DiscoverFeedData";
const latestLongKey = "DiscoverFeedData";
const discoverFeedDataKey = "DiscoverFeedData";

const getLatestLat = async () => {
  return await getData(discoverFeedDataKey);
};

const setLatestLat = async (val) => {
  return await storeData(discoverFeedDataKey, val);
};

const getLatestLong = async () => {
  return await getData(discoverFeedDataKey);
};

const setLatestLong = async (val) => {
  return await storeData(discoverFeedDataKey, val);
};

const getDiscoverFeedData = async () => {
  return await getData(discoverFeedDataKey);
};

const setDiscoverFeedData = async (val) => {
  return await storeData(discoverFeedDataKey, val);
};

export { getDiscoverFeedData, setDiscoverFeedData };
