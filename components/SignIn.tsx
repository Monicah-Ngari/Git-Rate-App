import { Pressable, Text, TextInput, View, StyleSheet } from "react-native";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
});

const styles = StyleSheet.create({
  text: {
    borderWidth: 1,
    borderColor: "black",
    padding: 8,
    marginBottom: 12,
  },
  button: {
    borderWidth: 1,
    backgroundColor: "#0165D4",
    borderColor: "black",
    padding: 8,
    color: "white",
    textAlign: "center",
  },
  textError: {
    borderColor: "#d73a4a",
  },
  errorText: {
    color: "#d73a4a",
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
      <View>
        <TextInput
          placeholder="Username"
          value={formik.values.username}
          onChangeText={formik.handleChange("username")}
          onBlur={formik.handleBlur("username")}
          style={
            formik.touched.username && formik.errors.username
              ? styles.textError
              : styles.text
          }
        />
        {formik.touched.username && formik.errors.username ? (
          <Text style={styles.errorText}>{formik.errors.username}</Text>
        ) : null}

        <TextInput
          placeholder="Password"
          value={formik.values.password}
          onChangeText={formik.handleChange("password")}
          onBlur={formik.handleBlur("password")}
          secureTextEntry={true}
          style={
            formik.touched.password && formik.errors.password
              ? styles.textError
              : styles.text
          }
        />
        {formik.touched.password && formik.errors.password ? (
          <Text style={styles.errorText}>{formik.errors.password}</Text>
        ) : null}

        <Pressable onPress={formik.handleSubmit}>
          <Text style={styles.button}>Sign In</Text>
        </Pressable>
      </View>
    </>
  );
};

export default SignIn;
