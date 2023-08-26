import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

function LoginScreen({ users, setCurrentUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [focusUsername, setFocusUsername] = useState(false);
  const [focusPassword, setFocusPassword] = useState(false);

  const navigation = useNavigation();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = users.find(
      (u) => u.username === username && u.password === password
    );
    if (user) {
      setCurrentUser(user);
      navigation.navigate("Home");
    } else {
      alert("Kullanıcı kaydı bulunamadı. Lütfen bilgilerinizi kontrol ediniz");
    }
  };

  const handleGoRegister = () => {
    navigation.navigate("Register");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Giriş Yap</Text>
      <TextInput
        onFocus={() => setFocusUsername(true)}
        onBlur={() => setFocusUsername(false)}
        value={username}
        onChangeText={setUsername}
        placeholder="Kullanıcı Adı"
        style={!focusUsername ? styles.input : styles.inputFocused}
      />
      <TextInput
        onFocus={() => setFocusUsername(true)}
        value={password}
        onChangeText={setPassword}
        placeholder="Şifre"
        secureTextEntry={true}
        style={!focusUsername ? styles.input : styles.inputFocused}
      />
      {!focusUsername && (
        <Text style={styles.text}>Devam etmek için lütfen giriş yapınız</Text>
      )}
      <View style={styles.button}>
        <Button style={styles.btn} title="Giriş" onPress={handleSubmit} />
        <Button title="Kayıt ol" onPress={handleGoRegister} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    alignSelf: "center",
  },
  input: {
    borderWidth: 2,
    borderColor: "#ff0000",
    padding: 10,
    marginBottom: 10,
    borderRadius: 4,
  },
  inputFocused: {
    borderWidth: 1,
    borderColor: "#007AFF",
    padding: 10,
    marginBottom: 10,
    borderRadius: 4,
  },
  button: {
    marginTop: 10,
    flex: 1,
    gap: 10,
  },
  btn: {
    padding: 20,
    backgroundColor: "#007AFF",
  },
  text: {
    color: "#FF0000",
    fontSize: 15,
  },
});

export default LoginScreen;
