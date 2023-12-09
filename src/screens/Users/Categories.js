import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

const Categories = ({ route, navigation }) => {
  return (
    <View>
      <Text style={styles.mobTxt}>Mobiles</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  mobTxt: {
    fontSize: 20,
    alignSelf: "center",
    paddingVertical: 10,
    fontWeight: "700"
  }
})

export default Categories