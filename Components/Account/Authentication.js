import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
} from "react-native";

import TruckLogo from "../../assets/trucklogo.jpg";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
export default function LoginPage({ route }) {
  const navigation = useNavigation();
  const { Signups } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={["#6df285", "#142b22"]}
        style={styles.colorBackground}
      ></LinearGradient>
      <View style={styles.logoContainer}>
        <Image source={TruckLogo} style={styles.logo} />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.welcomeText}>Welcome Back!</Text>
        <Text style={styles.signUpText}>
          <Text style={styles.signUpTextOrange}>Sign up</Text>

          <Text style={styles.signUpTextGreen}> to get started</Text>

          <Text style={styles.signUpTextGreen}> to get started</Text>
        </Text>
        {Signups && (
          <TextInput
            style={styles.input}
            placeholder="Enter Your Name"
            placeholderTextColor="#FF7700EB"
          />
        )}
        <TextInput
          style={styles.input}
          placeholder="email Address"
          placeholderTextColor="#FF7700EB"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          placeholderTextColor="#FF7700EB" // Placeholder color
        />
        <TouchableOpacity style={styles.forgotPasswordContainer}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress={()=>navigation.navigate('DetailedInfo')} style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  colorBackground: {
    width: "100%",
    height: 300,
    backgroundColor: "#0C3A2D",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: -1,

    borderBottomRightRadius: 300,
    overflow: "hidden",
  },
  logoContainer: {
    position: "absolute",
    top: 200,
    left: "50%",
    transform: [{ translateX: -80 }],
    width: 160,
    height: 160,
    borderRadius: 80,
    borderWidth: 7,
    borderColor: "#FF9D00",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 146,
    height: 146,
    borderRadius: 73,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    paddingTop: hp("15%"),
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 250,
    color: "#21A07CC2",
  },
  signUpText: {
    fontSize: 16,
    marginBottom: 20,
  },
  signUpTextOrange: {
    color: "#FF7700EB",
  },
  signUpTextGreen: {
    color: "#21A07CC2",
  },
  input: {
    width: "80%",
    padding: 8,
    borderWidth: 1.5,
    borderColor: "#FF7700EB",
    borderRadius: 15,
    marginBottom: 20,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 0,
    backgroundColor: "#fff",
    overflow: "visible",
  },
  forgotPasswordContainer: {
    marginVertical: wp("2%"),
    paddingLeft: wp("40%"),
  },
  forgotPasswordText: {
    color: "#FF7700EB",
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: "#21A07CC2",
    paddingVertical: 12,
    paddingHorizontal: 0,
    borderRadius: 15,
    alignItems: "center",
    width: "90%",
    borderColor: "#000000",
    borderWidth: 1,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});
