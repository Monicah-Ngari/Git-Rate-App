import Constants from "expo-constants";
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#24292e",
    paddingBottom: 5,
  },
  text: {
    fontSize: 20,
    color: "white",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between", // Ensures the text is spaced evenly
    paddingHorizontal: 10, // Optional padding to space it nicely
  },
  textPadding: {
    marginRight: 20,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <TouchableOpacity>
          <View style={styles.row}>
            <Text style={[styles.text, styles.textPadding]}>Repositories</Text>
            <Text style={styles.text}>Sign In</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default AppBar;
