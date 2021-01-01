import React from 'react';
import {Image as RNImage, TouchableOpacity} from 'react-native';

const Image = (props) => {
  const {tintColor, style, resizeMode, source} = props;
  return (
    <RNImage
      style={{...style, tintColor}}
      resizeMode={resizeMode}
      source={source}
    />
  );
};

/**
 * @prop {object} style for Image
 * @prop {string} tintColor for Image
 * @prop {string} resizeMode for Image
 * @prop {string} source for Image
 * @prop {Function}  onPress for Image
 */
type AspireImageProps = {
  style: object,
  tintColor: string,
  resizeMode: string,
  source: string,
  onPress: () => {},
};

/**
 * The Custom image for AspireDemo app
 * @param {AspireImageProps} props for AspireImage
 * @returns {React.Component} AspireImage
 */
export const AspireImage = (props: AspireImageProps) => {
  const {onPress} = props;
  if (onPress) {
    return (
      <TouchableOpacity
        onPress={onPress}
        hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}>
        <Image {...props} />
      </TouchableOpacity>
    );
  }
  return <Image {...props} />;
};
