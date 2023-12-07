import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native"
import { AddToCartIcon, FavouritesRedHeartIcon, RecommendedCardIcon } from "../../../assets";

const RecommendedCard = ({ navigation, product }) => {
    const { price, thumbnail, title, rating } = product;

    return (
        <TouchableOpacity onPress={() => navigation.navigate("Product Details", product)}>
            <View style={styles.recommendedCard}>
                <Image source={FavouritesRedHeartIcon} style={styles.favouriteIcon} alt="Product Image" />
                <View style={{ display: 'flex', alignItems: 'center', }}>
                    <Image source={{ uri: thumbnail }} style={styles.cardImage} />
                </View>
                <View style={{ bottom: 0, paddingVertical: 5 }} >
                    <View style={styles.cardBottom}>
                        <Text style={{ fontSize: 14, lineHeight: 20, fontWeight: "600" }} >${price}</Text>
                        <Image source={AddToCartIcon} style={styles.addToCartIcon} />
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
        width: 19,
        height: 16,
        position: 'absolute',
        top: 10,
        left: 10
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