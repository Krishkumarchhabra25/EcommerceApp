import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Link, router, Stack } from 'expo-router'
import SocialLoginButton from '@/components/SocialLoginButton'
import InputField from '@/components/InputField'
import { Colors } from '@/constants/Colors'

type Props = {}

const SignInScreen = (props: Props) => {
  return (
    <>
    <Stack.Screen options={{headerTitle: "Sign Up"}} />
    <View style={styles.container}>
      <Text style={styles.title}>Login to Your Account</Text>
       <InputField placeholder='Email Address'  placeholderTextColor={Colors.gray}  autoCapitalize='none' keyboardType='email-address'/>
       <InputField placeholder='password'  placeholderTextColor={Colors.gray}  secureTextEntry={true}/>

       <TouchableOpacity style={styles.btn} onPress={() => {
          router.dismissAll();
          router.push('/(tabs)');
        }}>
         <Text style={styles.btnTxt}>Login</Text>
       </TouchableOpacity>

          <Text style={styles.loginTxt}>
               Don't have a account? {" "}
             <Link href={"/signup"} asChild>
               <TouchableOpacity>
                 <Text style={styles.loginTxtSpan}>SignUp</Text>
               </TouchableOpacity>
             </Link>
             </Text>
      <View style={styles.divider} />

      <SocialLoginButton emailHref={"/signin"} />
    </View>
    </>
 
  )
}

export default SignInScreen

const styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding:20,
    backgroundColor:Colors.background
  },
  title:{
    fontSize:24,
    fontWeight:"600",
    letterSpacing:1.2,
    color:Colors.black,
    marginBottom:50
  },
  btn:{
    backgroundColor:Colors.primary,
  paddingVertical:15,
  paddingHorizontal:18,
  alignSelf:"stretch",
  alignItems:"center",
  borderRadius:5,
  marginBottom:20
  },
  btnTxt:{
    color:Colors.white,
    fontSize:16,
    fontWeight:"600"
  },
  buttonTxt:{
    fontSize:14,
    fontWeight:"600",
    color:Colors.black,
    
  },
  loginTxt:{
    marginBottom:30,
    fontSize:14,
    color:Colors.black,
    lineHeight:24
  },
  loginTxtSpan:{
    color:Colors.primary,
    fontWeight:"600"
  },
  divider:{
    borderTopColor:Colors.gray,
    borderTopWidth:StyleSheet.hairlineWidth,
    width:"30%",
    marginBottom:30
  }
})