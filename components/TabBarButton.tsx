import React from "react";
import { Pressable, Text, StyleSheet, View } from "react-native";
import { Colors } from "@/constants/Colors";
import { icon } from "@/constants/Icons";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  onPress: () => void;
  onLongPress: () => void;
  isFocused: boolean;
  routeName: string;
};

// Fallback icon if routeName does not exist in the icon object
const fallbackIcon = ({ color }: { color: string }) => (
  <Ionicons name="help-circle-outline" size={22} color={color} />
);

const TabBarButton = ({ onPress, onLongPress, isFocused, routeName }: Props) => {
  
  const IconComponent = icon[routeName] || fallbackIcon;

  if (!icon[routeName]) {
    console.warn(`⚠️ Icon not found for route: "${routeName}". Using fallback.`);
  }

  return (
    <Pressable onPress={onPress} onLongPress={onLongPress} style={styles.tabBarButton}>
        {routeName === 'cart' && (
    <View style={styles.badgeWrapper}>
    <Text style={styles.badgeTxt}>3</Text>
</View>
        )}
    
      {IconComponent({ color: isFocused ? Colors.primary : Colors.black })}
      <Text style={{ color: isFocused ? "#673ab7" : "#222" }}>{routeName}</Text>
    </Pressable>
  );
};

export default TabBarButton;

const styles = StyleSheet.create({
  tabBarButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  badgeWrapper:{
    position:'absolute',
    backgroundColor:Colors.highlight,
    top: -5,
    right:20,
    paddingVertical:2,
    paddingHorizontal:6,
    borderRadius:10,
    zIndex:10
  },
  badgeTxt:{
   fontSize:12,
   color:Colors.black
  }
});
