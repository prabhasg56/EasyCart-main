import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import CartCard from '../../components/Users/CartCard';
import GlobalStyles from '../../styles/GlobalStyles';


const CartScreen = ({ navigation }) => {
  const [subTotal, setSubtotal] = useState(0);

  const {cart, isLoading } = useSelector((store) => store);

  const deliveryCharge = 2;

  // Calculate subtotal price
  useEffect(() => {
    const subtotalPrice = cart?.reduce((acc, curr) => acc + Number(curr?.price) * curr?.quantity, 0);
    setSubtotal(subtotalPrice);
  }, [cart])

  const grandTotal = subTotal + deliveryCharge;

  const handleSubmit = () => {
    navigation.navigate("Home");
  }

  return (
    <ScrollView style={styles.container}>

      <View style={{ padding: 5 }}>
        {
          cart?.map((item, ind) => {
            return (
              <CartCard key={ind} navigation={navigation} cartItem={item} />
            )
          })
        }
      </View>

      <View style={{ padding: 12, marginBottom: '50px' }}>
        <View gap={0} >
          <View style={{ ...styles.subTotalTxt, paddingHorizontal: 5, paddingVertical: 10, borderColor: "#9E9898", borderTopWidth: 1 }}>
            <Text>Subtotal</Text>
            <Text>$ {subTotal}</Text>
          </View>
          <View style={{ ...styles.subTotalTxt, paddingHorizontal: 5, paddingVertical: 10, borderBottomWidth: 1 }}>
            <Text>Delivery</Text>
            <Text>$ {subTotal && deliveryCharge}.00</Text>
          </View>

        </View>
        <View style={styles.grandTotalCon} >
          <Text style={styles.grandTotalTxt}>Grand Total</Text>
          <Text style={styles.grandTotalTxt}>$ {subTotal && grandTotal}</Text>
        </View>
      </View>

      <View style={styles.btnCon}>
        <TouchableOpacity style={[GlobalStyles.btn, { backgroundColor: "#2A4BA0", width: "90%" }]} onPress={() => handleSubmit()}>
          <Text style={GlobalStyles.btnTxt}>Proceed  To checkout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  grandTotalCon: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 5,
    fontSize: 15,
    marginTop: 5,
  },
  grandTotalTxt: {
    fontWeight: "bold",

  },
  subTotalTxt: {
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 13,
    color: "#9E9898",
    paddingY: 5,
  },
  btnCon: {
    width: "80%",
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginVertical: 10
  }
});

export default CartScreen;
