import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { Button } from 'react-native-paper';
import { AirbnbRating } from 'react-native-ratings';
import { SliderBox } from 'react-native-image-slider-box';
import { Ionicons } from "@expo/vector-icons";


import { addToCart, addToWishlist } from '../../redux/action';

const ProductDetails = ({ route, navigation }) => {
    const [addWishlist, setWishlist] = useState(false);

    const dispatch = useDispatch();

    const { title, discountPercentage, description, price, rating, id, quantity, images } = route.params;

    const addToCartHandle = () => {
        dispatch(addToCart({ ...route.params, quantity: 1 }));

        alert("Item added to cart")
        navigation.navigate("Shopping Cart");

    }

    const addToWishListHandle = () => {
        setWishlist(!addWishlist);
        dispatch(addToWishlist(id));
    }

    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <View>
                    <Text style={{ fontSize: 20, fontWeight: "500" }}>{title}</Text>
                    <Text>{description}</Text>
                </View>
            </View>

            <View>
                <View style={{ marginLeft: 15, marginTop: 18, flexDirection: "row", alignItems: "center", marginBottom: 10 }}>
                    <AirbnbRating
                        count={5}
                        defaultRating={rating}
                        size={15}
                        showRating={false}
                        isDisabled
                    />
                    <Text>120 Reviews</Text>
                </View>

                <View >
                    <TouchableOpacity style={styles.favouriteIcon}
                        onPress={() => addToWishListHandle()}
                    >
                        <Ionicons name={addWishlist ? "heart" : "heart-outline"} size={24} color="#FE9496" />
                    </TouchableOpacity>
                    <SliderBox
                        images={images}
                        autoplay={true}
                        autoplayInterval={1000}
                    />
                </View>

                <View style={{ flexDirection: "row", gap: 6, alignItems: "center", marginLeft: 24, marginTop:20 }}>
                    <Text style={{ fontSize: 16, fontWeight: 700, color: "#2A4BA0" }}>
                        ${price}/KG
                    </Text>
                    <Text style={{ fontSize: 12, fontWeight: 400, borderRadius: 10, padding: 4, color: "#FAFBFD", backgroundColor: "#2A4BA0", paddingHorizontal: 6 }}>
                        ${discountPercentage} OFF
                    </Text>
                </View>
            </View>

            <View>
                <View style={{ flexDirection: "row", gap: 20, justifyContent: "center", marginTop: 30 }}>
                    <Button mode="outlined" onPress={() => addToCartHandle()} style={{ flex: 0.4, color: "#2A4BA0", paddingVertical: 10 }}>
                        Add To Cart
                    </Button>
                    <Button mode="contained" onPress={() => console.log('Pressed')} style={{ flex: 0.4, backgroundColor: "#2A4BA0", paddingVertical: 10 }}>
                        Buy Now
                    </Button>
                </View>

                {/* Details section */}
                <View style={{ gap: 6, marginTop: 30, paddingHorizontal: 28 }}>
                    <Text style={{ fontWeight: 500, fontSize: 18 }}>Details</Text>
                    <Text style={{ color: "#8891A5" }}>
                        {description}
                    </Text>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 0.7,
    },
    carouselItem: {
        marginTop: 10,
        width: "auto",
        height: "auto",
        backgroundColor: "white"
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: "contain",
    },
    subContainer: {
        flexDirection: "row",
        gap: 20,
        padding: 15
    },
    favouriteIcon: {
        position: "absolute",
        top: 5,
        right: 20,
        zIndex: 5,
    },

});

export default ProductDetails