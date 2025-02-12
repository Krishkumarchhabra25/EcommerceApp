import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Animated, { FadeInDown } from "react-native-reanimated";
import { Href, Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

type Props = {
  emailHref: Href;
};

const SocialLoginButton = ({ emailHref }: Props) => {
  return (
    <View style={styles.socialLoginWrapper}>
      <Animated.View entering={FadeInDown.delay(300).duration(500)}>
        <Link href={emailHref} asChild>
          <TouchableOpacity style={styles.button}>
            <Ionicons name="mail-outline" size={20} color={Colors.black} />
            <Text style={styles.buttonTxt}>Continue with email</Text>
          </TouchableOpacity>
        </Link>
      </Animated.View>

      <Animated.View entering={FadeInDown.delay(700).duration(500)}>
        <TouchableOpacity style={styles.button}>
         {/*  <Google width={20} height={20} />  */}{/* ✅ Ensure Google renders properly */}
          <Text style={styles.buttonTxt}>Continue with Google</Text>
        </TouchableOpacity>
      </Animated.View>

      <Animated.View entering={FadeInDown.delay(1100).duration(500)}>
        <TouchableOpacity style={styles.button}>
          <Ionicons name="logo-facebook" size={20} color={Colors.black} />
          <Text style={styles.buttonTxt}>Continue with Facebook</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default SocialLoginButton;

const styles = StyleSheet.create({
  socialLoginWrapper: {
    alignSelf: "stretch",
  },
  button: {
    flexDirection: "row",
    padding: 10,
    borderColor: Colors.gray,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    marginBottom: 15,
  },
  buttonTxt: {
    fontSize: 14,
    fontWeight: "600",
    color: Colors.black,
  },
});
