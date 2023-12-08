import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

import { AddToCartIcon, } from "../../../assets";
import { addToCart, addToWishlist } from "../../redux/action";

const RecommendedCard = ({ navigation, product, heart }) => {
    const [addWishlist, setWishlist] = useState(false);

    const dispatch = useDispatch();
    const { price, thumbnail, title, id } = product;

    const addToCartHandle = () => {
        alert("Item added to cart")
        dispatch(addToCart({ ...product, quantity: 1 }));
        dispatch(addToWishlist({ ...product, quantity: 1 }));
    }

    const addToWishListHandle = () => {
        setWishlist(!addWishlist);
        dispatch(addToWishlist(id));

    }

    return (
        <TouchableOpacity onPress={() => navigation.navigate("Product Details", product)}>
            <View style={styles.recommendedCard}>
                {
                    heart && <TouchableOpacity style={styles.favouriteIcon}
                        onPress={() => addToWishListHandle()}
                    >
                        <Ionicons name={addWishlist ? "heart" : "heart-outline"} size={24} color="#FE9496" />
                    </TouchableOpacity>
                }

                <View style={{ display: 'flex', alignItems: 'center', }}>
                    <Image source={{ uri: thumbnail }} style={styles.cardImage} />
                </View>
                <View style={{ bottom: 0, paddingVertical: 5 }} >
                    <View style={styles.cardBottom}>
                        <Text style={{ fontSize: 14, lineHeight: 20, fontWeight: "600" }} >${price}</Text>
                        <TouchableOpacity onPress={() => addToCartHandle()} >
                            <Image source={AddToCartIcon} style={styles.addToCartIcon} />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.brandTxt}>{title}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default RecommendedCard

const styles = StyleSheet.create({
    recommendedCard: {
        width: 160,
        height: "auto",
        backgroundColor: "#F2F2F2",
        borderRadius: 10,
        padding: 20,
        display: 'flex',
        justifyContent: 'space-between'
    },
    favouriteIcon: {
        position: "absolute",
        top: 5,
        left: 5,
        zIndex: 5,
    },
    cardImage: {
        width: 100, height: 100,
        overflow: 'hidden',
        alignItems: 'center',
        position: 'relative',
        margin: 10
    },
    brandTxt: {
        fontSize: 12,
        lineHeight: 16,
        fontWeight: "400",
        color: "#616A7D",
        marginTop: 4
    },
    cardBottom: {
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center"
    },
    addToCartIcon: {
        width: 25,
        height: 25
    }
});