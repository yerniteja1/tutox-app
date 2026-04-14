import { mockSchools } from "@/src/lib/mock-data";
import { School } from "@/src/types";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, Text, TouchableOpacity, View } from "react-native";

export default function SchoolSelector() {
  const router = useRouter();
  const [selectedId, setSelectedId] = useState<string>(mockSchools[0].id);

  const handleContinue = () => {
    if (selectedId) {
      router.push("/dashboard");
    }
  };

  return (
    <View className="w-full gap-6">
      {/* Header */}
      <View className="items-center gap-1">
        <Text className="text-2xl font-bold text-gray-900">Select School</Text>
        <Text className="text-sm text-gray-500 text-center">
          Choose a school to proceed
        </Text>
      </View>

      {/* School Cards */}
      <View className="gap-3">
        {mockSchools.map((school: School) => {
          const isSelected = selectedId === school.id;
          return (
            <Pressable
              key={school.id}
              onPress={() => setSelectedId(school.id)}
              className={`flex-row items-start gap-3 bg-white rounded-xl p-4 border ${
                isSelected ? "border-primary" : "border-gray-200"
              }`}
              style={
                isSelected
                  ? {
                      shadowColor: "#6B21E8",
                      shadowOffset: { width: 0, height: 0 },
                      shadowOpacity: 0.15,
                      shadowRadius: 6,
                      elevation: 3,
                    }
                  : {}
              }
            >
              {/* Radio Button */}
              <View
                className={`w-5 h-5 rounded-full border-2 items-center justify-center mt-0.5 ${
                  isSelected ? "border-primary" : "border-gray-300"
                }`}
              >
                {isSelected && (
                  <View className="w-2.5 h-2.5 rounded-full bg-primary" />
                )}
              </View>

              {/* School Info */}
              <View className="flex-1 gap-0.5">
                <Text className="text-sm font-semibold text-gray-900">
                  {school.name}
                </Text>
                <Text className="text-xs text-gray-400">
                  School ID: {school.id}
                </Text>
                <Text className="text-sm text-gray-700 mt-1">
                  {school.address}
                </Text>
              </View>
            </Pressable>
          );
        })}
      </View>

      {/* Continue Button */}
      <TouchableOpacity
        onPress={handleContinue}
        disabled={!selectedId}
        className="bg-primary rounded-full py-4 items-center"
        activeOpacity={0.85}
        style={{ opacity: selectedId ? 1 : 0.5 }}
      >
        <Text className="text-white font-bold text-sm tracking-widest uppercase">
          Continue
        </Text>
      </TouchableOpacity>

      {/* Having issues */}
      <Text className="text-center text-sm text-gray-500">
        Having issues?{" "}
        <Text className="text-primary font-semibold">Contact Support</Text>
      </Text>
    </View>
  );
}
