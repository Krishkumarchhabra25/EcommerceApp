import {Ionicons} from "@expo/vector-icons"
import { Image, StyleSheet } from "react-native"

export const icon: Record<string, ({ color }: { color: string }) => React.ReactNode> = {
  index: ({ color }) => <Ionicons name="home-outline" size={22} color={color} />,
  explore: ({ color }) => <Ionicons name="search-outline" size={22} color={color} />,
  notifications: ({ color }) => <Ionicons name="notifications-outline" size={22} color={color} />,
  cart: ({ color }) => <Ionicons name="cart-outline" size={22} color={color} />,
  profile: ({ color }) => (
    <Image
      source={{ uri: "https://sxgames.co/randomusers/avatar.php?g=male" }}
      style={styles.userImg}
    />
  ),
};


const styles = StyleSheet.create({
     userImg:{
        height:24,
        width:24,
        borderRadius: 20
     }
})