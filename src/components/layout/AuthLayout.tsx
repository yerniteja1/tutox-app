import { Image, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface AuthLayoutProps {
  children: React.ReactNode;
}
const tutoxLogo = require("../../../assets/images/tutox-logo.png");
export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View className="flex-1 min-h-screen px-6 py-8 justify-between">
          <View className="flex-1" />

          {/* White Card */}
          <View
            className="bg-white rounded-2xl px-6 py-8 w-full"
            style={{
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.08,
              shadowRadius: 12,
              elevation: 4,
            }}
          >
            {children}
          </View>

          <View className="flex-1" />

          {/* Tutox Logo */}
          <View className="items-center mt-8 mb-2">
            <Image source={tutoxLogo} resizeMode="contain" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
