import React from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'

import MyHeader from '../../components/MyHeader';
import RecommendedCard from '../../components/Home/RecommendedCard';
import { useSelector } from 'react-redux';

const Favourite = ({ route, navigation }) => {
  const {  cart, wishlist } = useSelector((store, action) => store);

  console.log(wishlist)
  return (
    <View>
      <View style={{ marginTop: 30 }}>
        <MyHeader
          onPressMenu={() => navigation.goBack()}
          title={route.name}
          right="more-vertical"
        />
      </View>
      <View style={styles.recommendedDiv}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.recommendedContainer}
        >
          <View style={styles.recommendedDivStyle}>
            {
              wishlist?.map((item, index) => {
                return (
                  <RecommendedCard key={item.id} navigation={navigation} product={item} />
                )
              })
            }
          </View>
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  recommendedDiv: {
    marginTop: 20,
  },
  recommendedContainer: {
    marginTop: 20,
    height: 300,
  },
  recommendedDivStyle: {
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
    rowGap: 15,
    justifyContent: "space-evenly",
    marginBottom: 15,
  },
})

export default Favourite