import React from 'react' 
import {View, Text, StyleSheet} from 'react-native' 
import Navigator from './src/navigation'
import { Amplify } from 'aws-amplify'
import awsconfig from './src/aws-exports'
Amplify.configure(awsconfig)


const App = () => {
  return (
    <View style={styles.root}>
      <Navigator/>
    </View>
  )
}

const styles = StyleSheet.create({
root: {
  height: "100%",
  backgroundColor: "grey"
}
})

export default App