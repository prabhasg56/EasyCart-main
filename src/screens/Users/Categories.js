import React from 'react'
import { View, Text } from 'react-native-animatable';

import MyHeader from '../../components/MyHeader';

const Categories = ({ route, navigation }) => {
  return (
    <View>
      <View style={{ marginTop: 30 }}>
        <MyHeader
          onPressMenu={() => navigation.goBack()}
          title={route.name}
          right="more-vertical"
        />
      </View>
      <Text>Categories</Text>
    </View>
  )
}

export default Categories