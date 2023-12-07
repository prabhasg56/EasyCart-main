import React from 'react'
import { View, Text } from 'react-native-animatable'

import MyHeader from '../../components/MyHeader';

const Favourite = ({ route, navigation }) => {
  return (
    <View>
       <View style={{ marginTop: 30 }}>
        <MyHeader
          onPressMenu={() => navigation.goBack()}
          title={route.name}
          right="more-vertical"
        />
      </View>
        <Text>Favourite</Text>
    </View>
  )
}

export default Favourite