import React, { useEffect } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  StyleSheet,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import ProductCard from "../../components/Users/ProductCard";
import { baseUrl } from "../../redux/store";
import MyHeader from "../../components/MyHeader";
import {
  getProductsData,
  getProductsDataFailure,
  getProductsDataSuccess,
} from "../../redux/action";
import {
  CartBagIcon,
  LocationDownArrowIcon,
  SearchIcon,
  SwiperDivIcon,
} from "../../../assets";
import OfferCard from "../../components/Home/OfferCard";
import RecommendedCard from "../../components/Home/RecommendedCard";

const Home = ({ route, navigation }) => {
  const { products  } = useSelector((store, action) => store);

  const dispatch = useDispatch();

  const fetchProducts = async () => {
    dispatch(getProductsData());

    try {
      const response = await axios.get(`${baseUrl}/products`);
      dispatch(getProductsDataSuccess(response.data.products));
    } catch (err) {
      console.warn(err);

      dispatch(getProductsDataFailure());
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <View>
        <View style={styles.mainDiv}>
          <View style={styles.headerDiv}>
            <View>
              <Text style={styles.headerText}>Hey, Rahul</Text>
            </View>

            <View>
              <Image
                source={CartBagIcon}
                alt="CartBagIcon"
                style={styles.cartImage}
              />
              <View style={styles.cartDiv}>
                <Text>3</Text>
              </View>
            </View>
          </View>

          <View style={styles.searchDiv}>
            <Image source={SearchIcon} alt="SearchIcon" />
            <TextInput
              placeholder="Search Products or Store"
              placeholderTextColor="#8891A5"
              style={styles.searchBar}
            />
          </View>

          <View style={styles.locationDiv}>
            <View>
              <Text style={{ color: "#8891A5", fontSize: 11, lineHeight: 15 }}>
                DELIVERY TO
              </Text>
              <Text style={{ color: "#F8F9FB", fontSize: 14, lineHeight: 19 }}>
                Green Way 3000, Sylhet <Image source={LocationDownArrowIcon} />
              </Text>
            </View>

            <View>
              <Text style={{ color: "#8891A5", fontSize: 11, lineHeight: 15 }}>
                WITHIN
              </Text>
              <Text style={{ color: "#F8F9FB", fontSize: 14, lineHeight: 19 }}>
                1 Hour <Image source={LocationDownArrowIcon} />
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.bodyDiv}>
          {/* Offers sections */}

          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {
              [1, 2, 3, 4].map((item, index) => {
                return (
                  <OfferCard key={index} />
                )
              })
            }

          </ScrollView>

          {/* Recommended section */}
          <View style={styles.recommendedDiv}>
            <Text style={{ fontSize: 30, lineHeight: 38, fontWeight: "400" }}>
              Recommended
            </Text>

            <ScrollView
              showsVerticalScrollIndicator={false}
              style={styles.recommendedContainer}
            >
              <View style={styles.recommendedDivStyle}>
                {
                  products?.map((item, index) => {
                    return (
                      <RecommendedCard key={item.id} navigation={navigation} product={item}/>
                    )
                  })
                }
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainDiv: {
    backgroundColor: "#2A4BA0",
    display: "flex",
    padding: 20,
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    rowGap: 20,
  },
  headerDiv: {
    marginTop: 52,
    width: "100%",
    height: 40,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerText: {
    fontSize: 22,
    fontWeight: "600",
    color: "#F8F9FB",
  },
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
  searchDiv: {
    width: "100%",
    height: 56,
    backgroundColor: "#153075",
    borderRadius: 50,
    padding: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  searchBar: {
    marginLeft: 15,
    fontSize: 16,
    color: "#F8F9FB",
    width: "100%",
  },
  locationDiv: {
    width: "100%",
    height: 38,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bodyDiv: {
    padding: 15,
    backgroundColor: "#F8F9FB"
  },
  recommendedDiv: {
    marginTop: 20,
  },
  recommendedContainer: {
    marginTop: 20,
    height: 300,
  },
  recommendedDivStyle: {
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
    rowGap: 15,
    justifyContent: "space-evenly",
    marginBottom: 15,
  },
});
