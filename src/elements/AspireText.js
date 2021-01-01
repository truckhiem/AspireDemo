import React from 'react';
import {Text, StyleSheet} from 'react-native';
import I18n from 'res/locales/i18n';
import {COLORS} from '../utils/theme/Colors';

/**
 * @prop {string} text for Text
 * @prop {string} color for Text
 * @prop {string} weight for Text
 * @prop {string} id for Text
 * @prop {object} textStyle for Text
 * @prop {boolean} isBold for Text
 * @prop {boolean} isItalic for Text
 * @prop {number} numberOfLines for Text
 * @prop {number} letterSpacing for Text
 * @prop {Function}  onPress for Text
 */
type AspireTextProps = {
  text: string,
  textStyle: object,
  numberOfLines: number,
  color: string,
  size: size,
  isBold: boolean,
  weight: string,
  isItalic: boolean,
  letterSpacing: number,
  id: string,
  onPress: () => {},
};

/**
 * The Custom text for AspireDemo app
 * @param {AspireTextProps} props for AspireText
 * @returns {React.Component} AspireText
 */
export const AspireText = (props: AspireTextProps) => {
  const {
    text,
    textStyle,
    numberOfLines,
    color,
    size,
    isBold,
    weight,
    isItalic,
    letterSpacing,
    id,
  } = props;
  const textColor = color || COLORS.white;
  const fontSize = size || 20;
  const fontWeight = isBold ? 'bold' : 'normal';
  const fontStyle = isItalic ? 'italic' : 'normal';
  const customStyle = {
    fontSize,
    fontStyle,
    color: textColor,
    fontWeight: weight ? weight : fontWeight,
    letterSpacing: letterSpacing ? letterSpacing : undefined,
    // fontFamily: GlobalStyle.fontFamily,
    // fontFamily: Platform.select({
    //   ios: 'Inter-Bold',
    //   android: 'Inter-Bold',
    // }),
  };
  return (
    <Text
      testID={id}
      style={[styles.text, customStyle, {...textStyle}]}
      numberOfLines={numberOfLines}
      {...this.props}>
      {I18n.t(text, {defaultValue: text})}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    // fontFamily: GlobalStyle.fontFamily,
    // includeFontPadding: false,
    // // paddingTop: 3,
    // // paddingBottom: 3,
    // paddingLeft: 0,
  },
});
