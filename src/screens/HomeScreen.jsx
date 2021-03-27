import React from 'react';
import {
  ScrollView, StyleSheet, View, TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

// Components
import ProductHorizontalList from '../components/ProductHorizontalList/ProductHorizontalList';
import CustomHeaderLayout from '../components/Layouts/CustomHeaderLayout';
import { sizing, typography } from '../styles';

// mock data
import { products } from '../lib/mockData';
import Text from '../components/Text/Text';

const HomeScreen = ({ navigation }) => (
  <CustomHeaderLayout title="Feed">
    <ScrollView>
      <View style={styles.header}>
        <Text style={typography.listTitle}>Featured Products</Text>
        <TouchableOpacity onPress={() => navigation.navigate('FeaturedProductsScreen')}>
          <Text type="light-s-primary">
            See All
          </Text>
        </TouchableOpacity>
      </View>
      <ProductHorizontalList
        products={products}
        title="Featured Products"
        seeAll={() => navigation.navigate('FeaturedProductsScreen')}
        navigation={navigation}
      />
      <ProductHorizontalList
        products={products}
        title="Latest Products"
        containerStyle={{
          marginTop: sizing.margin.xl,
        }}
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

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: sizing.padding.m,
  },
});

export default HomeScreen;
