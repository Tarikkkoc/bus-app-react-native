// BusDetails.js

import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Button,
} from "react-native";
import { ToastAndroid } from "react-native";

function BusDetails({ navigation, route, currentUser }) {
  const { trip } = route.params;
  const [selectedGender, setSelectedGender] = useState(null);

  const [seats, setSeats] = useState(trip.seats);
  const [price, setPrice] = useState(trip.price);
  const [selectedSeatsCount, setSelectedSeatsCount] = useState(0);
  const [selectedSeats, setSelectedSeats] = useState([]);

  useEffect(() => {
    setPrice(trip.price * selectedSeatsCount);
  }, [selectedSeatsCount]);

  const selectSeat = (selectedSeat) => {
    if (selectedSeatsCount >= 5 && selectedSeat.status === "empty") {
      ToastAndroid.show(
        "En fazla 5 koltuk seçebilirsiniz!",
        ToastAndroid.SHORT
      );
      return;
    }
    if (selectedGender) {
      if (selectedSeat.status === selectedGender) {
        setSelectedSeats((prevSeats) =>
          prevSeats.filter((seat) => seat.id !== selectedSeat.id)
        );
        setSelectedSeatsCount((prevCount) => prevCount - 1);
        let updatedSeats = seats.map((seat) =>
          seat.id === selectedSeat.id ? { ...seat, status: "empty" } : seat
        );
        setSeats(updatedSeats);
        return;
      }

      let leftSeat = seats.find((s) => s.id === selectedSeat.id - 1);
      let rightSeat = seats.find((s) => s.id === selectedSeat.id + 1);

      if ((selectedSeat.id - 1) % 2 === 0) {
        if (
          leftSeat &&
          leftSeat.status !== "empty" &&
          leftSeat.status !== selectedGender
        ) {
          Alert.alert(
            "Uyarı",
            "Yan koltuk zaten diğer bir cinsiyet tarafından seçilmiş."
          );
          return;
        }
      } else {
        if (
          rightSeat &&
          rightSeat.status !== "empty" &&
          rightSeat.status !== selectedGender
        ) {
          Alert.alert(
            "Uyarı",
            "Yan koltuk zaten diğer bir cinsiyet tarafından seçilmiş."
          );
          return;
        }
      }
      setSelectedSeatsCount((prevCount) => prevCount + 1);
      let updatedSeats = seats.map((seat) =>
        seat.id === selectedSeat.id ? { ...seat, status: selectedGender } : seat
      );
      setSeats(updatedSeats);
    } else {
      Alert.alert("Uyarı", "Lütfen önce cinsiyetinizi seçin!");
    }
  };

  return (
    <View style={styles.busContainer}>
      <View style={styles.genderSelect}>
        <Text>Cinsiyetinizi seçiniz:</Text>
        <TouchableOpacity
          onPress={() => setSelectedGender("male")}
          style={[
            styles.genderButton,
            selectedGender === "male" && styles.selected,
          ]}
        >
          <Text>Erkek</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelectedGender("female")}
          style={[
            styles.genderButton,
            selectedGender === "female" && styles.selected,
          ]}
        >
          <Text>Kadın</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        {seats.slice(0, 2).map((seat) => renderSeat(seat))}
        <View style={{ width: "10%" }} />
        {seats.slice(2, 4).map((seat) => renderSeat(seat))}
      </View>
      <View style={styles.row}>
        {seats.slice(4, 6).map((seat) => renderSeat(seat))}
        <View style={{ width: "10%" }} />
        {seats.slice(6, 8).map((seat) => renderSeat(seat))}
      </View>
      <View style={styles.row}>
        {seats.slice(8, 10).map((seat) => renderSeat(seat))}
        <View style={{ width: "10%" }} />
        {seats.slice(10, 12).map((seat) => renderSeat(seat))}
      </View>
      <View style={styles.container}>
        <Text>Fiyat:{price}</Text>
        <TouchableOpacity
          style={styles.payButton}
          onPress={() =>
            navigation.navigate("Payment", {
              price: price,
              selectedSeats: selectedSeats,
            })
          }
        >
          <Text style={styles.payButtonText}>Öde</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
  function renderSeat(seat) {
    return (
      <TouchableOpacity
        key={seat.id}
        style={styles.seatContainer}
        onPress={() => selectSeat(seat)}
      >
        {seat.status === "empty" && <Text style={styles.seatIcon}>🪑</Text>}
        {seat.status === "male" && <Text style={styles.seatIcon}>🚹</Text>}
        {seat.status === "female" && <Text style={styles.seatIcon}>🚺</Text>}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  busContainer: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  genderSelect: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  genderButton: {
    marginLeft: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
  selected: {
    backgroundColor: "#ddd",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 15,
  },
  seatContainer: {
    width: "22%",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    marginLeft: 10,
    marginRight: 10,
    borderWidth: 1,
    borderRadius: 10,
  },
  seatIcon: {
    fontSize: 24,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10, // İsterseniz padding ekleyebilirsiniz.
  },
  payButton: {
    backgroundColor: "#007AFF", // Mavi bir arkaplan rengi
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  payButtonText: {
    color: "white", // Beyaz yazı rengi
    fontSize: 16, // Yazı boyutu
  },
});

export default BusDetails;
