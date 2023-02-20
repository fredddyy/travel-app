import { Text, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";

export default function App() {
  return (
    <TailwindProvider>
      <View className="flex-1 justify-center items-center">
        <Text className="text-blue-700">Open up App.js to start working</Text>
      </View>
    </TailwindProvider>
  );
}
