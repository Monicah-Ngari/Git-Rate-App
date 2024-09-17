import { StyleSheet, View } from "react-native";
import RepositoryList from "@/components/RepositoryList";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerImage={<View />}
      headerBackgroundColor={{
        light: "transparent",
        dark: "transparent",
      }}
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={styles.lightText}>
          Welcome!
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle" style={styles.lightText}>
          Repositories:
        </ThemedText>
        <RepositoryList />
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: "#FFFFFF",
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
    backgroundColor: "#FFFFFF",
  },
  lightText: {
    color: "#FFFFFF",
  },
});
