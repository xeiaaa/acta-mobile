import React from 'react';
import {
  ScrollView,
} from 'react-native';
import PropTypes from 'prop-types';

// Components
import ProductHorizontalList from '../components/ProductHorizontalList/ProductHorizontalList';
import CustomHeaderLayout from '../components/Layouts/CustomHeaderLayout';

// mock data
import { products } from '../lib/mockData';
import ListTitle from '../components/ListTitle/ListTitle';

const HomeScreen = ({ navigation }) => (
  <CustomHeaderLayout title="Feed">
    <ScrollView>
      <ListTitle
        action={() => navigation.navigate('FeaturedProductsScreen')}
        actionText="See All"
        title="Featured Products"
      />
      <ProductHorizontalList
        products={products}
        title="Featured Products"
        seeAll={() => navigation.navigate('FeaturedProductsScreen')}
        navigation={navigation}
      />

      <ListTitle
        action={() => navigation.navigate('FeaturedProductsScreen')}
        actionText="See All"
        title="Latest Products"
        margin="t.xl"
      />
      <ProductHorizontalList
        products={products}
        title="Latest Products"
        navigation={navigation}
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
