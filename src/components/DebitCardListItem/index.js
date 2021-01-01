import {AspireImage, AspireText} from 'elements';
import React, {useCallback, useState} from 'react';
import {Switch, TouchableOpacity, View} from 'react-native';
import {COLORS} from '../../utils/theme/Colors';
import {styles} from './styles';

/**
 * @prop {string} icon for DebitCardListItem
 * @prop {string} title for DebitCardListItem
 * @prop {string} description for DebitCardListItem
 * @prop {function} onSwitch for DebitCardListItem
 * @prop {boolean} isEnable for DebitCardListItem
 * @prop {boolean} isHaveSwitch for DebitCardListItem
 */
type DebitCardListItemProps = {
  icon: string,
  title: string,
  description: string,
  isEnable: boolean,
  isHaveSwitch: boolean,
  onSwitch: () => {},
};

/**
 * The DebitCardListItem component for Credit screen
 * @param {DebitCardListItemProps} props for DebitCardListItem
 * @returns {React.Component} DebitCardListItem
 */
export const DebitCardListItem = (props: DebitCardListItemProps) => {
  const {icon, title, description, onSwitch, isEnable, isHaveSwitch} = props;
  const [switchScaleRatio, setSwitchScaleRatio] = useState(1);
  const onLayout = useCallback((event) => {
    setSwitchScaleRatio(34 / event.nativeEvent.layout.width);
  }, []);
  return (
    <TouchableOpacity style={styles.container}>
      <AspireImage source={icon} />
      <View style={styles.titleDescGroup}>
        <AspireText text={title} color={COLORS.blue} size={14} />
        <AspireText
          text={description}
          color={COLORS.grey2}
          size={13}
          textStyle={styles.textDesc}
        />
      </View>
      {isHaveSwitch && (
        <Switch
          style={{
            transform: [{scaleX: switchScaleRatio}, {scaleY: switchScaleRatio}],
          }}
          trackColor={{false: COLORS.grey3, true: COLORS.green}}
          thumbColor={COLORS.white}
          onValueChange={onSwitch}
          value={isEnable}
          onLayout={onLayout}
        />
      )}
    </TouchableOpacity>
  );
};
