import React from 'react';
import {
  View,
} from 'react-native';

// Components
// import Title from '../components/Title/Title';
import CustomHeaderLayout from '../components/Layouts/CustomHeaderLayout';
import ProductList from '../components/ProductList/ProductList';

// mock data
import { featuredProducts } from '../lib/mockData';

const FeaturedProductsScreen = () => (
  <CustomHeaderLayout title="Featured Products">
    <View>
      <ProductList
        products={featuredProducts}
        title="Featured Products"
      />
    </View>

  </CustomHeaderLayout>

);

export default FeaturedProductsScreen;
