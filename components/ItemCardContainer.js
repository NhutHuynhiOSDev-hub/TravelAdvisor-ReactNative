import React from "react";
import { TouchableOpacity } from "react-native";
import { Image, Text, View } from "react-native-animatable";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { FILTER_TYPE } from "../const/keys";

const ItemCardContainer = ({ imageSource, title, location, data, type }) => {
  const navigation = useNavigation();

  const onPressNavigate = () => {
    switch (type) {
      case FILTER_TYPE.HOTELS:
        navigation.navigate("HotelDetailsScreen", { param: data });
        break;
      case FILTER_TYPE.ATTRACTIONS:
        navigation.navigate("AttractionDetailsScreen", { param: data });
        break;
      case FILTER_TYPE.RESTAURANTS:
        navigation.navigate("RestaurantDetailsScreen", { param: data });
        break;
      default:
        break;
    }
  };

  return (
    <TouchableOpacity
      onPress={onPressNavigate}
      className="rounded-md border border-gray-300 
    space-y-2 p-2 shadow-md bg-white w-[188px]"
    >
      <Image
        source={{ uri: imageSource }}
        className="w-full h-40 rounded-md bg-cover"
      />

      {title ? (
        <>
          <Text className="text-[18px] text-[#428288] font-bold">
            {title?.length > 14 ? `${title?.slice(0, 14)}..` : title}
          </Text>

          <View className="flex-row space-x-1 items-center">
            <FontAwesome name="map-marker" size={20} color="#8C9EA6" />
            <Text className="text-[12px] text-[#428288] font-bold">
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
