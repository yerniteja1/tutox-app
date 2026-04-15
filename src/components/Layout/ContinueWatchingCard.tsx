import { watchingCourse } from "@/src/lib/mock-data";
import { Ionicons } from "@expo/vector-icons";
import { Image, Pressable, Text, View } from "react-native";

export default function ContinueWatchingCard() {
  const progressPercent = watchingCourse.progress * 100;

  return (
    <View className="">
      <View
        className="flex bg-white rounded-2xl border border-gray-100 overflow-hidden"
        style={{ elevation: 2 }}
      >
        <View className="p-3 flex-row items-center gap-4">
          {/* Thumbnail */}
          <Image
            source={watchingCourse.image}
            className="rounded-sm"
            style={{ width: 100, height: 50 }}
            resizeMode="cover"
          />

          {/* Text Content */}
          <View className="flex-1 gap-1">
            <Text className="text-lg font-bold text-[#1C1C2E]">
              {watchingCourse.title}
            </Text>
            <Text className="text-base text-slate-500 font-medium">
              {watchingCourse.subtitle}
            </Text>
          </View>

          {/* Play Button */}
          <Pressable className="bg-gray-600 w-12 h-12 rounded-full items-center justify-center">
            <Ionicons name="play" size={24} color="white" className="ml-1" />
          </Pressable>
        </View>

        {/* Progress Bar Container */}
        <View className="h-1.5 bg-gray-100 w-full flex-row">
          <View
            className="h-full bg-emerald-500"
            style={{ width: `${progressPercent}%` }}
          />
        </View>
      </View>
    </View>
  );
}
