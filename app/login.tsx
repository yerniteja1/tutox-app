import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginPage() {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="flex-1 items-center justify-center">
        <Text className="text-primary text-xl font-bold">
          NativeWind is working ✅
        </Text>
      </View>
    </SafeAreaView>
  );
}
