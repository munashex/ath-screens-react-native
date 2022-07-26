import { View, Text } from 'react-native'
import React, {useState} from 'react'
import Custom from '../components/customButton/custom'
import Button from '../components/customButton/button'
import { useNavigation } from '@react-navigation/native'


const Signup = () => {
  const [name, setName] = useState("") 
  const [password, setPassword] = useState("")  
  const [passwordRepeat, setPasswordRepeat] = useState("") 
  const [email, setEmail] = useState("")

   let navigation = useNavigation()

 const onRegister = () => {
    navigation.navigate('home')
  }

  

const signFacebook = () => {

}

const signGoogle = () => {
  
}

const signApple = () => {
  
}

const onSignIn = () => {
  navigation.navigate("signin")
}

  return (
    <View style={{marginVertical: 30}}>
    <Text style={{fontSize: 22, alignSelf: "center", marginVertical: 7}}>Create Account</Text>
      <Custom placeholder="name" value={name} setValue={setName} />
      <Custom placeholder="email" value={email} setValue={setEmail}/> 
      <Custom placeholder="password" value={password} setValue={setPassword} secureTextEntry={true}/>
      <Custom placeholder="repeat password" value={passwordRepeat} setValue={setPasswordRepeat}/> 
      <Button text="Register" onPress={onRegister}/>
      <Button text="sign up with facebook" onPress={signFacebook}/>
       <Button text="sign up with Apple" onPress={signApple}/> 
       <Button text="sign up with Google" onPress={signGoogle}/>
        <Button text="have account? signin" onPress={onSignIn}/>
    </View>
  )
}

export default Signup 