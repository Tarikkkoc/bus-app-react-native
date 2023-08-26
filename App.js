// import { NavigationContainer, useNavigation } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View } from "react-native";
// import LoginScreen from "./src/pages/auth/Login";
// import { useEffect, useState } from "react";
// import Register from "./src/pages/auth/Register";
// import Home from "./src/pages/home/Home";
// import BusTrip from "./src/pages/bus-trip/BusTrip";

// export default function App() {
//   const Stack = createStackNavigator();
//   const [users, setUsers] = useState([]);
//   const [currentUser, setCurrentUser] = useState(null);

//   const [fromCity, setFromCity] = useState();
//   const [toCity, setToCity] = useState();
//   const [date, setDate] = useState(new Date());
//   const [isCalendarVisible, setCalendarVisibility] = useState(false);

//   useEffect(() => {
//     fetch("http://10.0.2.2:5000/users")
//       .then((res) => res.json())
//       .then((data) => setUsers(data))
//       .catch((error) => alert(error));
//     console.log(users);
//   }, []);

//   // const handleLogin = (username, password) => {
//   //   const user = users.filter(
//   //     (u) => u.username === username && u.password === password
//   //   );
//   //   if (user) {
//   //     setCurrentUser(user);
//   //     alert(user);
//   //   } else {
//   //     alert("Kullanıcı kaydı bulunamadı. Lütfen bilgilerinizi kontrol ediniz");
//   //   }
//   // };

//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Login">
//         <Stack.Screen
//           name="Login"
//           component={LoginScreen}
//           initialParams={{
//             users: users,
//             setCurrentUser: setCurrentUser,
//           }}
//         />
//         <Stack.Screen name="Register" component={Register} />
//         <Stack.Screen
//           name="Home"
//           component={Home}
//           initialParams={{
//             setFromCity: setFromCity,
//             setToCity: setToCity,
//             setDate: setDate,
//             setCalendarVisibility: setCalendarVisibility,
//             fromCity: fromCity,
//             toCity: toCity,
//             date: date,
//             isCalendarVisible: isCalendarVisible,
//           }}
//         />
//         <Stack.Screen
//           name="BusTrip"
//           component={BusTrip}
//           initialParams={{ fromCity: fromCity, toCity: toCity, date: date }}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./src/pages/auth/Login";
import { useEffect, useState } from "react";
import Register from "./src/pages/auth/Register";
import Home from "./src/pages/home/Home";
import BusTrip from "./src/pages/bus-trip/BusTrip";
import BusDetails from "./src/pages/bus-trip/BusDetails";
import Payment from "./src/pages/payment/Payment";
import PaymentSuccess from "./src/pages/payment/PaymentSuccess";

export default function App() {
  const Stack = createStackNavigator();
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  const [fromCity, setFromCity] = useState();
  const [toCity, setToCity] = useState();
  const [date, setDate] = useState(new Date());
  const [isCalendarVisible, setCalendarVisibility] = useState(false);

  useEffect(() => {
    fetch("http://10.0.2.2:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((error) => alert(error));
    console.log(users);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          children={() => (
            <LoginScreen users={users} setCurrentUser={setCurrentUser} />
          )}
        />
        <Stack.Screen
          name="Register"
          children={() => <Register users={users} />}
        />
        <Stack.Screen
          name="Home"
          children={() => (
            <Home
              setFromCity={setFromCity}
              setToCity={setToCity}
              setDate={setDate}
              setCalendarVisibility={setCalendarVisibility}
              fromCity={fromCity}
              toCity={toCity}
              date={date}
              isCalendarVisible={isCalendarVisible}
            />
          )}
        />
        <Stack.Screen
          name="BusTrip"
          children={() => (
            <BusTrip fromCity={fromCity} toCity={toCity} date={date} />
          )}
        />
        <Stack.Screen
          name="BusDetails"
          children={(props) => (
            <BusDetails {...props} currentUser={currentUser} />
          )}
        />
        <Stack.Screen
          name="Payment"
          children={(props) => <Payment {...props} />}
        />
        <Stack.Screen
          name="PaymentSuccess"
          children={(props) => <PaymentSuccess />}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
