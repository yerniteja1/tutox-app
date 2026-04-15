import ContinueWatchingCard from "@/src/components/Layout/ContinueWatchingCard";
import {
  mockCourses,
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
  Dimensions,
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
  const { width } = Dimensions.get("window");
  const CARD_WIDTH = width * 0.75;
  return (
    <SafeAreaView className="flex-1 bg-gray-100" edges={["top"]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* ── Red Header ── */}
        <View className="bg-red-500 pt-4 pl-4">
          {/* Top Icon Row */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToInterval={96 + 16}
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

                  {/* Label */}
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
        </View>
        <View className="bg-red-500 px-4 pb-4 flex-row items-center gap-3">
          {/* Menu Icon on the Left */}
          <Pressable
            onPress={() => console.log("Menu Pressed")}
            className="bg-white p-2 rounded-full items-center justify-center shadow-sm"
          >
            <Ionicons name="menu-outline" size={28} />
          </Pressable>

          {/* Student Selection Bar */}
          <View className="flex-1 flex-row items-center bg-white rounded-xl px-3 py-2.5 gap-2">
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

        {/* ── Info Cards ── */}
        <View className="px-4 mt-4 flex-row flex-wrap justify-between">
          {mockInfoCards.map((card) => {
            const isDark = card.bg === "#43157A";

            return (
              <View
                key={card.id}
                className="w-[48%] rounded-3xl p-5 mb-4 gap-3 justify-between"
                style={{ backgroundColor: card.bg, minHeight: 160 }}
              >
                {/* Icon Container */}
                <View className="bg-white/20 w-10 h-10 rounded-full items-center justify-center">
                  <Ionicons name={card.icon as any} size={20} color="white" />
                </View>

                <View className="gap-1">
                  <Text
                    className="text-base font-bold leading-5"
                    style={{ color: isDark ? "white" : "#1C1C2E" }}
                  >
                    {card.title}
                  </Text>
                  <Text
                    className="text-xs"
                    style={{ color: isDark ? "#E2E8F0" : "#4B5563" }}
                  >
                    {card.subtitle}
                  </Text>
                </View>

                <Text
                  className="text-base font-bold"
                  style={{ color: card.tagColor }}
                >
                  {card.tag}
                </Text>
              </View>
            );
          })}
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
                  className="w-8 rounded-t-lg"
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
        <View className="px-4 mt-6">
          <View className="flex-row items-center justify-between">
            <Text className="text-lg font-bold text-gray-900">
              Free Courses
            </Text>
            <Ionicons name="chevron-forward" size={20} color="#6B7280" />
          </View>
          {/* Horizontal Scroll Area */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ gap: 16 }}
            className="mt-2"
            style={{}}
          >
            {mockCourses.map((course) => (
              <View
                key={course.id}
                className="rounded-sm overflow-hidden"
                style={{
                  width: CARD_WIDTH,
                  elevation: 4,
                }}
              >
                {/* Full Image */}
                <Image
                  source={course.image}
                  style={{ width: "100%", height: 180 }}
                  resizeMode="cover"
                />

                {/* Content Area */}
                <View className="py-4 gap-1">
                  <Text
                    className="text-lg font-bold text-[#1C1C2E]"
                    numberOfLines={1}
                  >
                    {course.title}
                  </Text>
                  <Text
                    className="text-sm text-gray-400 leading-5"
                    numberOfLines={2}
                  >
                    {course.description}
                  </Text>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* Watching card */}
        <View className="px-4 mb-2">
          <ContinueWatchingCard />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
