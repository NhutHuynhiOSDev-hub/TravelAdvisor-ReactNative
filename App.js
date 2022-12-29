import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TailwindProvider } from "tailwindcss-react-native";
import HomeScreen from "./screens/HomeScreen";
import HotelDetailsScreen from "./screens/HotelDetailsScreen";
import DiscoveryScreen from "./screens/DiscoveryScreen";
import RestaurantDetailsScreen from "./screens/RestaurantDetailsScreen";
import AttractionDetailsScreen from "./screens/AttractionDetailsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <TailwindProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="DiscoveryScreen" component={DiscoveryScreen} />
          <Stack.Screen
            name="RestaurantDetailsScreen"
            component={RestaurantDetailsScreen}
          />
          <Stack.Screen
            name="HotelDetailsScreen"
            component={HotelDetailsScreen}
          />
          <Stack.Screen
            name="AttractionDetailsScreen"
            component={AttractionDetailsScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </TailwindProvider>
  );
}
