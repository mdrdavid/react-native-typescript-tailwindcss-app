import React from "react";
import { View, Text, Button } from "react-native";
import tw from "tailwind-react-native-classnames";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/types";

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList, "Details">;
}

const DetailsScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={tw`flex-1 items-center justify-center bg-green-500`}>
      <Text style={tw`text-white text-2xl font-bold`}>Details Screen</Text>
      <Button
        title="Go to About"
        onPress={() => navigation.navigate("About")}
      />
    </View>
  );
};

export default DetailsScreen;
