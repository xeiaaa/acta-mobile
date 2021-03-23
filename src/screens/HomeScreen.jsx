import React from 'react';
import {
  ScrollView,
} from 'react-native';
import PropTypes from 'prop-types';

// Components
import ProductHorizontalList from '../components/ProductHorizontalList/ProductHorizontalList';
import CustomHeaderLayout from '../components/Layouts/CustomHeaderLayout';
import { sizing } from '../styles';

// mock data
import { products } from '../lib/mockData';

const HomeScreen = ({ navigation }) => (
  <CustomHeaderLayout title="Feed">
    <ScrollView>
      <ProductHorizontalList
        products={products}
        title="Featured Products"
        seeAll={() => navigation.navigate('FeaturedProductsScreen')}
      />
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

HomeScreen.defaultProps = {
  navigation: null,
};

HomeScreen.propTypes = {
  navigation: PropTypes.any,
};

export default HomeScreen;
