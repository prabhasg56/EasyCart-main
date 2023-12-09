import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const More = ({ route, navigation }) => {
  return (
    <View >
      <Text style={styles.moreTxt}>More</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  moreTxt: {
    fontSize: 20,
    alignSelf: "center",
    paddingVertical: 10,
    fontWeight: "700"
  }
})

export default More;