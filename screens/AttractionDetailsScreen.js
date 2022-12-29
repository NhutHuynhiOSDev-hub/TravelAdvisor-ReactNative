import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import { SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import { Image, Text, View } from "react-native-animatable";

import { FontAwesome, FontAwesome5, Ionicons } from "@expo/vector-icons";

const AttractionDetailsScreen = ({ route }) => {
  const navigation = useNavigation();
  const data = route?.params?.param;
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView
        className="flex-1 bg-white px-4 py-6"
        showsVerticalScrollIndicator={true}
      >
        <View>
          <View className="flex-relative bg-white shadow-lg">
            <Image
              className="w-full h-72 object-cover rounded-2xl"
              source={{
                uri: data?.photo?.images?.large?.url
                  ? data?.photo?.images?.large?.url
                  : "https://us.123rf.com/450wm/benidict83/benidict832008/benidict83200800014/benidict83200800014.jpg?ver=6",
              }}
            />
            <View className="absolute w-full h-72 rounded-2xl bg-black opacity-20" />
          </View>

          <View className="absolute flex-row inset-x-0 top-5 justify-between px-6">
            <TouchableOpacity
              className="w-10 h-10 rounded-md items-center justify-center bg-white"
              onPress={() => {
                navigation.goBack();
              }}
            >
              <FontAwesome5 name="chevron-left" size={24} color="#06B2BE" />
            </TouchableOpacity>
            <TouchableOpacity className="w-10 h-10 rounded-md items-center justify-center bg-[#06B2BE]">
              <FontAwesome name="heartbeat" size={24} color="white" />
            </TouchableOpacity>
          </View>

          <View className="absolute flex-row inset-x-0 space-x-2 bottom-5 justify-between px-6">
            <View className="flex-row items-center space-x-2">
              <Text className="text-[12px] font-bold text-gray-100">
                {data?.num_reviews}
              </Text>
              <Text className="text-[18px] font-bold text-gray-100">
                {data?.num_reviews}
              </Text>
            </View>

            <View className="px-2 py-1 bg-teal-100 rounded-md">
              <Text>{data?.is_closed ? "Closed" : "Open Now"}</Text>
            </View>
          </View>
        </View>
        <View className="mt-6 flex-col space-y-2">
          <Text className="text-[24px] text-[#428288] font-bold">
            {data?.name}
          </Text>
          <View className="flex-row space-x-2 items-center">
            <FontAwesome name="map-marker" size={25} color="#8C9EA6" />
            <Text className="text-[20px] text-[#8C9EA6] font-bold">
              {data?.location_string}
            </Text>
          </View>
        </View>
        {/* <View className="mt-4 flex-row items-center justify-between">
          {data?.num_reviews && (
            <View className="flex-row items-center space-x-2">
              <View className="w-12 h-12 rounded-2xl bg-red-100 items-center justify-center shadow-md">
                <FontAwesome name="star" size={24} color="#D58574" />
              </View>
              <View>
                <Text className="text-[#515151]">{data?.num_reviews}</Text>
                <Text className="text-[#515151]">Reviews</Text>
              </View>
            </View>
          )}

          {data?.bearing && (
            <View className="flex-row items-center space-x-2">
              <View className="w-12 h-12 rounded-2xl bg-red-100 items-center justify-center shadow-md">
                <FontAwesome5 name="map-signs" size={24} color="black" />
              </View>
              <View>
                <Text className="text-[#515151]">{data?.bearing}</Text>
                <Text className="text-[#515151]">Bearing</Text>
              </View>
            </View>
          )}

          {data?.offer_group.lowest_price && (
            <View className="flex-row items-center space-x-2">
              <View className="w-12 h-12 rounded-2xl bg-red-100 items-center justify-center shadow-md">
                <FontAwesome5 name="dollar-sign" size={24} color="black" />
              </View>
              <View>
                <Text className="text-[#515151]">
                  {data?.offer_group.lowest_price}
                </Text>
                <Text className="text-[#515151]">From</Text>
              </View>
            </View>
          )}
        </View> */}
        {data?.photo?.caption && (
          <Text className="mt-4 tracking-wide text-[16px] font-semibold text-[#97A6AF]">
            {data?.photo?.caption}
          </Text>
        )}

        <View className="items-start space-y-2 justify-center mt-4 rounded-2xl bg-gray-100 px-4 py-2">
          {data?.num_reviews && (
            <View className="flex-row space-x-6">
              <Ionicons name="star" size={24} color="#428288" />
              <Text className="text-lg">{data.num_reviews}</Text>
            </View>
          )}
          {data?.address_obj?.street1 && (
            <View className="flex-row space-x-6">
              <Ionicons name="location" size={24} color="#428288" />
              <Text className="text-lg">{data?.address_obj?.street1}</Text>
            </View>
          )}
        </View>
        <TouchableOpacity className="my-4 py-4 rounded-lg bg-[#06B2BE] items-center justify-center">
          <Text className="text-2xl font-semibold uppercase tracking-wider text-gray-100">
            Book now
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AttractionDetailsScreen;
