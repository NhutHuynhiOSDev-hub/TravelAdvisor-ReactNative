import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Image, Text, View } from "react-native-animatable";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";

const HotelDetailsScreen = ({ route }) => {
  const navigation = useNavigation();
  const [mainData, setMainData] = useState(route?.params?.param);
  const [isLoading, setLoading] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <Animatable.View animation={"fadeIn"} easing={"ease-in-out"}>
        <ScrollView
          className="flex-1 bg-white px-4 py-6"
          showsVerticalScrollIndicator={true}
        >
          <View>
            <View className="flex-relative bg-white shadow-lg">
              <Image
                className="w-full h-72 object-cover rounded-2xl"
                source={{
                  uri: mainData?.photo?.images?.large?.url
                    ? mainData?.photo?.images?.large?.url
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
                  {mainData?.price_level}
                </Text>
                <Text className="text-[18px] font-bold text-gray-100">
                  {mainData?.price}
                </Text>
              </View>

              {mainData?.is_closed ? (
                <View className="px-2 py-1 bg-red-300 rounded-md">
                  <Text className="text-white font-semibold">Closed</Text>
                </View>
              ) : (
                <View className="px-2 py-1 bg-green-300 rounded-md">
                  <Text className="text-[#515151] font-semibold">Open now</Text>
                </View>
              )}
            </View>
          </View>

          {isLoading ? (
            <View className="items-center justify-center mt-40">
              <ActivityIndicator size={"large"} color="#0B646B" />
            </View>
          ) : (
            <>
              <View className="mt-6 flex-col space-y-2">
                <Text className="text-[24px] text-[#428288] font-bold">
                  {mainData?.name}
                </Text>
                <View className="flex-row space-x-2 items-center">
                  <FontAwesome name="map-marker" size={25} color="#8C9EA6" />
                  <Text className="text-[20px] text-[#8C9EA6] font-bold">
                    {mainData?.location_string}
                  </Text>
                </View>
              </View>
              <View className="mt-4 flex-row items-center justify-between">
                {mainData?.rating && (
                  <View className="flex-row items-center space-x-2">
                    <View className="w-12 h-12 rounded-2xl bg-green-100 items-center justify-center shadow-md">
                      <FontAwesome name="star" size={24} color="#D58574" />
                    </View>
                    <View>
                      <Text className="text-[#515151]">{mainData?.rating}</Text>
                      <Text className="text-[#515151]">Ratings</Text>
                    </View>
                  </View>
                )}

                {mainData?.hotel_class && (
                  <View className="flex-row items-center space-x-2">
                    <View className="w-12 h-12 rounded-2xl bg-green-100 items-center justify-center shadow-md">
                      <FontAwesome5 name="map-signs" size={24} color="black" />
                    </View>
                    <View>
                      <Text className="text-[#515151]">
                        {mainData?.hotel_class}
                      </Text>
                      <Text className="text-[#515151]">Class</Text>
                    </View>
                  </View>
                )}

                {mainData?.num_reviews && (
                  <View className="flex-row items-center space-x-2">
                    <View className="w-12 h-12 rounded-2xl bg-green-100 items-center justify-center shadow-md">
                      <FontAwesome5
                        name="dollar-sign"
                        size={24}
                        color="black"
                      />
                    </View>
                    <View>
                      <Text className="text-[#515151]">
                        {mainData?.num_reviews}
                      </Text>
                      <Text className="text-[#515151]">Reviews</Text>
                    </View>
                  </View>
                )}
              </View>
              {mainData?.ranking && (
                <Text className="mt-4 tracking-wide text-[16px] font-semibold text-[#97A6AF]">
                  {mainData?.ranking}
                </Text>
              )}

              {/* {mainData?.amenities && (
                <View className="flex-row gap-2 items-center justify-start flex-wrap mt-4">
                  {mainData?.amenities.map((n) => (
                    <TouchableOpacity
                      key={n.key}
                      className="px-2 py-1 rounded-md bg-emerald-100"
                    >
                      <Text>{n.amenities}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              )} */}

              <View className="items-start space-y-2 justify-center mt-4 rounded-2xl bg-gray-100 px-4 py-2">
                {/* {mainData?.phone && (
                  <View className="flex-row space-x-6">
                    <Ionicons name="call" size={24} color="#428288" />
                    <Text className="text-lg">{mainData?.phone}</Text>
                  </View>
                )}
                {mainData?.email && (
                  <View className="flex-row space-x-6">
                    <Ionicons name="mail" size={24} color="#428288" />
                    <Text className="text-lg">{mainData?.email}</Text>
                  </View>
                )}
                {mainData?.address && (
                  <View className="flex-row space-x-6">
                    <Ionicons name="location" size={24} color="#428288" />
                    <Text className="text-lg">{mainData?.address}</Text>
                  </View>
                )}
                {mainData?.website && (
                  <View className="flex-row space-x-6">
                    <Ionicons name="globe" size={24} color="#428288" />
                    <Text className="text-lg">{mainData?.website}</Text>
                  </View>
                )} */}
              </View>
              <TouchableOpacity className="my-4 py-4 rounded-lg bg-[#06B2BE] items-center justify-center">
                <Text className="text-2xl font-semibold uppercase tracking-wider text-gray-100">
                  Book now
                </Text>
              </TouchableOpacity>
            </>
          )}
        </ScrollView>
      </Animatable.View>
    </SafeAreaView>
  );
};

export default HotelDetailsScreen;
