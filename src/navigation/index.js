import {  Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Signin from '../screens/signin/signin'
import Signup from '../screens/signin/signup'
import ConfirmEmail from '../screens/confirmEmail/confirmEmail'
import ForgotPassword from '../screens/forgetPassword/forgetPassword'
import NewPassword from '../screens/NewPassword/newPassword'
import Home from '../screens/Home/home'

const Navigator = () => {

const Stack = createNativeStackNavigator() 

  return (
    <NavigationContainer>
     <Stack.Navigator screenOptions={{headerShown: false}}>
     <Stack.Screen name="signin" component={Signin}/>
     <Stack.Screen name="signup" component={Signup}/> 
     <Stack.Screen name="confirmEmail" component={ConfirmEmail}/> 
     <Stack.Screen name="forgotPassword" component={ForgotPassword}/> 
     <Stack.Screen name="newPassword" component={NewPassword}/>
     <Stack.Screen name="home" component={Home}/>
     </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigator