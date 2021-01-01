import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {COLORS} from '../utils/theme/Colors';
import {BOTTOM_BAR} from 'res/data/bottom_bar';
import {AspireText} from 'elements/AspireText';
import {AspireImage} from './AspireImage';

/**
 * @prop {object} style for BottomBarIcon
 * @prop {string} title for BottomBarIcon
 * @prop {boolean} focused = true it mean this icon is focused
 */
type BottomBarIconProps = {
  style: object,
  title: string,
  focused: boolean,
};

/**
 * The Custom button for AspireDemo app
 * @param {BottomBarIconProps} props for BottomBarIcon
 * @returns {React.Component} BottomBarIcon
 */
export const BottomBarIcon = (props: BottomBarIconProps) => {
  const [tintColor, setTintColor] = useState(COLORS.grey);
  const [source, setSource] = useState('');
  const {style, title, focused} = props;
  useEffect(() => {
    setTintColor(focused ? COLORS.green : COLORS.grey);
  }, [focused]);
  useEffect(() => {
    const tab = BOTTOM_BAR.find((tab) => tab.title === title);
    setSource(tab.icon);
  }, [title]);
  return (
    <View style={styles.container}>
      <AspireImage style={styles.icon} source={source} tintColor={tintColor} />
      <AspireText text={title} size={9} color={tintColor} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  icon: {
    marginBottom: 6,
  },
});
