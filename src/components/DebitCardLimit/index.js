import {AspireText} from 'elements';
import React, {useCallback, useEffect, useState} from 'react';
import {View} from 'react-native';
import Svg, {Polygon} from 'react-native-svg';
import {COLORS} from '../../utils/theme/Colors';
import {styles} from './styles';

/**
 * @prop {number} value for DebitCardLimit
 * @prop {number} total for DebitCardLimit
 */
type DebitCardLimitProps = {
  value: number,
  total: number,
};

/**
 * The DebitCardLimit component for Credit screen
 * @param {DebitCardLimitProps} props for DebitCardLimit
 * @returns {React.Component} DebitCardLimit
 */
export const DebitCardLimit = (props: DebitCardLimitProps) => {
  const {value, total} = props;
  const [sliderWidth, setSliderWidth] = useState(0);
  const [sliderPositionTop, setSliderPositionTop] = useState(0);
  const [sliderPositionBottom, setSliderPositionBottom] = useState(0);
  const onLayout = useCallback((event) => {
    setSliderWidth(event.nativeEvent.layout.width);
  }, []);
  useEffect(() => {
    const sliderPosition = total === 0 ? 0 : (value * sliderWidth) / total;
    setSliderPositionTop(sliderPosition);
    setSliderPositionBottom(
      value === total ? sliderPosition : sliderPosition - 5,
    );
  }, [value, total, sliderWidth]);
  if (!total) {
    return null;
  }
  return (
    <View style={styles.container}>
      <View style={styles.groupAbove}>
        <AspireText
          text="Debit card spending limit"
          size={13}
          color={COLORS.grey4}
        />
        <View style={styles.groupTextLimit}>
          <AspireText text={`$${value}`} size={13} color={COLORS.green} />
          <AspireText
            text="|"
            size={13}
            color={COLORS.grey5}
            textStyle={styles.verticalDash}
          />
          <AspireText text={`$${total}`} size={13} color={COLORS.grey5} />
        </View>
      </View>
      <View style={styles.groupBelow}>
        <Svg height="100%" width="100%" onLayout={onLayout}>
          <Polygon
            points={`0,0 ${sliderPositionTop},0 ${sliderPositionBottom},15 0,15`}
            fill={COLORS.green}
          />
        </Svg>
      </View>
    </View>
  );
};
