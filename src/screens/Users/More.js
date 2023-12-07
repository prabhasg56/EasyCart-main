import React from 'react'
import { View, Text } from 'react-native-animatable'

import MyHeader from '../../components/MyHeader';

const More = ({ route, navigation }) => {
  return (
    <View style={{ marginTop: 30 }}>
       <MyHeader
          onPressMenu={() => navigation.goBack()}
          title={route.name}
          right="more-vertical"
        />
        <Text>More</Text>
    </View>
  )
}

export default More