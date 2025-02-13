import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { CategoryType } from '@/types/type'
import { Colors } from '@/constants/Colors'
import { Image } from 'react-native'

type Props = {
    categories:CategoryType[]
}

const Categories = ({categories}: Props) => {
  return (
    <View style={styles.container}>
        <View style={styles.titleWrapper}>
               <Text style={styles.title}>Categories</Text>
               <TouchableOpacity>
                    <Text style={styles.titleBtn}>See All</Text>
               </TouchableOpacity>
  
               </View>
               <FlatList data={categories} keyExtractor={(item)=>item.id.toString()}
               horizontal={true}
               showsHorizontalScrollIndicator={false}
               contentContainerStyle={styles.listContainer}
                  renderItem={({item ,index})=>(
                    <TouchableOpacity>
                    <View style={styles.cartItem}>
                      <Image source={{uri:item.image}} style={styles.catImg}  />
                      <Text style={styles.catText}>{item.name}</Text>
                    </View>
                    </TouchableOpacity>
                  )}
               />
         
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({
  container:{
    marginBottom:20,
  },

 title:{
     fontSize:18,
     fontWeight:"600",
     letterSpacing:0.6,
     color:Colors.black
    },
    titleWrapper:{
      flexDirection:"row",
      justifyContent:"space-between",
      marginHorizontal:20
  
    },
    titleBtn:{
       fontSize:14,
       fontWeight:"500",
       letterSpacing:0.6,
       color:Colors.black
    },
    catImg:{
      width:50,
      height:50,
      borderRadius:30,
      backgroundColor:Colors.lightGray
    },
    cartItem:{
      marginVertical:10,
      alignItems: "center",
      marginRight: 15, // Adds spacing between category items
    },
    listContainer: {
      paddingHorizontal: 20, // Adds spacing to the sides
  },
  catText: {
    fontSize: 12,
    fontWeight: "500",
    marginTop: 5,
    color: Colors.black
}
})