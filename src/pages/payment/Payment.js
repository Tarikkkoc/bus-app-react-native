import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Text, Alert } from "react-native";

function Payment({ navigation, route }) {
  const { price, selectedSeats } = route.params;
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState();
  const [cardCVV, setCardCVV] = useState("");
  const [cardExpiryDate, setCardExpiryDate] = useState("");

  const handlePayment = () => {
    if (cardNumber.length < 16) {
      Alert.alert("Hata", "Lütfen geçerli bir kart numarası girin.");
      return;
    }
    const data = {
      number: cardNumber,
      name: cardName,
      date: cardExpiryDate,
      cvc: cardCVV,
    };

    fetch("http://10.0.2.2:5000/credit-card", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.ok) {
          Alert.alert("Başarılı", "Ödeme işlemi gerçekleştirildi");
          navigation.navigate("PaymentSuccess");
        } else {
          Alert.alert("Hata", "Ödeme işlemi başarısız");
        }
      })
      .catch((error) => alert(error));
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Kart Üzerindeki İsim"
        value={cardName}
        onChangeText={setCardName}
        style={styles.input}
      />
      <TextInput
        placeholder="Kart Numarası"
        value={cardNumber}
        onChangeText={setCardNumber}
        keyboardType="numeric"
        maxLength={16}
        style={styles.input}
      />
      <View style={styles.row}>
        <TextInput
          placeholder="CVV"
          value={cardCVV}
          onChangeText={setCardCVV}
          keyboardType="numeric"
          maxLength={3}
          style={[styles.input, styles.cvvInput]}
        />
        <TextInput
          placeholder="AA/YY"
          value={cardExpiryDate}
          onChangeText={setCardExpiryDate}
          keyboardType="numeric"
          maxLength={5}
          style={[styles.input, styles.expiryInput]}
        />
      </View>
      <View style={styles.summary}>
        <Text>Özet</Text>
        <Text>Toplam fiyat: {price}TL</Text>
        <Text>
          Seçtiğiniz koltuklar:{" "}
          {selectedSeats.map((seat) => seat.number).join(", ")}
        </Text>
      </View>
      <Button title="Öde" onPress={handlePayment} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 15,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cvvInput: {
    flex: 1,
    marginRight: 10,
  },
  expiryInput: {
    flex: 2,
  },
  summary: {
    marginBottom: 20,
  },
});

export default Payment;
