import { View, TextInput, StyleSheet} from 'react-native'
import React from 'react'

const Custom = (props) => { 
const {placeholder, value, setValue, secureTextEntry} = props
  return (
<View>
<TextInput 
 placeholder={placeholder} 
 value={value} 
onChangeText={setValue} 
secureTextEntry={secureTextEntry}
style={styles.input}
/>
</View>
  )
}

const styles = StyleSheet.create({
   input: {
    width: "80%",
    borderWidth: 1,
    alignSelf: "center",
    borderColor: "white",
    backgroundColor: "white",
    marginVertical: 10,
    borderRadius: 5,
    padding: 5,
   }
})

export default Custom