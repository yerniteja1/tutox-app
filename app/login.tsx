import LoginForm from "@/src/components/auth/LoginForm";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const tutoxLogo = require("../assets/images/tutox-logo.png");

export default function LoginPage() {
  const [agreed, setAgreed] = useState(true);
  return (
    <SafeAreaView className="flex-1 bg-background">
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View className="flex-1 min-h-screen px-6 py-8 justify-between">
          {/* Top Spacer */}
          <View className="flex-1" />

          {/* White Card Container */}
          <View className="bg-white rounded-2xl px-6 py-8 w-full">
            <LoginForm />
          </View>

          {/* Terms Checkbox */}
          <View className="flex-row items-start gap-3 m-4 p-4">
            <Pressable
              onPress={() => setAgreed(!agreed)}
              className={`w-5 h-5 rounded border-2 items-center justify-center mt-0.5 ${
                agreed
                  ? "bg-primary border-primary"
                  : "bg-white border-gray-300"
              }`}
            >
              {agreed && <Ionicons name="checkmark" size={12} color="white" />}
            </Pressable>
            <Text className="flex-1 text-sm text-gray-600 leading-5">
              By continuing, you agree to our{" "}
              <Text className="underline text-gray-800 font-medium">
                Terms of Service
              </Text>{" "}
              and{" "}
              <Text className="underline text-gray-800 font-medium">
                Privacy Policy
              </Text>
              .
            </Text>
          </View>

          {/* Bottom Spacer */}
          <View className="flex-1" />

          {/* Tutox Logo PNG */}
          <View className="items-center mt-8 mb-2">
            <Image
              source={tutoxLogo}
              style={{ width: 150, height: 50 }}
              resizeMode="contain"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
