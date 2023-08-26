import React from "react";
import { View, Text, Button, Alert } from "react-native";
import CalendarPicker from "react-native-calendar-picker";
import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";

function Home({
  setFromCity,
  setToCity,
  setDate,
  setCalendarVisibility,
  fromCity,
  toCity,
  date,
  isCalendarVisible,
}) {
  const navigation = useNavigation();
  const cities = ["İstanbul", "Ankara", "İzmir", "Kastamonu", "Muğla"];

  const handleConfirm = () => {
    if (!fromCity || !toCity || !date) {
      Alert.alert("Hata", "Lütfen tüm alanları doldurun.");
      return;
    } else {
      navigation.navigate("BusTrip");
    }
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Picker
        selectedValue={fromCity}
        onValueChange={(itemValue) => setFromCity(itemValue)}
      >
        <Picker.Item label="Nereden?" value={null} />
        {cities.map((city) => (
          <Picker.Item key={city} label={city} value={city} />
        ))}
      </Picker>

      <Picker
        selectedValue={toCity}
        onValueChange={(itemValue) => setToCity(itemValue)}
      >
        <Picker.Item label="Nereye?" value={null} />
        {cities.map((city) => (
          <Picker.Item key={city} label={city} value={city} />
        ))}
      </Picker>

      <Button title="Tarih Seç" onPress={() => setCalendarVisibility(true)} />

      {isCalendarVisible && (
        <CalendarPicker
          onDateChange={(newDate) => {
            setDate(newDate.toDate());
            setCalendarVisibility(false);
          }}
        />
      )}

      <Text>
        Seçilen Tarih: {date.getDate()}/{date.getMonth() + 1}/
        {date.getFullYear()}
      </Text>

      <Button title="Seferleri Getir" onPress={handleConfirm} />
    </View>
  );
}

export default Home;
