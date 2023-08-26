import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

function Register({ users }) {
  const [name, setName] = useState("");
  const [username, setUserame] = useState("");
  const [surname, setSurname] = useState("");
  const [password, setPassword] = useState("");
  const [mail, setMail] = useState("");

  const navigation = useNavigation();

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  };

  const handleSubmit = () => {
    const userExists = users.some(
      (user) => user.username === username || user.mail === mail
    );

    if (userExists) {
      alert("Bu kullanıcı adı veya e-mail zaten kayıtlı.");
      return;
    }

    if (!validateEmail(mail)) {
      alert("Lütfen geçerli bir e-posta adresi girin.");
      return;
    }

    const data = {
      username: username,
      password: password,
      name: name,
      surname: surname,
      mail: mail,
    };

    fetch("http://10.0.2.2:5000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.ok) {
          alert("Kullanıcı kaydınız oluşturuldu.");
          navigation.navigate("Login");
        } else {
          alert("Kullanıcı kaydı oluşturulamadı");
        }
      })
      .catch((error) =>
        alert("Beklenmedik bir ağ hatası oluştu. Lütfen tekrar deneyin")
      );
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Giriş Yap</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Adınız"
        style={styles.input}
      />
      <TextInput
        value={surname}
        onChangeText={setSurname}
        placeholder="Soy adınız"
        style={styles.input}
      />
      <TextInput
        value={username}
        onChangeText={setUserame}
        placeholder="Kullanıcı adınız"
        style={styles.input}
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Şifre"
        secureTextEntry={true}
        style={styles.input}
      />
      <TextInput
        value={mail}
        onChangeText={setMail}
        placeholder="Mail adresiniz"
        style={styles.input}
      />
      <Button onPress={handleSubmit} title="Kayıt ol" />
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
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    marginBottom: 10,
    borderRadius: 4,
  },
  button: {
    textAlign: "center",
  },
});

export default Register;
