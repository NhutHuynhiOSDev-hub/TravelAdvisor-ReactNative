import { View, Text, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { HeroImage } from "../assets";
import * as Animatable from "react-native-animatable";

const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);
  return (
    <SafeAreaView className="bg-white flex-1 relative">
      <View className="w-[400px] h-[400px] rounded-full bg-[#00BCC9] absolute bottom-12 -right-48"></View>
      <View className="w-[400px] h-[400px] rounded-full bg-[#E99265] absolute -bottom-24 right-32"></View>

      <View className="flex-row px-6 mt-8 items-center space-x-2">
        <View className="w-16 h-16 rounded-full items-center justify-center bg-black">
          <Text className="text-[#00BCC9] text-3xl font-semibold">Go</Text>
        </View>
        <Text className="text-[#2A2B4B] text-3xl font-semibold">Travel</Text>
      </View>

      <View className="px-6 mt-8 space-y-3">
        <Text className="text-[#3C6072] text-[42px]">Enjoy the trip with</Text>
        <Text className="text-[#00BCC9] text-[38px] font-bold">
          Good Moments
        </Text>
        <Text className="text-[#3C6072] text-base break-normal">
          Run by budget-travel expert Matt Kepnes, nomadicmatt.com
        </Text>
      </View>

      <View className="flex-1 items-center justify-center">
        <Animatable.Image
          animation={"fadeIn"}
          easing={"ease-in-out"}
          source={HeroImage}
          className="h-full w-full object-cover mt-20"
        />
        <View
          className="absolute bottom-20 w-24 h-24 border-l-2 border-r-2 border-t-4 border-[#00BCC9]
          rounded-full items-center justify-center"
        >
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("DiscoveryScreen");
            }}
          >
            <Animatable.View
              animation={"pulse"}
              easing={"ease-in-out"}
              className="w-20 h-20 items-center justify-center bg-[#00BCC9]  rounded-full"
            >
              <Text className="text-gray-50 text-[36px] font-semibold">Go</Text>
            </Animatable.View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
