import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect, useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity } from "react-native";
import { View } from "react-native-animatable";
import { SafeAreaView } from "react-native-safe-area-context";
import { Attractions, Avatar, Hotels, Restaurants } from "../assets";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import MenuContainer from "../components/MenuContainer";
import { FontAwesome } from "@expo/vector-icons";
import ItemCardContainer from "../components/ItemCardContainer";

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
        <View className="flex-row items-center justify-between px-4 mt-8">
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

        <View>
          <View className="flex-row items-center justify-between px-4 mt-8">
            <Text className="text-[28px] text-[#0B646B] font-bold">
              Tool Tips
            </Text>
            <TouchableOpacity className="flex-row items-center justify-center space-x-2">
              <Text className="text-[20px] text-[#A0C4C7] font-bold">
                Explore
              </Text>
              <FontAwesome name="long-arrow-right" size={24} color="#A0C4C7" />
            </TouchableOpacity>
          </View>

          <View className="mt-8 flex-row items-center justify-evenly flex-wrap">
            <ItemCardContainer
              key={101}
              imageSource={
                "https://a.cdn-hotels.com/gdcs/production125/d570/3bb24ad6-7baf-4721-a49e-0a16e9395bf1.jpg?impolicy=fcrop&w=800&h=533&q=small"
              }
              title="Phu Quoc, Kien Giang, Vietnam"
              location="Phú Quốc"
            />
            <ItemCardContainer
              key={102}
              imageSource={
                "https://i0.wp.com/vietnaminsider.vn/wp-content/uploads/2021/10/Phu-Quoc-United-Center.jpeg?fit=900%2C563&ssl=1"
              }
              title="Phú Quốc "
              location="Phú Quốc"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default DiscoverScreen;
