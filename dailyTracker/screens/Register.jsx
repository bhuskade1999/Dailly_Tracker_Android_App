import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Avatar, Button } from 'react-native-paper'
import { useDispatch } from 'react-redux';
import { register } from '../redux/action';
import * as ImagePicker from 'expo-image-picker';
import mime from 'mime';
import blackProfile from "../assets/BlankProfile.png"

const Register = ({ navigation, route }) => {
  const [avatar, setAvatar] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleImage = async () => {
    const imagePickerResult = await ImagePicker.launchImageLibraryAsync();

    if (!imagePickerResult.canceled && imagePickerResult.assets.length > 0) {
      const selectedImage = imagePickerResult.assets[0];
      setAvatar(selectedImage.uri);
    }
  };

  const registerHandler = () => {
    const myForm = new FormData();
    myForm.append("name", name);
    myForm.append("email", email);
    myForm.append("password", password);
    myForm.append("avatar", {
      uri: avatar,
      type: mime.getType(avatar),
      name: avatar.split('/').pop()
    });

    dispatch(register(myForm));
  };

  useEffect(() => {
    if (route.params && route.params.image) {
      setAvatar(route.params.image);
    }
  }, [route]);

  return (
    <View style={styles.container}>
      <Avatar.Image
        size={100}
        source={avatar ? { uri: avatar } : blackProfile}
        style={styles.avatar}
      />
      <TouchableOpacity onPress={handleImage}>
        <Text style={styles.changePhoto}>Change Photo</Text>
      </TouchableOpacity>

      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          secureTextEntry
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <Button
        disabled={!email || !password || !name || !avatar}
        style={styles.btn}
        onPress={registerHandler}
      >
        <Text style={styles.btnText}>Register</Text>
      </Button>

      <TouchableOpacity onPress={() => navigation.navigate("login")}>
        <Text style={styles.loginText}>Have an Account? Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  avatar: {
    backgroundColor: "#900",
  },
  changePhoto: {
    color: "#900",
    marginTop: 10,
  },
  formContainer: {
    width: "70%",
  },
  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#b5b5b5",
    padding: 10,
    paddingLeft: 15,
    borderRadius: 5,
    marginVertical: 15,
    fontSize: 15,
  },
  btn: {
    backgroundColor: "#900",
    padding: 5,
    width: "70%",
  },
  btnText: {
    color: "#fff",
  },
  loginText: {
    color: "#900",
    height: 30,
    margin: 20,
  },
});

export default Register;
