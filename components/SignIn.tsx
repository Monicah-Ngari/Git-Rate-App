import { Pressable, Text, TextInput, View, StyleSheet } from "react-native";
import { useFormik } from "formik";

const styles = StyleSheet.create({
  text: {
    borderWidth: 1,
    borderColor: "black",
    padding: 8,
    marginBottom: 12, // Adds space between the text inputs
  },
  button: {
    borderWidth: 1,
    backgroundColor: "#0165D4", // Corrected hexadecimal value
    borderColor: "black",
    padding: 8,
    color: "white",
    textAlign: "center", // Centers the text inside the button
  },
});

const SignIn = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
      {/* <Text>The sign-in view</Text> */}
      <View>
        <TextInput
          placeholder="Username"
          value={formik.values.username}
          onChangeText={formik.handleChange("username")}
          style={styles.text}
        />

        <TextInput
          placeholder="Password"
          value={formik.values.password}
          onChangeText={formik.handleChange("password")}
          secureTextEntry={true}
          style={styles.text}
        />

        <Pressable onPress={formik.handleSubmit}>
          <Text style={styles.button}>Sign In</Text>
        </Pressable>
      </View>
    </>
  );
};

export default SignIn;
