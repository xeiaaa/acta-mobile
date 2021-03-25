import React, { useState } from 'react';
import {
  View, StyleSheet, StatusBar, Dimensions, Image, ScrollView,
} from 'react-native';
// import PropTypes from 'prop-types';

// Components
import { TouchableOpacity } from 'react-native-gesture-handler';
import Text from '../components/Text/Text';
import Title from '../components/Title/Title';
import Subtitle from '../components/Subtitle/Subtitle';
import Specifications from '../components/Specifications/Specifications';

import {
  colors, sizing, typography, global,
} from '../styles';
import Badge from '../components/Badge/Badge';
import Button from '../components/Button/Button';

const screen = Dimensions.get('screen');
const flatListHeight = screen.width * 0.75;

const ProductDetailsScreen = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
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

          <View style={{
            alignItems: 'center',
            marginTop: sizing.margin.xl,
          }}
          >
            <Title text="Truck Sample Green Eight Wheeler" style={{ ...typography.align.center, marginBottom: sizing.margin.s }} />
            <View style={[
              global.flexRow,
              global.absoluteCenter,
              { marginBottom: sizing.margin.s }]}
            >
              <Badge text="Cargo" />
              <Badge text="Classic" />
            </View>
            <Subtitle text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod T incididunt ut labore et dolore magna aliqua. " style={{ ...typography.align.center, marginBottom: sizing.margin.s }} />
            <View style={global.absoluteCenter}>
              <Text style={{
                ...sizing.font.xs,
                ...typography.light,
                marginBottom: sizing.margin.s,
              }}
              >
                1.248 Offers
              </Text>

            </View>
            <Text style={{
              ...typography.title,
              color: colors.primary,
              ...typography.align.center,
              marginBottom: sizing.margin.xl,
            }}
            >
              P 500,650.00
            </Text>

            <View style={{
              borderBottomColor: colors.lightGrey,
              borderBottomWidth: 1,
              width: '100%',
              paddingHorizontal: sizing.padding.xl,
              marginBottom: sizing.margin.s,
            }}
            >
              <View style={{
                ...global.flexRow,
                // justifyContent: 'space-evenly',
              }}
              >
                <TouchableOpacity
                  style={{
                    flex: 1,
                    minWidth: '50%',
                    paddingBottom: sizing.padding.xxs,
                    borderBottomColor: tabIndex === 0 ? colors.primary : colors.lightGrey,
                    borderBottomWidth: 1,
                    position: 'relative',
                    top: 1,
                  }}
                  onPress={() => setTabIndex(0)}
                  disabled={tabIndex === 0}
                >
                  <Text style={{ textAlign: 'center', ...typography.heavy, fontSize: sizing.font.l }}>Description</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    flex: 1,
                    minWidth: '50%',
                    paddingBottom: sizing.padding.xxs,
                    borderBottomColor: tabIndex === 1 ? colors.primary : colors.lightGrey,
                    borderBottomWidth: 1,
                    position: 'relative',
                    top: 1,
                  }}
                  onPress={() => setTabIndex(1)}
                  disabled={tabIndex === 1}
                >
                  <Text style={{ textAlign: 'center', ...typography.heavy, fontSize: sizing.font.l }}>Specifications</Text>
                </TouchableOpacity>
              </View>
            </View>

            {
                tabIndex === 0 ? (
                  <View>
                    <Subtitle text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " />
                    <Subtitle text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " />
                    <Subtitle text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " />
                    <Subtitle text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " />
                    <Subtitle text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " />
                    <Subtitle text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " />
                    <Subtitle text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " />
                    <Subtitle text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " />
                    <Subtitle text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " />
                  </View>
                ) : (
                  <Specifications data={{
                    make: 'Isuzu',
                    model: 'Forward',
                    series: 'FRR35H3S',
                    engine: '6HL1-104643',
                    year: '2016',
                    sku: 'AX#0226',
                  }}
                  />
                )
              }
          </View>

          <View style={{ ...global.absoluteCenter, marginVertical: sizing.margin.l }}>
            <Button text="reserve" type="secondary" />
          </View>
        </ScrollView>
        {/* <View style={styles.content} /> */}
      </View>

    </View>
  );
};

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
