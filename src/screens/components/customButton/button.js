import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'

const button = ({onPress, text}) => {
  return (
    <Pressable onPress={onPress} style={styles.root} >
      <Text style={styles.btn}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
root: {
alignSelf: "center",
marginVertical: 10,
backgroundColor: "yellow",
padding: 6,
width: "60%",
borderRadius: 5
},
btn: {
alignSelf: "center"
}
})

export default button