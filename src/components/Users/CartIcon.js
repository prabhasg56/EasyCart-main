import { Text, View, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React, { } from 'react';

import { CartBagIcon } from '../../../assets/index';

const CartIcon = ({navigation, cartLength}) => {
    return (
        <>
            <TouchableOpacity onPress={() => navigation.navigate("Shopping Cart")}>
                <Image
                    source={CartBagIcon}
                    alt="CartBagIcon"
                    style={styles.cartImage}
                />
                <View style={styles.cartDiv}>
                    <Text>{cartLength}
                    </Text>
                </View>
            </TouchableOpacity>
        </>
    )

}

const styles = StyleSheet.create({
    cartDiv: {
        backgroundColor: "#F9B023",
        color: "#F8F9FB",
        borderRadius: 50,
        width: 24,
        height: 22,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        position: "relative",
        top: -32,
        right: -8,
    },
    cartImage: {
        width: 20,
        height: 24,
    },
})

export default CartIcon;