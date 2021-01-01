import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {COLORS} from '../utils/theme/Colors';
import {AspireText} from 'elements';

/**
 * @prop {object} style for Button
 * @prop {string} text for Button
 * @prop {boolean} isDisable = true it mean button cannot clickable
 * @prop {Function}  onPress for Button
 */
type AspireButtonProps = {
  style: object,
  text: string,
  isDisable: boolean,
  onPress: () => {},
};

/**
 * The Custom button for AspireDemo app
 * @param {AspireButtonProps} props for AspireButton
 * @returns {React.Component} AspireButton
 */
export const AspireButton = (props: AspireButtonProps) => {
  const {style, text, isDisable, onPress} = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[isDisable ? styles.containerDisable : styles.container, style]}>
      <AspireText text={text} size={16} color={COLORS.white} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 56,
    borderRadius: 28,
    backgroundColor: COLORS.green,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    shadowColor: COLORS.grey6,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 3,
  },
  containerDisable: {
    width: 300,
    height: 56,
    borderRadius: 28,
    backgroundColor: COLORS.grey3,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    shadowColor: COLORS.grey6,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 3,
  },
});
