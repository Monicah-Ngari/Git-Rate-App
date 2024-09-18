import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Constants from "expo-constants";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#25292c",

    paddingBottom: 5,
  },
  text: {
    fontSize: 25,
    color: "white",
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.text}> Repositories</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AppBar;
