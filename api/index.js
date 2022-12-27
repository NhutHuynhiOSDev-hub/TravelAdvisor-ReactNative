import axios from "axios";

export const getPlacesData = async () => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/hotels/list-in-boundary`,
      {
        params: {
          bl_latitude: "11.847676",
          bl_longitude: "108.473209",
          tr_longitude: "109.149359",
          tr_latitude: "12.838442",
          limit: "30",
          currency: "USD",
          linut: "km",
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
    return null;
  }
};
