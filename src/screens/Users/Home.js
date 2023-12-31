import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import { baseUrl } from "../../redux/store";
import {
  getProductsData,
  getProductsDataFailure,
  getProductsDataSuccess,
} from "../../redux/action";
import {
  CartBagIcon,
  LocationDownArrowIcon,
  SearchIcon,
} from "../../../assets";
import OfferCard from "../../components/Home/OfferCard";
import RecommendedCard from "../../components/Home/RecommendedCard";
import CartIcon from "../../components/Users/CartIcon";

const Home = ({ route, navigation }) => {
  const [searchItem, setSearchItem] = useState("");


  const { products, isLoading, cart, isError } = useSelector((store, action) => store);

  const dispatch = useDispatch();

  const fetchProducts = async () => {
    dispatch(getProductsData());

    try {
      const response = await axios.get(`${baseUrl}/products`);

      const filterProducts = response.data.products.filter((product) => {
        return product.title?.toLowerCase().includes(searchItem?.toLowerCase());
      })

      dispatch(getProductsDataSuccess(filterProducts));
    } catch (err) {
      console.warn(err);

      dispatch(getProductsDataFailure());
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [searchItem]);


  return (
    <>
      <View>
        <View style={styles.mainDiv}>
          <View style={styles.headerDiv}>
            <View>
              <Text style={styles.headerText}>Hey, Rahul</Text>
            </View>

            <CartIcon navigation={navigation} cartLength={cart.length} />

          </View>

          <View style={styles.searchDiv}>
            <Image source={SearchIcon} alt="SearchIcon" />
            <TextInput
              placeholder="Search Products or Store"
              placeholderTextColor="#8891A5"
              style={styles.searchBar}
              value={searchItem}
              onChangeText={(item) => setSearchItem(item)}
            />
          </View>

          <View style={styles.locationDiv}>
            <View>
              <Text style={{ color: "#8891A5", fontSize: 11, lineHeight: 15 }}>
                DELIVERY TO
              </Text>
              <TouchableOpacity>
                <Text style={{ color: "#F8F9FB", fontSize: 14, lineHeight: 19 }}>
                  Green Way 3000, Sylhet <Image source={LocationDownArrowIcon} />
                </Text>
              </TouchableOpacity>
            </View>

            <View>
              <Text style={{ color: "#8891A5", fontSize: 11, lineHeight: 15 }}>
                WITHIN
              </Text>
              <TouchableOpacity>
                <Text style={{ color: "#F8F9FB", fontSize: 14, lineHeight: 19 }}>
                  1 Hour <Image source={LocationDownArrowIcon} />
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.bodyDiv}>
          {/* Offers sections */}
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {
              products[0]?.images?.map((item, index) => {
                return (
                  <OfferCard key={index} img={item} />
                )
              })
            }

          </ScrollView>

          <View>
            {isLoading && <Text style={{ alignSelf: "center", fontSize: 20, fontWeight: "800" }} >Loading...</Text>}
          </View>

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
                      <RecommendedCard key={item.id} navigation={navigation} product={item} heart={true} />
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
