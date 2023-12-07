import { Image, Text, View, StyleSheet } from "react-native";
import { SwiperDivIcon } from "../../../assets";


const OfferCard = () => {
  return (
    <View style={styles.swiperCard}>
      <View>
        <Image source={SwiperDivIcon} style={{ width: 68, height: 68 }} />
      </View>
      <View>
        <Text style={styles.swiperCardText1}>Get</Text>
        <Text style={styles.swiperCardText2}>50% OFF</Text>
        <Text style={styles.swiperCardText3}>On first 3 order</Text>
      </View>
    </View>
  );
};

export default OfferCard;

const styles = StyleSheet.create({
    
  swiperCard: {
    width: 269,
    height: 123,
    marginRight: 10,
    backgroundColor: "#F9B023",
    borderRadius: 15,
    display: "flex",
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  swiperCardText1: {
    fontSize:20,
    lineHeight:27,
    fontWeight: "300",
    color:"#FFFFFF"
  },
  swiperCardText2: {
    fontSize: 26,
    lineHeight: 35,
    fontWeight: "800",
    color: "#FFFFFF"
  },
  swiperCardText3: {
    fontSize: 13,
    lineHeight: 17,
    fontWeight: "500",
    color: "#FFFFFF"
  }
});