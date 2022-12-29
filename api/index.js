import axios from "axios";
import { KEY } from "../const/keys";

const WebServices = {
  getNearbyRestaurants: async (lat, long, limit) => {
    try {
      const {
        data: { data },
      } = await axios.get(
        "https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng",
        {
          params: {
            latitude: lat,
            longitude: long,
            limit: limit,
            distance: "2",
            lunit: "km",
          },
          headers: {
            "X-RapidAPI-Key": KEY.X_RapidAPI_Key,
            "X-RapidAPI-Host": KEY.X_RapidAPI_Host,
          },
        }
      );

      return data;
    } catch (error) {
      console.log("Error ", error);
      return null;
    }
  },

  getNearbyHotels: async (lat, long, limit) => {
    try {
      const {
        data: { data },
      } = await axios.get(
        "https://travel-advisor.p.rapidapi.com/hotels/list-by-latlng",
        {
          params: {
            latitude: lat,
            longitude: long,
            limit: limit,
          },
          headers: {
            "X-RapidAPI-Key": KEY.X_RapidAPI_Key,
            "X-RapidAPI-Host": KEY.X_RapidAPI_Host,
          },
        }
      );
      return data;
    } catch (error) {
      console.log("Error ", error);
      return null;
    }
  },

  getNearbyAttractions: async (lat, long, limit) => {
    try {
      const {
        data: { data },
      } = await axios.get(
        "https://travel-advisor.p.rapidapi.com/attractions/list-by-latlng",
        {
          params: {
            latitude: lat,
            longitude: long,
            limit: limit,
            distance: "2",
            lunit: "km",
          },
          headers: {
            "X-RapidAPI-Key": KEY.X_RapidAPI_Key,
            "X-RapidAPI-Host": KEY.X_RapidAPI_Host,
          },
        }
      );
      return data;
    } catch (error) {
      console.log("Error ", error);
      return null;
    }
  },
};

export default WebServices;
