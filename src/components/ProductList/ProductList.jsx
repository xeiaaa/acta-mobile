import React from 'react';
import {
  View, TouchableOpacity, Image, FlatList, StyleSheet, Dimensions,
} from 'react-native';
import PropTypes from 'prop-types';

// Components
import Text from '../Text/Text';
import Badges from '../Badges/Badges';

import {
  sizing, typography, globals,
} from '../../styles';
import { phpFormat } from '../../lib/helpers';

// mock data
import sampleTruck from '../../../assets/sample-truck.png';

const screen = Dimensions.get('screen');
const flatListWidth = screen.width - (sizing.padding.m * 2);

const ProductList = ({
  products, containerStyle,
}) => (
  <View style={{ ...containerStyle }}>
    <FlatList
      style={styles.flatlist}
      data={products}
      keyExtractor={(item) => item.id}
      numColumns={2}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.touchable}
          activeOpacity={0.7}
        >
          <Image
            source={sampleTruck}
            style={{
              width: flatListWidth * 0.5,
              height: flatListWidth * 0.5 * 0.75,
            }}
          />
          <Text style={{ ...typography.productTitle }}>{item.name}</Text>
          <Badges badges={item.tags} />

          <Text style={styles.price}>
            ₱
            {phpFormat(item.price)}
          </Text>

          <View style={styles.infoWrapper}>
            <View style={styles.info}>
              <Text style={typography.infoLabel}>Model:</Text>
              <Text style={typography.infoValue}>{item.model}</Text>
            </View>
            <View style={styles.info}>
              <Text style={typography.infoLabel}>Make:</Text>
              <Text style={typography.infoValue}>{item.make}</Text>
            </View>
            <View style={styles.info}>
              <Text style={typography.infoLabel}>Year:</Text>
              <Text style={typography.infoValue}>{item.year}</Text>
            </View>
            <View style={styles.info}>
              <Text style={typography.infoLabel}>Condition:</Text>
              <Text style={typography.infoValue}>{item.condition}</Text>
            </View>
          </View>
        </TouchableOpacity>
      )}
    />
  </View>
);

ProductList.defaultProps = {
  products: [],
  containerStyle: {},
};

ProductList.propTypes = {
  products: PropTypes.array,
  containerStyle: PropTypes.object,
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: sizing.padding.m,
  },
  flatlist: {
    paddingHorizontal: sizing.padding.m,
    // marginTop: sizing.margin.m,
  },
  price: {
    ...typography.listTitle,
    marginBottom: sizing.margin.xs,
  },
  touchable: {
    marginBottom: sizing.margin.s,
    width: flatListWidth * 0.5,
  },
  infoWrapper: {
    ...globals.flexRow,
    width: '100%',
    flexWrap: 'wrap',
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 10,
    width: '50%',
  },
});

export default ProductList;
