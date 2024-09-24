import {
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
  Platform,
} from "react-native";
import RepositoryList from "@/components/RepositoryList";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import AppBar from "@/components/AppBar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NativeRouter, Routes, Route, Navigate } from "react-router-native";
import SignIn from "@/components/SignIn";

export default function HomeScreen() {
  return (
    <NativeRouter>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <AppBar />
        <ScrollView contentContainerStyle={styles.container}>
          <ThemedView style={styles.stepContainer}>
            <ThemedText type="subtitle" style={styles.subtitleText}>
              <TouchableOpacity></TouchableOpacity>
            </ThemedText>
            <Routes>
              <Route path="/" element={<SignIn />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
            <RepositoryList />
          </ThemedView>
        </ScrollView>
      </GestureHandlerRootView>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#FFFFFF",
    padding: 16,
    fontFamily: Platform.OS === "android" ? "sans-serif" : "Arial",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  titleText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#000",
  },
  stepContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  subtitleText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#000",
  },
});
