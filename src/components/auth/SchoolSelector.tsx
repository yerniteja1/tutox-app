import { mockSchools } from "@/src/lib/mock-data";
import { School } from "@/src/types";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, Text, TouchableOpacity, View } from "react-native";

export default function SchoolSelector() {
  const router = useRouter();

  const [selectedId, setSelectedId] = useState<string | null>(
    mockSchools[0]?.id ?? null,
  );
  const [error, setError] = useState("");

  const handleContinue = () => {
    if (!selectedId) {
      setError("Please select a school");
      return;
    }

    setError("");
    router.push("/dashboard");
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
              onPress={() => {
                setSelectedId(school.id);
                if (error) setError("");
              }}
              android_ripple={{ color: "#E5E7EB" }}
              className={`flex flex-col gap-2 w-full border rounded-xl p-5 ${
                isSelected
                  ? "border-primary bg-white"
                  : "border-gray-200 bg-white"
              }`}
              style={({ pressed }) => [
                isSelected && {
                  shadowColor: "#6B21E8",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.1,
                  shadowRadius: 8,
                  elevation: 3,
                },
                pressed && { opacity: 0.8 },
              ]}
            >
              {/* Top Row */}
              <View className="flex-row items-center gap-3">
                <View
                  className={`w-5 h-5 rounded-full border-2 items-center justify-center ${
                    isSelected ? "border-primary" : "border-gray-300"
                  }`}
                >
                  {isSelected && (
                    <View className="w-2.5 h-2.5 rounded-full bg-primary" />
                  )}
                </View>

                <Text className="text-[15px] font-semibold text-gray-700">
                  {school.name}
                </Text>
              </View>

              {/* Details */}
              <View className="flex flex-col gap-1">
                <Text className="text-[14px] text-gray-400">
                  School ID: {school.id}
                </Text>
                <Text className="text-[14px] text-gray-600">
                  {school.address}
                </Text>
              </View>
            </Pressable>
          );
        })}
      </View>

      {/* Error */}
      {error ? (
        <Text className="text-red-500 text-sm text-center">{error}</Text>
      ) : null}

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

      {/* Support */}
      <Text className="text-center text-sm text-gray-500">
        Having issues?{" "}
        <Text className="text-primary font-semibold">Contact Support</Text>
      </Text>
    </View>
  );
}
