import {
  mockInfoCards,
  mockStudent,
  mockTopIcons,
  mockWeeklyPerformance,
} from "@/src/lib/mock-dashboard";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function DashboardPage() {
  const router = useRouter();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const maxBarValue = Math.max(...mockWeeklyPerformance.map((w) => w.value));

  return (
    <SafeAreaView className="flex-1 bg-gray-100" edges={["top"]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* ── Red Header ── */}
        <View className="bg-red-500 pt-4 px-4 pb-6">
          {/* Top Icon Row */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            // Use snapToInterval to make the cards "lock" into place when scrolling
            snapToInterval={96 + 16} // card width (96) + gap (16)
            decelerationRate="fast"
            contentContainerStyle={{ paddingHorizontal: 0, gap: 16 }}
            className="mb-6"
          >
            {mockTopIcons.map((item) => (
              <TouchableOpacity
                key={item.id}
                className="items-center"
                activeOpacity={0.8}
              >
                {/* Increased Container Card Size */}
                <View
                  className="w-24 h-28 rounded-2xl items-center justify-center shadow-sm bg-white"
                  style={{
                    elevation: 3,
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 4 },
                    shadowOpacity: 0.1,
                    shadowRadius: 6,
                  }}
                >
                  {/* Larger Rounded Icon Circle */}
                  <View
                    className="w-14 h-14 rounded-full items-center justify-center mb-3"
                    style={{ backgroundColor: item.iconColor }}
                  >
                    <Image
                      source={item.image}
                      className="w-8 h-8"
                      resizeMode="contain"
                    />
                  </View>

                  {/* Label - Slightly larger text for the larger card */}
                  <Text
                    numberOfLines={1}
                    className="text-[11px] font-bold text-gray-800 tracking-tight"
                  >
                    {item.label}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/* Student Dropdown */}
          <View className="flex-row items-center bg-white rounded-xl px-3 py-2.5 gap-2">
            <Ionicons name="person-circle-outline" size={22} color="#6B7280" />
            <Text className="flex-1 text-sm font-semibold text-gray-800">
              {mockStudent.name} - {mockStudent.class}
            </Text>
            <Pressable onPress={() => setDropdownOpen(!dropdownOpen)}>
              <Ionicons
                name={dropdownOpen ? "chevron-up" : "chevron-down"}
                size={18}
                color="#6B7280"
              />
            </Pressable>
          </View>
        </View>

        {/* ── Info Cards 2x2 Grid ── */}
        <View className="px-4 mt-4">
          <View className="flex-row gap-3 mb-3">
            {mockInfoCards.slice(0, 2).map((card) => (
              <View
                key={card.id}
                className="flex-1 rounded-2xl p-4 gap-2"
                style={{ backgroundColor: card.bg }}
              >
                <Text className="text-xl">{card.icon}</Text>
                <Text
                  className="text-sm font-bold"
                  style={{
                    color: card.bg === "#3B2D8F" ? "white" : "#1C1C2E",
                  }}
                >
                  {card.title}
                </Text>
                <Text
                  className="text-xs"
                  style={{
                    color: card.bg === "#3B2D8F" ? "#CBD5E1" : "#374151",
                  }}
                >
                  {card.subtitle}
                </Text>
                <Text
                  className="text-sm font-bold"
                  style={{ color: card.tagColor }}
                >
                  {card.tag}
                </Text>
              </View>
            ))}
          </View>
          <View className="flex-row gap-3">
            {mockInfoCards.slice(2, 4).map((card) => (
              <View
                key={card.id}
                className="flex-1 rounded-2xl p-4 gap-2"
                style={{ backgroundColor: card.bg }}
              >
                <Text className="text-xl">{card.icon}</Text>
                <Text
                  className="text-sm font-bold"
                  style={{
                    color: card.bg === "#3B2D8F" ? "white" : "#1C1C2E",
                  }}
                >
                  {card.title}
                </Text>
                <Text
                  className="text-xs"
                  style={{
                    color: card.bg === "#3B2D8F" ? "#CBD5E1" : "#374151",
                  }}
                >
                  {card.subtitle}
                </Text>
                <Text
                  className="text-sm font-bold"
                  style={{ color: card.tagColor }}
                >
                  {card.tag}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* ── Weekly Performance ── */}
        <View className="px-4 mt-6">
          <Text className="text-lg font-bold text-gray-900 mb-4">
            Weekly Performance
          </Text>
          <View className="flex-row items-end justify-between gap-2">
            {mockWeeklyPerformance.map((item) => (
              <View key={item.week} className="flex-1 items-center gap-1">
                <Text className="text-xs text-gray-500">{item.value}%</Text>
                <View
                  className="w-full rounded-t-lg"
                  style={{
                    height: (item.value / maxBarValue) * 120,
                    backgroundColor: item.color,
                    minHeight: 8,
                  }}
                />
                <Text className="text-xs text-gray-500">{item.week}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* ── Free Courses ── */}
        <View className="px-4 mt-6 mb-8">
          <View className="flex-row items-center justify-between">
            <Text className="text-lg font-bold text-gray-900">
              Free Courses
            </Text>
            <Ionicons name="chevron-forward" size={20} color="#6B7280" />
          </View>
          {/* Placeholder cards */}
          <View className="mt-3 gap-3">
            {[1, 2].map((i) => (
              <View
                key={i}
                className="bg-white rounded-2xl p-4 flex-row items-center gap-3"
                style={{
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 1 },
                  shadowOpacity: 0.06,
                  shadowRadius: 4,
                  elevation: 2,
                }}
              >
                <View className="w-12 h-12 bg-primary/10 rounded-xl items-center justify-center">
                  <Text className="text-2xl">🎓</Text>
                </View>
                <View className="flex-1">
                  <Text className="text-sm font-semibold text-gray-800">
                    Course Title {i}
                  </Text>
                  <Text className="text-xs text-gray-400 mt-0.5">
                    Free · 12 Lessons
                  </Text>
                </View>
                <Ionicons name="chevron-forward" size={16} color="#9CA3AF" />
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
