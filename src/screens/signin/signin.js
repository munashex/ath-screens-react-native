import { View, Text } from 'react-native'
import React, {useState} from 'react'
import Custom from '../components/customButton/custom'
import Button from '../components/customButton/button'
import { useNavigation } from '@react-navigation/native'

const Signin = () => {
  const [name, setName] = useState("") 
  const [password, setPassword] = useState("")  

  let navigation = useNavigation()

 const signinBtn = () => {
  
    navigation.navigate('home')
  }

  const forgotPassword = () => {
       navigation.navigate('forgotPassword')
  }

const signFacebook = () => {

}

const signGoogle = () => {
  
}

const signApple = () => {
  
}

const onSignUp = () => {
  navigation.navigate('signup')
}

  return (
    <View style={{marginVertical: 30}}>
      <Custom placeholder="name" value={name} setValue={setName} /> 
      <Custom placeholder="password" value={password} setValue={setPassword} secureTextEntry={true}/> 
      <Button text="sign in" onPress={signinBtn}/>
      <Button text="forgot password" onPress={forgotPassword}/>
      <Button text="sign in with facebook" onPress={signFacebook}/>
       <Button text="sign in with Apple" onPress={signApple}/> 
       <Button text="sign in with Google" onPress={signGoogle}/>
        <Button text="dont have account? create" onPress={onSignUp}/>
    </View>
  )
}

export default Signin 

