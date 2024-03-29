import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  FlatList,
  Text,
  ScrollView,
  Pressable,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { cartSlice } from "../store/cartSlice";
import { useGetProductQuery } from "../store/apiSlice";
import { ActivityIndicator } from "react-native";

const { width } = Dimensions.get("window");

const ProductDetails = ({route}) => {
  const id = route.params.id
  const { data, error, isLoading } = useGetProductQuery(id);
  // const product = useSelector((state) => state.products.selectedProduct);

  const navigation = useNavigation();

  const dispatch = useDispatch();

 
  if (isLoading) {
    return <ActivityIndicator />;
  }
  
  if (error) {
    return <Text>{error.error}</Text>;
  }
  
  const product = data.data;
  // product
  console.log(product.images)

  const addToCart = () => {
    dispatch(cartSlice.actions.addCartItem({ product,id }));
  };
  return (
    <View>
      <ScrollView>
        {/* Image Carousel */}
        <FlatList
          data={product.images}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => (
            <Image
              source={{ uri: item }}
              style={{ width, aspectRatio: 1, resizeMode: "cover" }}
            />
          )}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
        />
        <View style={{ padding: 20 }}>
          {/* Title */}
          <Text style={styles.title}>{product.name}</Text>
          {/* Price */}
          <Text style={styles.price}>$ {product.price}</Text>
          {/* Description */}
          <Text style={styles.description}>{product.description}</Text>
        </View>
      </ScrollView>
      {/* Add to cart button */}
      <Pressable onPress={addToCart} style={styles.button}>
        <Text style={styles.buttonText}>Participate Now</Text>
      </Pressable>
      {/* Navigation icon */}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 34,
    fontWeight: "500",
    marginVertical: 10,
  },
  price: {
    fontWeight: "500",
    fontSize: 18,
    letterSpacing: 2,
  },
  description: {
    marginVertical: 10,
    fontSize: 18,
    lineHeight: 30,
    fontWeight: "300",
    paddingBottom: 80,
  },
  button: {
    position: "absolute",
    backgroundColor: "black",
    bottom: 30,
    width: width * 0.9,
    alignSelf: "center",
    padding: 20,
    borderRadius: 100,
    alignItems: "center",
    elevation: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "500",
    fontSize: 16,
  },
});

export default ProductDetails;
