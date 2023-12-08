import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';

import { addToCart, deleteCartData } from '../../redux/action';

const CartCard = ({ navigation, cartItem }) => {
  const { title, price, quantity, id, thumbnail } = cartItem;

  const dispatch = useDispatch();

  const addToCartHandle = () => {
    dispatch(addToCart({ ...cartItem }));

    alert("Updated Your Cart")

  }

  const removeToCartHandle = () => {
    dispatch(deleteCartData({ ...cartItem }));

    alert("Updated Your Cart")

  }

  return (
    <View style={styles.continer}>

      <View style={{ alignItems: "center", gap: 10 }}>
        <Image source={{ uri: thumbnail }} alt='Image' style={styles.cardImage} />
      </View>

      <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>

        <View style={{ width: "55%", marginTop: 10 }}>
          <Text style={styles.title} >{title} </Text>
          <Text style={styles.subTitle}>
            ${price}
          </Text>
        </View>

        <View gap={20} style={{ marginRight: "auto", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
          <TouchableOpacity onPress={() => removeToCartHandle()}>
            <Text style={{ fontSize: 30 }}>-</Text>
          </TouchableOpacity>
          <Text style={styles.totalPrice}>{quantity}</Text>
          <TouchableOpacity onPress={() => addToCartHandle()}>
            <Text style={styles.subtxt}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

    </View>
  )
};


const styles = StyleSheet.create({
  continer: {
    flexDirection: "row",
    gap: 10,
    padding: 10,
    borderWidth: 0.2,
    borderRadius: 5,
    marginBottom: 8
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#191919"
  },
  subTitle: {
    fontSize: 14,
    fontWeight: "400",
  },
  subtxt: {
    fontSize: 20,
    fontWeight: "400",
  },
  totalPrice: {
    fontSize: 14,
    fontWeight: "500",
    color: "black"
  },
  iconAdd: {
    fontSize: 15,
    width: 20,
    height: 20
  },
  cardImage: {
    width: 100, height: 100,
    overflow: 'hidden',
    alignItems: 'center',
    position: 'relative',
    margin: 10
  },
});


export default CartCard;