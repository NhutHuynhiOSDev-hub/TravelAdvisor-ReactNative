import { getData, storeData } from "./manipulate";

const discoverFeedDataKey = "DiscoverFeedData";

const getDiscoverFeedData = async () => {
  return await getData(discoverFeedDataKey);
};

const setDiscoverFeedData = async (val) => {
  return await storeData(discoverFeedDataKey, val);
};

export { getDiscoverFeedData, setDiscoverFeedData };
