import { View, Text } from 'react-native'
import React, {useState} from 'react'
import Custom from '../components/customButton/custom'
import Button from '../components/customButton/button'
import { useNavigation } from '@react-navigation/native'

const NewPassword = () => {
  const [code, setCode] = useState("")
  const [newPassword, setNewPassword]  = useState("")
  
  let navigation = useNavigation()

const onSubmit = () => {
navigation.navigate('home')
}

const BackToSignIn = () => {
  navigation.navigate('signin')
    
}

  return (
    <View style={{marginVertical: 30}}>
    <Text style={{fontSize: 22, alignSelf: "center", marginVertical: 7}}>Reset Password</Text>

      <Custom placeholder="code" value={code} setValue={setCode} />
      <Custom placeholder="new password" value={newPassword} setValue={setNewPassword}/>
      
      <Button text="submit" onPress={onSubmit}/>
      <Button text="back to sign in" onPress={BackToSignIn}/>
      
       
    </View>
  )
}

export default  NewPassword