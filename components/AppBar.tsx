import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Constants from "expo-constants";
import { ScrollView } from "react-native-gesture-handler";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#24292e",

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
      <ScrollView>
        <TouchableOpacity>
          <Text style={styles.text}> Repositories</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default AppBar;
