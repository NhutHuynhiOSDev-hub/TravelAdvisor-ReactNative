import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect, useState } from "react";
import { SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import { Image, Text, View } from "react-native-animatable";
import * as Animatable from "react-native-animatable";
import { FontAwesome, FontAwesome5, Ionicons } from "@expo/vector-icons";

const RestaurantDetailsScreen = ({ route }) => {
  const navigation = useNavigation();
  const [detailsData, setDetailsData] = useState(route?.params?.param);
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <Animatable.View animation={"fadeIn"} easing={"ease-in-out"}>
        <ScrollView
          animation={"fadeIn"}
          easing={"ease-in-out"}
          className="flex-1 bg-white px-4"
          showsVerticalScrollIndicator={true}
        >
          <View>
            <View className="flex-relative bg-white shadow-lg">
              <Image
                className="w-full h-72 object-cover rounded-2xl"
                source={{
                  uri: detailsData?.photo?.images?.large?.url
                    ? detailsData?.photo?.images?.large?.url
                    : "https://us.123rf.com/450wm/benidict83/benidict832008/benidict83200800014/benidict83200800014.jpg?ver=6",
                }}
              />
              <View className="absolute w-full h-72 rounded-2xl bg-black opacity-30" />
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
              <Text className="text-[24px] font-bold text-gray-100">
                {detailsData?.price}
              </Text>

              <View className="px-2 py-1 bg-teal-100 rounded-md">
                <Text>{detailsData?.open_now_text}</Text>
              </View>
            </View>
          </View>
          <View className="mt-6 flex-col space-y-2">
            <Text className="text-[24px] text-[#428288] font-bold">
              {detailsData?.name}
            </Text>
            <View className="flex-row space-x-2 items-center">
              <FontAwesome name="map-marker" size={25} color="#8C9EA6" />
              <Text className="text-[20px] text-[#8C9EA6] font-bold">
                {detailsData?.location_string}
              </Text>
            </View>
          </View>

          <View className="mt-4 flex-row items-center justify-between">
            {detailsData?.rating && (
              <View className="flex-row items-center space-x-2">
                <View className="w-12 h-12 rounded-2xl bg-red-100 items-center justify-center shadow-md">
                  <FontAwesome name="star" size={24} color="#D58574" />
                </View>
                <View>
                  <Text className="text-[#515151]">{detailsData?.rating}</Text>
                  <Text className="text-[#515151]">Ratings</Text>
                </View>
              </View>
            )}

            {detailsData?.bearing && (
              <View className="flex-row items-center space-x-2">
                <View className="w-12 h-12 rounded-2xl bg-red-100 items-center justify-center shadow-md">
                  <FontAwesome5 name="map-signs" size={24} color="black" />
                </View>
                <View>
                  <Text className="text-[#515151]">{detailsData?.bearing}</Text>
                  <Text className="text-[#515151]">Bearing</Text>
                </View>
              </View>
            )}

            {detailsData?.price_level && (
              <View className="flex-row items-center space-x-2">
                <View className="w-12 h-12 rounded-2xl bg-red-100 items-center justify-center shadow-md">
                  <FontAwesome5 name="dollar-sign" size={24} color="black" />
                </View>
                <View>
                  <Text className="text-[#515151]">
                    {detailsData?.price_level}
                  </Text>
                  <Text className="text-[#515151]">Price Level</Text>
                </View>
              </View>
            )}
          </View>
          {detailsData?.description && (
            <Text className="mt-4 tracking-wide text-[16px] font-semibold text-[#97A6AF]">
              {detailsData?.description}
            </Text>
          )}

          {detailsData?.cuisine && (
            <View className="flex-row gap-2 items-center justify-start flex-wrap mt-4">
              {detailsData?.cuisine.map((n) => (
                <TouchableOpacity
                  key={n.key}
                  className="px-2 py-1 rounded-md bg-emerald-100"
                >
                  <Text>{n.name}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}

          <View className="items-start space-y-2 justify-center mt-4 rounded-2xl bg-gray-100 px-4 py-2">
            {detailsData?.phone && (
              <View className="flex-row space-x-6">
                <Ionicons name="ios-call" size={24} color="#428288" />
                <Text className="text-lg">{detailsData.phone}</Text>
              </View>
            )}
            {detailsData?.email && (
              <View className="flex-row space-x-6">
                <Ionicons name="mail" size={24} color="#428288" />
                <Text className="text-lg">{detailsData.email}</Text>
              </View>
            )}
            {detailsData?.address && (
              <View className="flex-row space-x-6">
                <Ionicons name="location" size={24} color="#428288" />
                <Text className="text-lg">{detailsData.address}</Text>
              </View>
            )}
          </View>
          <TouchableOpacity className="my-4 py-4 rounded-lg bg-[#06B2BE] items-center justify-center">
            <Text className="text-2xl font-semibold uppercase tracking-wider text-gray-100">
              Book now
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </Animatable.View>
    </SafeAreaView>
  );
};

export default RestaurantDetailsScreen;
