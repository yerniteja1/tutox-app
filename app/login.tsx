import AuthLayout from "@/src/components/layout/AuthLayout";
import { Text } from "react-native";

export default function LoginPage() {
  return (
    <AuthLayout>
      <Text className="text-primary text-center font-bold text-lg">
        NativeWind is working ✅
      </Text>
    </AuthLayout>
  );
}
