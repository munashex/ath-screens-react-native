import { View, Text } from 'react-native'
import React, {useState} from 'react'
import Custom from '../components/customButton/custom'
import Button from '../components/customButton/button'
import { useNavigation } from '@react-navigation/native'

const ForgetPassword = () => {
  const [username, setUserName] = useState()  

  let navigation = useNavigation()
  

const onSend = () => {
navigation.navigate('newPassword')
}

const BackToSignIn = () => { 
  navigation.navigate("signin")
    
}

  return (
    <View style={{marginVertical: 30}}>
    <Text style={{fontSize: 22, alignSelf: "center", marginVertical: 7}}>Reset Password</Text>

      <Custom placeholder="name" value={username} setValue={setUserName} />
      
      <Button text="send" onPress={onSend}/>
      <Button text="back to sign in" onPress={BackToSignIn}/>
      
       
    </View>
  )
}

export default  ForgetPassword














