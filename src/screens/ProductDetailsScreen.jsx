import React from 'react';
import {
  View, StyleSheet, StatusBar, Dimensions, Image, ScrollView,
} from 'react-native';
// import PropTypes from 'prop-types';

// Components
import Text from '../components/Text/Text';

import { colors, sizing } from '../styles';

const screen = Dimensions.get('screen');
const flatListHeight = screen.width * 0.75;

const ProductDetailsScreen = () => (
  <View style={[styles.container]}>
    <StatusBar barStyle="dark-content" />
    <View style={styles.header}>
      {/* <Ionicons name="arrow-back-outline" size={24} color="white" /> */}
      <Text style={styles.headerTitle}>
        PRODUCT DETAILS
      </Text>
    </View>
    <View style={styles.background}>
      <ScrollView>
        <Image
          source={{
            uri: 'https://d1hv7ee95zft1i.cloudfront.net/custom/deal-photo/gallery/fuso-fj2528r-wing-van-truck-philippines-5f1fe956cd1f1.webp',
          }}
          style={{ width: '100%', height: flatListHeight }}
          resizeMode="cover"
        />
      </ScrollView>
      {/* <View style={styles.content} /> */}
    </View>

  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
  absoluteCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    height: 90,
    // paddingBottom: 32,
    paddingBottom: sizing.padding.xl,
    // marginTop: sizing.margin.l,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  headerTitle: {
    color: colors.text.black,
    fontSize: sizing.font.s,
  },
  background: {
    flex: 1,
    backgroundColor: colors.white,
  },
});

export default ProductDetailsScreen;
