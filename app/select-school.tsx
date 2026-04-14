import SchoolSelector from "@/src/components/auth/SchoolSelector";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SelectSchoolPage() {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="flex-1 px-6 py-8 justify-center">
        {/* White Card */}
        <View className="bg-white rounded-2xl px-6 py-8 w-full">
          <SchoolSelector />
        </View>
      </View>
    </SafeAreaView>
  );
}
