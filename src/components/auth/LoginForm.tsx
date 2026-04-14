"use client";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useRef, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function LoginForm() {
  const router = useRouter();
  const [mobileNo, setMobileNo] = useState("");
  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
  const inputRefs = useRef<(TextInput | null)[]>([]);

  const handleOtpChange = (value: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleOtpKeyPress = (key: string, index: number) => {
    if (key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSignIn = () => {
    router.push("/select-school");
  };

  return (
    <View className="w-full gap-6">
      {/* Header */}
      <View className="items-center gap-1">
        <Text className="text-2xl font-bold text-gray-900">Sign In</Text>
        <Text className="text-sm text-gray-500 text-center">
          Enter your phone no and password
        </Text>
      </View>

      {/* Mobile No Input */}
      <View
        className="flex-row items-center border border-gray-200 rounded-xl px-4 py-3 bg-white"
        style={{ gap: 10 }}
      >
        <Ionicons name="phone-portrait-outline" size={20} color="#9CA3AF" />
        <TextInput
          className="flex-1 text-base text-gray-800"
          style={
            {
              outlineStyle: "none",
            } as any
          }
          placeholder="9847953684"
          placeholderTextColor="#9CA3AF"
          keyboardType="phone-pad"
          value={mobileNo}
          onChangeText={setMobileNo}
        />
      </View>

      {/* OTP Password Boxes */}
      <View className="flex-row justify-between gap-2">
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={(ref) => {
              inputRefs.current[index] = ref;
            }}
            className="flex-1 aspect-square border border-gray-200 rounded-xl text-center text-base font-bold text-gray-800 bg-white"
            maxLength={1}
            keyboardType="numeric"
            secureTextEntry={true}
            value={digit}
            onChangeText={(val) => handleOtpChange(val, index)}
            onKeyPress={({ nativeEvent }) =>
              handleOtpKeyPress(nativeEvent.key, index)
            }
            style={{ minWidth: 44, minHeight: 44, outlineStyle: "none" } as any}
          />
        ))}
      </View>

      {/* Sign In Button */}
      <TouchableOpacity
        onPress={handleSignIn}
        className="bg-primary rounded-full py-4 items-center"
        activeOpacity={0.85}
      >
        <Text className="text-white font-bold text-sm tracking-widest uppercase">
          Sign In
        </Text>
      </TouchableOpacity>

      {/* Forgot Password */}
      <Text className="text-center text-sm text-gray-700 font-medium">
        Forgot password ?
      </Text>
    </View>
  );
}
