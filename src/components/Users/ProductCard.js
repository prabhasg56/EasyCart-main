import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import GlobalStyles from "../../styles/GlobalStyles";

import { Shoe2 } from "../../../assets/index";

const ProductCard = ({ navigation, item }) => {

    const { brandName, price, description, size } = item;
    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate("ProductDetails", {...item, Shoe2})}>
            <View style={styles.contentContainer} >

                <Image source={Shoe2} alt="shoe img" />

                <View style={styles.textCon}>
                    <Text
                        style={{ ...GlobalStyles.semiBoldHeadline, ...styles.textColor }}
                    >
                        {brandName}
                    </Text>
                    <Text
                        style={{
                            ...GlobalStyles.normalHeadline,
                            ...styles.textColor,
                            ...styles.smallText,
                        }}
                    >
                        {description}
                    </Text>
                    <Text
                        style={{
                            ...GlobalStyles.normalHeadline,
                            ...styles.textColor,
                            ...styles.smallText,
                        }}
                    >
                        S | {size}
                    </Text>
                    <Text
                        style={{
                            ...GlobalStyles.semiBoldHeadline,
                            color: "red",
                        }}
                    >
                        ₹{price}
                    </Text>
                </View>

            </View>
        </TouchableOpacity>
    );
};

export default ProductCard;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        paddingVertical: 14,
        paddingHorizontal: 10,
        color: "black",
        borderRadius: 12,
        width: "45%",
        alignItems: "center",
        shadowColor: "#000000",
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 0.17,
        shadowRadius: 12,
        elevation: 7,
    },
  
    textCon: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    },
    textColor: {
        color: "black",
    },
    smallText: {
        fontSize: 12,
        fontWeight: 300,
        lineHeight: 19,
    },
});
