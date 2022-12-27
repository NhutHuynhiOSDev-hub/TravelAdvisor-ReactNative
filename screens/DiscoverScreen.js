import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect, useState } from "react";
import { Image, ScrollView, Text } from "react-native";
import { View } from "react-native-animatable";
import { SafeAreaView } from "react-native-safe-area-context";
import { Attractions, Avatar, Hotels, Restaurants } from "../assets";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import MenuContainer from "../components/MenuContainer";

function DiscoverScreen() {
  const navigation = useNavigation();
  const [type, setType] = useState("hotels");
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);
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
            // 'details' is provided when fetchDetails = true
            console.log(data, details.geometry.viewport);
          }}
          query={{
            key: "AIzaSyCumCJ3lZDYTkkOZtRvuRdmKs2cQbcRzcQ",
            language: "en",
          }}
        />
      </View>

      <ScrollView>
        <View className="flex-row items-center justify-between px-8 mt-8">
          <MenuContainer
            key={"hotels"}
            title={"Hotels"}
            imageSource={Hotels}
            type={type}
            setType={setType}
          />
          <MenuContainer
            key={"attractions"}
            title={"Attractions"}
            imageSource={Attractions}
            type={type}
            setType={setType}
          />
          <MenuContainer
            key={"restaurants"}
            title={"Restaurants"}
            imageSource={Restaurants}
            type={type}
            setType={setType}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default DiscoverScreen;
