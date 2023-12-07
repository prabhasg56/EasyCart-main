import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { useDispatch } from 'react-redux';

import { Shoe2, AddIcon, RemoveIcon, DeleteICon } from '../../../assets/index';
import { baseUrl } from '../../redux/store';
import { deleteCartData } from '../../redux/action';

const CartCard = ({ navigation, cartItem }) => {
  const { brandName, description, price, size, quantity, id } = cartItem;

  const dispatch = useDispatch();

  const handleDeleteItem = async () => {
    if (quantity > 0) {
      try {
        const respone = await axios.delete(`${baseUrl}/cart/${id}`);
        console.log(respone)
        dispatch(deleteCartData(respone.data));

        alert("Deleted successfully");
      } catch (error) {
        alert(error.message);
      }
    }
  }

  return (
    <View style={styles.continer}>

      <View style={{ alignItems: "center", gap: 10 }}>
        <Image source={Shoe2} alt='shoe' />
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <Image source={RemoveIcon} alt='icon' style={styles.iconAdd} />
          <Text style={{ fontSize: 15, fontWeight: "800" }}>{quantity}</Text>
          <Image source={AddIcon} alt='icon' style={styles.iconAdd} />
        </View>
      </View>

      <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>

        <View style={{ width: "55%" }}>
          <Text style={styles.title} >{brandName} </Text>
          <Text style={styles.subTitle}>{description}</Text>
          <Text style={styles.subTitle}>Puma White-Silver</Text>
          <Text style={styles.subTitle}>
            SIze : {size}
          </Text>
        </View>
        <View gap={20} style={{ marginRight: "auto", paddingHorizontal: 5 }}>
          <TouchableOpacity onPress={() => handleDeleteItem()}>
            <Image source={DeleteICon} style={{ color: "red", alignSelf: "center" }} />
          </TouchableOpacity>

          <View >
            <Text style={styles.totalPrice}> ₹ {price}</Text>
            <Text style={styles.subtxt}>Incl. of taxes</Text>
          </View>
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
    fontSize: 10,
    fontWeight: "600",
  },
  subtxt: {
    fontSize: 10,
    fontWeight: "400",
  },
  totalPrice: {
    fontSize: 15,
    fontWeight: "bold",
    color: "black"
  },
  iconAdd: {
    fontSize: 15,
    width: 20,
    height: 20
  },
});


export default CartCard;