import { Pressable, Text, TextInput, View } from "react-native";
import { useFormik } from "formik";

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
      <Text>The sign-in view</Text>
      <View>
        <TextInput
          placeholder="Username"
          value={formik.values.username}
          onChangeText={formik.handleChange("username")}
        />

        <TextInput
          placeholder="Password"
          value={formik.values.password}
          onChangeText={formik.handleChange("password")}
          secureTextEntry={true}
        />

        <Pressable onSubmit={formik.handleSubmit}>
          <Text>Sign In</Text>
        </Pressable>
      </View>
    </>
  );
};

export default SignIn;
