import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";

function BusTrip({ fromCity, toCity, date }) {
  const SEFERLER = [
    {
      id: "1",
      from: "İstanbul",
      to: "Ankara",
      date: "27/8/2023",
      time: "09:00",
      price: 400,
      seats: [
        { id: 4, number: 1, status: "female" },
        { id: 5, number: 2, status: "empty" },
        { id: 6, number: 3, status: "empty" },
        { id: 7, number: 4, status: "empty" },
        { id: 8, number: 5, status: "empty" },
        { id: 9, number: 6, status: "empty" },
        { id: 10, number: 7, status: "empty" },
        { id: 11, number: 8, status: "empty" },
        { id: 12, number: 9, status: "empty" },
        { id: 13, number: 10, status: "empty" },
        { id: 14, number: 11, status: "male" },
        { id: 15, number: 12, status: "empty" },
      ],
    },
    {
      id: "2",
      from: "İstanbul",
      to: "Ankara",
      date: "27/8/2023",
      time: "19:00",
      price: 400,
      seats: [
        { id: 4, number: 1, status: "female" },
        { id: 5, number: 2, status: "empty" },
        { id: 6, number: 3, status: "empty" },
        { id: 7, number: 4, status: "empty" },
        { id: 8, number: 5, status: "empty" },
        { id: 9, number: 6, status: "empty" },
        { id: 10, number: 7, status: "empty" },
        { id: 11, number: 8, status: "empty" },
        { id: 12, number: 9, status: "empty" },
        { id: 13, number: 10, status: "empty" },
        { id: 14, number: 11, status: "male" },
        { id: 15, number: 12, status: "empty" },
      ],
    },
    {
      id: "3",
      from: "İstanbul",
      to: "Ankara",
      date: "30/8/2023",
      time: "21:00",
      price: 400,
      seats: [
        { id: 4, number: 1, status: "female" },
        { id: 5, number: 2, status: "empty" },
        { id: 6, number: 3, status: "empty" },
        { id: 7, number: 4, status: "empty" },
        { id: 8, number: 5, status: "empty" },
        { id: 9, number: 6, status: "empty" },
        { id: 10, number: 7, status: "empty" },
        { id: 11, number: 8, status: "empty" },
        { id: 12, number: 9, status: "empty" },
        { id: 13, number: 10, status: "empty" },
        { id: 14, number: 11, status: "male" },
        { id: 15, number: 12, status: "empty" },
      ],
    },
    {
      id: "4",
      from: "İstanbul",
      to: "Ankara",
      date: "10/9/2023",
      time: "08:30",
      price: 400,
      seats: [
        { id: 4, number: 1, status: "female" },
        { id: 5, number: 2, status: "empty" },
        { id: 6, number: 3, status: "empty" },
        { id: 7, number: 4, status: "empty" },
        { id: 8, number: 5, status: "empty" },
        { id: 9, number: 6, status: "empty" },
        { id: 10, number: 7, status: "empty" },
        { id: 11, number: 8, status: "empty" },
        { id: 12, number: 9, status: "empty" },
        { id: 13, number: 10, status: "empty" },
        { id: 14, number: 11, status: "male" },
        { id: 15, number: 12, status: "empty" },
      ],
    },
    {
      id: "5",
      from: "İstanbul",
      to: "İzmir",
      date: "27/8/2023",
      time: "09:00",
      price: 300,
      seats: [
        { id: 4, number: 1, status: "female" },
        { id: 5, number: 2, status: "empty" },
        { id: 6, number: 3, status: "empty" },
        { id: 7, number: 4, status: "empty" },
        { id: 8, number: 5, status: "empty" },
        { id: 9, number: 6, status: "empty" },
        { id: 10, number: 7, status: "empty" },
        { id: 11, number: 8, status: "empty" },
        { id: 12, number: 9, status: "empty" },
        { id: 13, number: 10, status: "empty" },
        { id: 14, number: 11, status: "male" },
        { id: 15, number: 12, status: "empty" },
      ],
    },
    {
      id: "6",
      from: "İstanbul",
      to: "Muğla",
      date: "27/8/2023",
      time: "17:00",
      price: 700,
      seats: [
        { id: 4, number: 1, status: "female" },
        { id: 5, number: 2, status: "empty" },
        { id: 6, number: 3, status: "empty" },
        { id: 7, number: 4, status: "empty" },
        { id: 8, number: 5, status: "empty" },
        { id: 9, number: 6, status: "empty" },
        { id: 10, number: 7, status: "empty" },
        { id: 11, number: 8, status: "empty" },
        { id: 12, number: 9, status: "empty" },
        { id: 13, number: 10, status: "empty" },
        { id: 14, number: 11, status: "male" },
        { id: 15, number: 12, status: "empty" },
      ],
    },
    {
      id: "7",
      from: "Ankara",
      to: "İzmir",
      date: "27/8/2023",
      time: "20:30",
      price: 700,
      seats: [
        { id: 4, number: 1, status: "female" },
        { id: 5, number: 2, status: "empty" },
        { id: 6, number: 3, status: "empty" },
        { id: 7, number: 4, status: "empty" },
        { id: 8, number: 5, status: "empty" },
        { id: 9, number: 6, status: "empty" },
        { id: 10, number: 7, status: "empty" },
        { id: 11, number: 8, status: "empty" },
        { id: 12, number: 9, status: "empty" },
        { id: 13, number: 10, status: "empty" },
        { id: 14, number: 11, status: "male" },
        { id: 15, number: 12, status: "empty" },
      ],
    },
    {
      id: "8",
      from: "İstanbul",
      to: "Ankara",
      date: "10/9/2023",
      time: "21:45",
      price: 400,
      seats: [
        { id: 4, number: 1, status: "female" },
        { id: 5, number: 2, status: "empty" },
        { id: 6, number: 3, status: "empty" },
        { id: 7, number: 4, status: "empty" },
        { id: 8, number: 5, status: "empty" },
        { id: 9, number: 6, status: "empty" },
        { id: 10, number: 7, status: "empty" },
        { id: 11, number: 8, status: "empty" },
        { id: 12, number: 9, status: "empty" },
        { id: 13, number: 10, status: "empty" },
        { id: 14, number: 11, status: "male" },
        { id: 15, number: 12, status: "empty" },
      ],
    },
    {
      id: "9",
      from: "İstanbul",
      to: "Kastamonu",
      date: "27/8/2023",
      time: "19:00",
      price: 650,
      seats: [
        { id: 4, number: 1, status: "female" },
        { id: 5, number: 2, status: "empty" },
        { id: 6, number: 3, status: "empty" },
        { id: 7, number: 4, status: "empty" },
        { id: 8, number: 5, status: "empty" },
        { id: 9, number: 6, status: "empty" },
        { id: 10, number: 7, status: "empty" },
        { id: 11, number: 8, status: "empty" },
        { id: 12, number: 9, status: "empty" },
        { id: 13, number: 10, status: "empty" },
        { id: 14, number: 11, status: "male" },
        { id: 15, number: 12, status: "empty" },
      ],
    },
    {
      id: "10",
      from: "İstanbul",
      to: "Ankara",
      date: "28/8/2023",
      time: "15:00",
      price: 400,
      seats: [
        { id: 4, number: 1, status: "female" },
        { id: 5, number: 2, status: "empty" },
        { id: 6, number: 3, status: "empty" },
        { id: 7, number: 4, status: "empty" },
        { id: 8, number: 5, status: "empty" },
        { id: 9, number: 6, status: "empty" },
        { id: 10, number: 7, status: "empty" },
        { id: 11, number: 8, status: "empty" },
        { id: 12, number: 9, status: "empty" },
        { id: 13, number: 10, status: "empty" },
        { id: 14, number: 11, status: "male" },
        { id: 15, number: 12, status: "empty" },
      ],
    },
    {
      id: "11",
      from: "İstanbul",
      to: "İzmir",
      date: "27/8/2023",
      time: "17:00",
      price: 300,
      seats: [
        { id: 4, number: 1, status: "female" },
        { id: 5, number: 2, status: "empty" },
        { id: 6, number: 3, status: "empty" },
        { id: 7, number: 4, status: "empty" },
        { id: 8, number: 5, status: "empty" },
        { id: 9, number: 6, status: "empty" },
        { id: 10, number: 7, status: "empty" },
        { id: 11, number: 8, status: "empty" },
        { id: 12, number: 9, status: "empty" },
        { id: 13, number: 10, status: "empty" },
        { id: 14, number: 11, status: "male" },
        { id: 15, number: 12, status: "empty" },
      ],
    },
  ];

  const formattedDate = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`;
  // Seçilen bilgilere göre seferleri filtrele
  const filteredSeferler = SEFERLER.filter(
    (sefer) =>
      sefer.from === fromCity &&
      sefer.to === toCity &&
      sefer.date === formattedDate
  );

  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, padding: 20 }}>
      {filteredSeferler.length > 0 ? (
        <FlatList
          data={filteredSeferler}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{
                padding: 15,
                borderBottomColor: "#ccc",
                borderBottomWidth: 1,
              }}
              onPress={() => navigation.navigate("BusDetails", { trip: item })}
            >
              <Text>
                {item.from} {"->"} {item.to}
              </Text>
              <Text>Tarih: {item.date}</Text>
              <Text>Saat: {item.time}</Text>
              <Text>Fiyat: {item.price}</Text>
            </TouchableOpacity>
          )}
        />
      ) : (
        <Text>Seçtiğiniz tarih ve lokasyonlarda sefer bulunmamaktadır.</Text>
      )}
    </View>
  );
}

export default BusTrip;
