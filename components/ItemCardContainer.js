import React from "react";
import { TouchableOpacity } from "react-native";
import { Image, Text, View } from "react-native-animatable";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ItemCardContainer = ({ imageSource, title, location }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("DetailsScreen", { params: data })}
      className="rounded-md border border-gray-300 
    space-y-2 p-2 shadow-md bg-white w-[188px]"
    >
      <Image
        source={{ uri: imageSource }}
        className="w-full h-40 rounded-md bg-cover"
      />

      {title ? (
        <>
          <Text className="text-[18px] text-[#0B646B] font-bold">
            {title?.length > 14 ? `${title?.slice(0, 14)}..` : title}
          </Text>

          <View className="flex-row space-x-1 items-center">
            <FontAwesome name="map-marker" size={20} color="8597A2" />
            <Text className="text-[12px] text-[#0B646B] font-bold">
              {location?.length > 18 ? `${location?.slice(0, 18)}..` : location}
            </Text>
          </View>
        </>
      ) : (
        <></>
      )}
    </TouchableOpacity>
  );
};

export default ItemCardContainer;
