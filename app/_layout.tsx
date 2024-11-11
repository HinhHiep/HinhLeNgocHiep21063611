import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="screen2"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
