import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image, Text, TextInput, Alert } from "react-native";
import vijay from "../../assets/new vijay .jpg";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { Pacifico_400Regular } from "@expo-google-fonts/pacifico";
import { useFonts } from "expo-font";
import { SpaceGrotesk_400Regular } from "@expo-google-fonts/space-grotesk";
import * as Location from "expo-location";
import { Play_400Regular } from "@expo-google-fonts/play";
const DetailedInfo = () => {
  const [fontsLoaded] = useFonts({
    SpaceGrotesk_400Regular,
    Play_400Regular,
    Pacifico_400Regular,
  });

  const [location, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.ProfileUI}>
        <Text style={styles.truckmate}>Truck Mate</Text>
        <View style={styles.ImageContainer}>
          <Image source={vijay} style={styles.ImageUser} />
        </View>
      </View>
      <Text style={styles.AddYourName}>Update Your Profile</Text>
      <View style={styles.borderGreen}></View>
      <View colors={["#d5f2df"]} style={styles.colorsforform}>
        <View style={styles.flexcontainer}>
          <Text style={styles.textforuser}>UserName</Text>
          <TextInput
            style={styles.inputusers}
            placeholder="Enter your username"
          ></TextInput>
        </View>
        <View style={styles.flexcontainer}>
          <Text style={styles.textforuser}>Email</Text>
          <TextInput
            style={styles.inputusers}
            placeholder="Enter your email"
          ></TextInput>
        </View>
        <View style={styles.flexcontainer}>
          <Text style={styles.textforuser}>Phone Number</Text>
          <TextInput
            style={styles.inputusers}
            placeholder="Enter your phone number"
          ></TextInput>
        </View>
        <View style={styles.flexcontainer}>
          <Text style={styles.textforuser}>Address</Text>
          <TextInput
            style={styles.inputusers}
            placeholder="Enter your address"
          ></TextInput>
        </View>
        <View style={styles.flexcontainer}>
          <Text style={styles.textforuser}>Location</Text>
          <TextInput
            style={styles.inputusers}
            value={
              location
                ? `Lat: ${location.coords.latitude}, Lon: ${location.coords.longitude}`
                : "Fetching location..."
            }
            editable={false}
          />
        </View>
      </View>
    </View>
  );
};

export default DetailedInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  truckmate: {
    fontSize: 25,
    paddingTop: hp("7%"),
    fontFamily: "Pacifico_400Regular",
    fontWeight: "400",
    backgroundColor: "transparent",
    color: "black",
  },
  GradientBackground: {
    flex: 1,
    padding: 20,
  },
  ProfileUI: {
    backgroundColor: "silver",
    height: hp("37%"),
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    marginBottom: hp("5%"),
  },
  ImageContainer: {
    width: wp("40%"),
    height: hp("20%"),
    marginLeft: wp("27%"),
    marginTop: hp("8%"),
    justifyContent: "center",
    alignItems: "center",
  },
  ImageUser: {
    width: "100%",
    height: "100%",
    borderRadius: wp("25%"),
    transform: [{ scale: 1 }],
  },
  colorsforform: {
    backgroundColor: "#edf7f1",
  },
  AddYourName: {
    fontWeight: "300",
    fontSize: 27,
    fontFamily: "Play_700Bold",
    textAlign: "center",
    marginBottom: hp("2%"),
  },
  borderGreen: {
    borderBottomColor: "lightgreen",
    borderWidth: 1,
    marginBottom: hp("5%"),
  },
  inputusers: {
    borderColor: "white",
    width: wp("55%"),
    height: hp("5%"),
    backgroundColor: "white",
    padding: 10,
    marginVertical: 10,
    borderRadius: 20,
  },
  textforuser: {
    paddingLeft: wp("3%"),
    fontSize: 16,
    width: wp("40%"),
    // fontFamily: "Play_400Regular",
  },
  flexcontainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: hp("2%"),
  },
});
