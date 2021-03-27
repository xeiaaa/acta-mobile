import React from 'react';
import {
  View, TouchableOpacity, Image, FlatList, StyleSheet,
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

const ProductHorizontalList = ({
  products, containerStyle, navigation,
}) => (
  <View style={{ ...containerStyle }}>
    <FlatList
      style={styles.flatlist}
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.touchable}
          activeOpacity={0.7}
          onPress={() => navigation.navigate('ProductDetailsScreen')}
        >
          <Image source={sampleTruck} style={{ width: 200, height: 150 }} />
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
      horizontal
    />
  </View>
);

ProductHorizontalList.defaultProps = {
  products: [],
  containerStyle: {},
  navigation: null,
};

ProductHorizontalList.propTypes = {
  products: PropTypes.array,
  containerStyle: PropTypes.object,
  navigation: PropTypes.any,
};

const styles = StyleSheet.create({
  flatlist: { marginLeft: sizing.padding.m, marginTop: sizing.margin.m },
  price: {
    ...typography.listTitle,
    marginBottom: sizing.margin.xs,
  },
  touchable: {
    marginRight: sizing.margin.l,
    marginBottom: sizing.margin.s,
    width: 200,
  },
  infoWrapper: {
    ...globals.flexRow,
    width: 200,
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

export default ProductHorizontalList;
