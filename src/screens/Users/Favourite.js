import React, { useEffect, useState } from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'

import MyHeader from '../../components/MyHeader';
import RecommendedCard from '../../components/Home/RecommendedCard';
import { useSelector } from 'react-redux';

const Favourite = ({ route, navigation }) => {
  const [wishList, setWishlist] = useState([]);
  const { wishListProdId, products } = useSelector((store, action) => store);

  useEffect(() => {
    const updatedWishlist = products.filter((item) => {
      return wishListProdId.includes(item.id)
    });
    setWishlist(updatedWishlist);
  }, [wishListProdId]);

  return (
    <View style={{flex:1, backgroundColor:"white"}}>
      <View style={{ marginTop: 30 }}>
        <MyHeader
          onPressMenu={() => navigation.goBack()}
          title={route.name}
          right="more-vertical"
        />
      </View>
      <ScrollView >
        <View style={styles.recommendedDivStyle}>
          {
            wishList?.map((item, index) => {
              return (
                <RecommendedCard key={item.id} navigation={navigation} product={item} heart={false} />
              )
            })
          }
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  recommendedDivStyle: {
    marginTop:20,
    flexWrap: "wrap",
    flexDirection: "row",
    rowGap: 15,
    justifyContent: "space-evenly",
    marginBottom: 15,
  },
})

export default Favourite