import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect, useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity } from "react-native";
import { View } from "react-native-animatable";
import { SafeAreaView } from "react-native-safe-area-context";
import { Attractions, Avatar, Hotels, NotFound, Restaurants } from "../assets";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import MenuContainer from "../components/MenuContainer";
import { FontAwesome } from "@expo/vector-icons";
import ItemCardContainer from "../components/ItemCardContainer";
import { ActivityIndicator } from "react-native";
import WebServices from "../api";
import {
  getAttractionsDataFeed,
  getHotelsDataFeed,
  getLastSelectedType,
  getLatestLat,
  getLatestLong,
  getRestaurantsDataFeed,
  setAttractionsDataFeed,
  setHotelsDataFeed,
  setLastSelectedType,
  setLatestLat,
  setLatestLong,
  setRestaurantsDataFeed,
} from "../local_store";
import { FILTER_TYPE, KEY } from "../const/keys";
import * as Animatable from "react-native-animatable";

function DiscoverScreen() {
  const navigation = useNavigation();
  const [mainData, setMainData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const [type, setType] = useState(FILTER_TYPE.RESTAURANTS);
  const [selectedType, setSelectedType] = useState(FILTER_TYPE.HOTELS);
  const [currentLat, setCurrentLat] = useState(KEY.DEFAULT_LAT);
  const [currentLong, setCurrentLong] = useState(KEY.DEFAULT_LONG);
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);
  React.useEffect(() => {
    _loadFeedData();
  }, [type]);

  const _loadFeedData = async () => {
    setLoading(true);

    switch (type) {
      case FILTER_TYPE.HOTELS:
        _loadHotelsData();

        break;
      case FILTER_TYPE.ATTRACTIONS:
        _loadAttractionsData();

        break;
      case FILTER_TYPE.RESTAURANTS:
        _loadRestau;
        rantsData();
        break;
      default:
        break;
    }
  };

  const _loadRestaurantsData = async () => {
    await getRestaurantsDataFeed().then((localData) => {
      if (localData) {
        setMainData(localData);
        setLoading(false);
        console.log("RESTAURANTS LOAD FROM LOCAL");
      } else {
        WebServices.getNearbyRestaurants(
          currentLat,
          currentLong,
          KEY.LIMIT_ITEM
        ).then((data) => {
          setMainData(data);
          setLoading(false);
          setRestaurantsDataFeed(data);
          console.log("RESTAURANTS LOAD FROM API");
        });
      }
    });
  };

  const _loadHotelsData = async () => {
    await getHotelsDataFeed().then((localData) => {
      if (localData) {
        setMainData(localData);
        setLoading(false);
        console.log("HOTELS LOAD FROM LOCAL");
      } else {
        WebServices.getNearbyHotels(
          currentLat,
          currentLong,
          KEY.LIMIT_ITEM
        ).then((data) => {
          setMainData(data);
          setLoading(false);
          setHotelsDataFeed(data);
        });
        console.log("HOTELS LOAD FROM API");
      }
    });
  };

  const _loadAttractionsData = async () => {
    await getAttractionsDataFeed().then((localData) => {
      if (localData) {
        setMainData(localData);
        setLoading(false);
        console.log("ATTRACTIONS LOAD FROM LOCAL");
      } else {
        WebServices.getNearbyAttractions(
          currentLat,
          currentLong,
          KEY.LIMIT_ITEM
        ).then((data) => {
          setMainData(data);
          setLoading(false);
          setAttractionsDataFeed(data);
        });
        console.log("ATTRACTIONS LOAD FROM API");
      }
    });
  };

  return (
    <SafeAreaView className="bg-white flex-1 relative">
      <View className="flex-row items-center justify-between px-8">
        <View>
          <Text className="text-[40px] text-[#0B646B] font-bold">Discover</Text>
          <Text className="text-[36px] text-[#527283]">The beauty day</Text>
        </View>

        <View className="w-12 h-12 bg-gray-400 rounded-md items-center justify-center shadow-lg">
          <Image
            source={Avatar}
            className="w-full h-full rounded-md object-cover"
          />
        </View>
      </View>
      <View className="flex-row items-center bg-white mx-4 rounded-xl mt-4 py-1 px-4 shadow-lg">
        <GooglePlacesAutocomplete
          GooglePlacesDetailsQuery={{ fields: "geometry" }}
          fetchDetails={true}
          placeholder="Search"
          onPress={(data, details = null) => {
            console.log("LAT", details.location.latitude);
            console.log("LONG", details.location.longitude);
          }}
          query={{
            key: "",
            language: "en",
          }}
          onFail={(error) => console.log("Places API Error: ", error)}
          onNotFound={() => console.log("no results")}
        />
      </View>

      <ScrollView>
        <View className="flex-row items-center justify-between px-4 mt-8">
          <MenuContainer
            key={FILTER_TYPE.HOTELS}
            title={"Hotels"}
            imageSource={Hotels}
            type={type}
            setSelectedType={setType}
          />
          <MenuContainer
            key={FILTER_TYPE.ATTRACTIONS}
            title={"Attractions"}
            imageSource={Attractions}
            type={type}
            setSelectedType={setType}
          />
          <MenuContainer
            key={FILTER_TYPE.RESTAURANTS}
            title={"Restaurants"}
            imageSource={Restaurants}
            type={type}
            setSelectedType={setType}
          />
        </View>

        {isLoading ? (
          <View className="items-center justify-center mt-40">
            <ActivityIndicator size={"large"} color="#0B646B" />
          </View>
        ) : (
          <Animatable.View animation={"fadeIn"} easing={"ease-in-out"}>
            <View className="flex-row items-center justify-between px-4 mt-8">
              <Text className="text-[28px] text-[#0B646B] font-bold">
                Tool Tips
              </Text>
              <TouchableOpacity className="flex-row items-center justify-center space-x-2">
                <Text className="text-[20px] text-[#A0C4C7] font-bold">
                  Explore
                </Text>
                <FontAwesome
                  name="long-arrow-right"
                  size={24}
                  color="#A0C4C7"
                />
              </TouchableOpacity>
            </View>

            <View className="mt-8 flex-row items-center justify-evenly flex-wrap">
              {mainData?.length > 0 ? (
                <>
                  {mainData?.map((data, i) => (
                    <ItemCardContainer
                      key={i}
                      imageSource={
                        data?.photo?.images?.medium?.url
                          ? data?.photo?.images?.medium?.url
                          : "https://us.123rf.com/450wm/benidict83/benidict832008/benidict83200800014/benidict83200800014.jpg?ver=6"
                      }
                      title={data?.name}
                      location={data?.location_string}
                      data={data}
                      type={type}
                    />
                  ))}
                </>
              ) : (
                <View className="h-[300px] items-center justify-center space-y-8 ">
                  <Text className="text-2xl text-[#0B646B] font-semibold">
                    Opps...No Data Found
                  </Text>
                </View>
              )}
            </View>
          </Animatable.View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

export default DiscoverScreen;
