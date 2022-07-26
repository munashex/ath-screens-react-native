import { View, Text } from 'react-native'
import React, {useState} from 'react'
import Custom from '../components/customButton/custom'
import Button from '../components/customButton/button'
import { useNavigation } from '@react-navigation/native'


const ConfirmEmailScreen = () => {
  const [code, setCode] = useState() 

  let naviagation = useNavigation()

 
  

const onConfirm = () => {
  
}

const onResend = () => {

}

const BackToSignIn = () => {
    naviagation.navigate('signin')
}

  return (
    <View style={{marginVertical: 30}}>
    <Text style={{fontSize: 22, alignSelf: "center", marginVertical: 7}}>Confirm Email</Text>

      <Custom placeholder="code" value={code} setValue={setCode} />
      
      <Button text="confirm" onPress={onConfirm}/>
      <Button text="resend Code" onPress={onResend}/>
      <Button text="back to sign in" onPress={BackToSignIn}/>
      
       
    </View>
  )
}

export default  ConfirmEmailScreen