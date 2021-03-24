import React from 'react';
import {
  View, TouchableOpacity, Image, FlatList, StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

// Components
import Text from '../Text/Text';
import Badges from '../Badges/Badges';

import {
  colors, sizing, typography, global,
} from '../../styles';
import { phpFormat } from '../../lib/helpers';

// mock data
import sampleTruck from '../../../assets/sample-truck.png';

const ProductHorizontalList = ({
  products, title, containerStyle, seeAll, navigation,
}) => (
  <View style={{ ...containerStyle }}>
    <View style={styles.header}>
      <Text style={typography.listTitle}>{ title }</Text>
      <TouchableOpacity onPress={seeAll}>
        <Text style={{
          ...typography.link,
          color: colors.primary,
        }}
        >
          See All
        </Text>
      </TouchableOpacity>
    </View>

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
  title: '',
  containerStyle: {},
  seeAll: () => {},
  navigation: null,
};

ProductHorizontalList.propTypes = {
  products: PropTypes.array,
  title: PropTypes.string,
  containerStyle: PropTypes.object,
  seeAll: PropTypes.func,
  navigation: PropTypes.any,
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: sizing.padding.m,
  },
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
    ...global.flexRow,
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
