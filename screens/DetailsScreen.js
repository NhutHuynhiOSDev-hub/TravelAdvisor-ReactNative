import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import { Image, Text, View } from "react-native-animatable";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons";

const DetailsScreen = ({ route }) => {
  const navigation = useNavigation();
  const data = route?.params?.param;
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-white relative">
      <ScrollView className="flex-1 px-4 py-6">
        <View className="flex-relative bg-white shadow-lg">
          <Image
            className="w-full h-72 object-cover rounded-2xl"
            source={{
              uri: data?.photo?.images?.large?.url
                ? data?.photo?.images?.large?.url
                : "https://us.123rf.com/450wm/benidict83/benidict832008/benidict83200800014/benidict83200800014.jpg?ver=6",
            }}
          />
        </View>

        <View className="absolute flex-row inset-x-0 top-5 justify-between px-6">
          <TouchableOpacity className="w-10 h-10 rounded-md items-center justify-center bg-white">
            <FontAwesome name="chevron-left" size={24} color="#06B2BE" />
          </TouchableOpacity>
          <TouchableOpacity className="w-10 h-10 rounded-md items-center justify-center bg-[#06B2BE]">
            <FontAwesome name="heartbeat" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailsScreen;
