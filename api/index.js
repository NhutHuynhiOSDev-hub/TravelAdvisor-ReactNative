import axios from "axios";

export const getNearbyRestaurants = async ({ lat, long, limit }) => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng`,
      {
        params: {
          latitude: "11.9408626",
          longitude: "108.4521295",
          limit: "30",
          currency: "USD",
          distance: "2",
          lunit: "km",
          lang: "en_US",
        },
        headers: {
          "X-RapidAPI-Key":
            "fa716d06ccmsh7919c33d62a7b2fp1df425jsnf8b0cc45b82a",
          "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
        },
      }
    );
    return data;
  } catch (error) {
    console.log("Error ", error);
    return null;
  }
};
