import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { Button } from 'react-native-paper';
import Carousel from 'react-native-snap-carousel';
import { Rating, AirbnbRating } from 'react-native-ratings';

import { Shoe2 } from '../../../assets/index';
import { baseUrl } from '../../redux/store';
import { addToCart } from '../../redux/action';

const ProductDetails = ({ route, navigation }) => {
    const dispatch = useDispatch();

    const { title, discountPercentage, rating, description, price, size, id, quantity, images } = route.params;

    const { cart } = useSelector((store, action) => store);

    const addToCartHandler = async () => {
        const productId = cart.find((item, index) => item.id === id)

        if (!productId) {
            try {
                const response = await axios.post(`${baseUrl}/cart`, { brandName, description, price, size, quantity: 1 });

                dispatch(addToCart(response.data));
                alert("Product added successfully");

                navigation.navigate("Cart");

            }
            catch (error) {
                console.warn(error);
            }
        } else {

            try {
                const response = await axios.patch(`${baseUrl}/cart/${id}`, { quantity: quantity + 1 });

                dispatch(addToCart(response.data));

                alert("Product already exists in your cart!");

                navigation.navigate("Cart");

            }
            catch (error) {
                console.warn(error);
            }
        }

    }

    const renderItem = ({ item }) => {
        return (
            <View style={styles.carouselItem}>
                <Image source={{ uri: item }} style={styles.image} />
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <View>
                    <Text style={{ fontSize: 20, fontWeight: "500" }}>{title}</Text>
                    <Text>{description}</Text>
                </View>
            </View>
            <View style={{ marginLeft: 15, marginTop: 18, flexDirection: "row", alignItems: "center" }}>
                <AirbnbRating
                    count={5}
                    defaultRating={rating}
                    size={15}
                    showRating={false}
                    isDisabled
                />
                <Text>120 Reviews</Text>
            </View>
            <View style={styles.imageContainer}>
                <Carousel
                    data={images}
                    renderItem={renderItem}
                    sliderWidth={400}
                    itemWidth={400}
                />
            </View>

            <View style={{ flexDirection: "row", gap: 6, marginTop: 20, alignItems: "center", marginLeft: 24 }}>
                <Text style={{ fontSize: 16, fontWeight: 700, color: "#2A4BA0" }}>
                    ${price}/KG
                </Text>
                <Text style={{ fontSize: 12, fontWeight: 400, borderRadius: 10, padding: 4, color: "#FAFBFD", backgroundColor: "#2A4BA0", paddingHorizontal: 6 }}>
                    ${discountPercentage} OFF
                </Text>
            </View>

            <View style={{ flexDirection: "row", gap: 20, justifyContent: "center", marginTop: 30 }}>
                <Button mode="outlined" onPress={() => console.log('Pressed')} style={{ flex: 0.4, color: "#2A4BA0", paddingVertical: 10 }}>
                    Add To Cart
                </Button>
                <Button mode="contained" onPress={() => console.log('Pressed')} style={{ flex: 0.4, backgroundColor: "#2A4BA0", paddingVertical: 10 }}>
                    Buy Now
                </Button>
            </View>

            {/* Details section */}
            <View style={{ flex: 0.5, gap: 6, marginTop: 30, paddingHorizontal: 28 }}>
                <Text style={{ fontWeight: 500, fontSize: 18 }}>Details</Text>
                <Text style={{ color: "#8891A5" }}>
                    {description}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 0.6,
    },
    imageContainer: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
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
        flex: 0.5,
        flexDirection: "row",
        gap: 20,
        padding: 15
    },

});

export default ProductDetails