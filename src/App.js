/* eslint-disable prettier/prettier */
import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import products from './products.json';
import ProductCard from './components/Product/ProductCard';

function App() {
  // eslint-disable-next-line prettier/prettier
  const renderProduct = ({ item }) => <ProductCard product={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.headerText}>PATIKASTORE</Text>
      </View>

      <View>
        <FlatList
          data={products}
          renderItem={renderProduct}
          numColumns={2}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff1',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 40,
    color: 'purple',
  },
});

export default App;
