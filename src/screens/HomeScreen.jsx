import React from 'react';
import {
  ScrollView,
} from 'react-native';

// Components
import ProductHorizontalList from '../components/ProductHorizontalList/ProductHorizontalList';
import CustomHeaderLayout from '../components/Layouts/CustomHeaderLayout';
import { sizing } from '../styles';

// mock data
import { products } from '../lib/mockData';

const HomeScreen = () => (
  <CustomHeaderLayout title="Feed">
    <ScrollView>
      <ProductHorizontalList products={products} title="Featured Products" />
      <ProductHorizontalList
        products={products}
        title="Latest Products"
        containerStyle={{
          marginTop: sizing.margin.xl,
        }}
      />
    </ScrollView>

  </CustomHeaderLayout>

);

export default HomeScreen;
