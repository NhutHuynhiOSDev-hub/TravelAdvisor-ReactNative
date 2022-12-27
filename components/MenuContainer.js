import React from "react";
import { TouchableOpacity } from "react-native";
import { Image, Text, View } from "react-native-animatable";

function MenuContainer({ title, imageSource, type, setType }) {
  const handlePress = () => {
    console.log("HERE: ", type);
    setType(title.toLowerCase());
  };
  return (
    <TouchableOpacity
      className="items-center justify-center space-y-2"
      onPress={handlePress}
    >
      <View
        className={`w-24 h-24 items-center justify-center shadow-md rounded-full ${
          type === title.toLowerCase() ? "bg-gray-300" : ""
        }
          `}
      >
        <Image
          source={imageSource}
          className={`w-full h-full object-contain`}
        />
      </View>
      <Text className="text-[#00BCC9] text-xl font-semibold">{title}</Text>
    </TouchableOpacity>
  );
}

export default MenuContainer;
