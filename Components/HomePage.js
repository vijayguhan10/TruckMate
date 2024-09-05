import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useFonts } from "@expo-google-fonts/bungee";
import { LinearGradient } from "expo-linear-gradient";
import trucklogo from "../assets/trucklogo.jpg";
import { useNavigation } from "@react-navigation/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const HomePage = () => {
  const navigation = useNavigation();
  // const [Signups, SetSignup] = useState(false);
  let [fontsLoaded] = useFonts({
    Bungee: require("@expo-google-fonts/bungee").Bungee_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <LinearGradient colors={["#0C3A2D", "#21A07C"]} style={styles.gradient}>
      <View style={styles.container}>
        <View style={styles.moveimage}>
          <Image style={styles.images} source={trucklogo} />
        </View>
        <Text style={styles.text}>TruckMate</Text>
        <View style={styles.moveButtons}>
          <View style={styles.moveinnerbuttons}>
            <TouchableOpacity
              onPress={() => {
                // SetSignup(false);
                navigation.navigate("LoginInfo", { Signups: false });
              }}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.moveinnerbuttons}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("LoginInfo", { Signups: true });
              }}
              style={styles.button}
            >
              <Text style={styles.buttonText}>signup</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    width: "auto",
    height: "auto",
    justifyContent: "center",
    alignItems: "center",
  },
  moveimage: {
    paddingTop: hp("10%"),
    paddingRight: wp("5%"),
  },
  images: {
    width: wp("60%"),
    height: hp("30%"),
    borderRadius: wp("30%"),
    borderColor: "orange",
    borderWidth: 3,
  },
  text: {
    fontFamily: "Bungee",
    fontSize: 35,
    color: "white",
    textShadowColor: "orange",
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 1,
    marginTop: hp("1%"),
  },
  moveButtons: {
    flexDirection: "colum",
    justifyContent: "space-around",
    width: "50%",
  },
  moveinnerbuttons: {
    marginTop: "20%",
  },
  button: {
    backgroundColor: "black",
    paddingVertical: hp("1.8%"),
    paddingHorizontal: wp("5%"),
    borderRadius: 30,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "800",
  },
});

export default HomePage;
