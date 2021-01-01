import React from 'react';
import {View, StyleSheet} from 'react-native';
import {COLORS} from '../utils/theme/Colors';

/**
 * @prop {object} style for Button
 */
type AspireDotsProps = {
  style: object,
};

/**
 * The dots to show when card number was hidden
 * @param {AspireDotsProps} props for AspireDots
 * @returns {React.Component} AspireDots
 */
export const AspireDots = (props: AspireDotsProps) => {
  const {style} = props;
  return (
    <View style={[styles.container, style]}>
      <View style={styles.dot} />
      <View style={[styles.dot, styles.dotMiddle]} />
      <View style={[styles.dot, styles.dotMiddle]} />
      <View style={[styles.dot, styles.dotMiddle]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    backgroundColor: COLORS.white,
    borderRadius: 4,
  },
  dotMiddle: {
    marginLeft: 6,
  },
});
