import { StyleSheet, ScrollView, View } from "react-native";
import RepositoryList from "@/components/RepositoryList";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle" style={styles.subtitleText}>
          Repositories:
        </ThemedText>
        <RepositoryList />
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#FFFFFF",
    padding: 16,
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
