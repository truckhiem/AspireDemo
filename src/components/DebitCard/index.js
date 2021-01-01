import { AspireDots, AspireImage, AspireText } from 'elements';
import React, { useCallback, useState } from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../../utils/theme/Colors';
import { styles } from './styles';

const icAspire = require('res/images/ic_card_aspire_logo.png');
const icVisa = require('res/images/ic_visa_logo.png');
const icEyeEnable = require('res/images/ic_eye_enable.png');
const icEyeDisable = require('res/images/ic_eye_disable.png');

/**
 * @prop {boolean} isHideInfo for CardNumberItem
 * @prop {string} item for CardNumberItem
 */
type CardNumberItemProps = {
  isHideInfo: boolean,
  item: string,
};

/**
 * The CardNumberItem component for DebitCard
 * @param {CardNumberItemProps} props for CardNumberItem
 * @returns {React.Component} CardNumberItem
 */
const CardNumberItem = (props: CardNumberItemProps) => {
  const {isHideInfo, item} = props;
  if (isHideInfo) {
    return <AspireDots style={styles.textCardNumber} />;
  }
  return (
    <AspireText
      text={isHideInfo ? '****' : item}
      size={14}
      color={COLORS.white}
      textStyle={styles.textCardNumber}
      isBold
    />
  );
};

/**
 * @prop {boolean} isHideInfo for CVVNumberItem
 * @prop {string} cvv for CVVNumberItem
 */
type CVVNumberItemProps = {
  isHideInfo: boolean,
  cvv: string,
};

/**
 * The CVVNumberItem component for DebitCard
 * @param {CVVNumberItemProps} props for CVVNumberItem
 * @returns {React.Component} CVVNumberItem
 */
const CVVNumberItem = (props: CVVNumberItemProps) => {
  const {isHideInfo, cvv} = props;
  if (isHideInfo) {
    return (
      <View style={styles.cvvGroup}>
        <AspireText
          text={`CVV: `}
          isBold
          size={13}
          color={COLORS.white}
          textStyle={styles.textCVV}
        />
        <AspireText
          text="***"
          isBold
          size={24}
          color={COLORS.white}
          textStyle={styles.cvvHiddenText}
        />
      </View>
    );
  }
  return (
    <AspireText
      text={`CVV: ${cvv}`}
      isBold
      size={13}
      color={COLORS.white}
      textStyle={styles.textCVV}
    />
  );
};

/**
 * @prop {string} cardNumber for DebitCard
 * @prop {string} name for DebitCard
 * @prop {string} thru for DebitCard
 * @prop {string} cvv for DebitCard
 */
type DebitCardProps = {
  cardNumber: string,
  name: string,
  thru: string,
  cvv: string,
};

/**
 * The DebitCard component for Credit screen
 * @param {DebitCardProps} props for DebitCard
 * @returns {React.Component} DebitCard
 */
export const DebitCard = (props: DebitCardProps) => {
  const [isHideInfo, setIsHideInfo] = useState(true);
  const {cardNumber, name, thru, cvv} = props;
  const cardNumberSplit = cardNumber.split(' ');
  const onPressShowHideInfo = useCallback(() => {
    setIsHideInfo((isHideInfo) => !isHideInfo);
  }, [cardNumber]);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.buttonShowCardGroup}
        onPress={onPressShowHideInfo}>
        <AspireImage
          style={styles.iconEye}
          source={isHideInfo ? icEyeEnable : icEyeDisable}
        />
        <AspireText
          text={isHideInfo ? 'Show card number' : 'Hide card number'}
          size={12}
          color={COLORS.green}
          textStyle={styles.textName}
          isBold
        />
      </TouchableOpacity>
      <View style={styles.cardContainer}>
        <View style={styles.info}>
          <AspireText
            id="text_name"
            text={name}
            size={22}
            color={COLORS.white}
            textStyle={styles.textName}
            isBold
          />
          <FlatList
            style={styles.content}
            data={cardNumberSplit}
            horizontal
            keyExtractor={(item, index) => index}
            renderItem={({item, index}) => (
              <CardNumberItem
                item={item}
                index={index}
                isHideInfo={
                  index === cardNumberSplit.length - 1 ? false : isHideInfo
                }
              />
            )}
          />
          <View style={styles.thruGroup}>
            <AspireText
              text={`Thru: ${thru}`}
              size={13}
              color={COLORS.white}
              isBold
            />
            <CVVNumberItem isHideInfo={isHideInfo} cvv={cvv} />
          </View>
        </View>
        <AspireImage source={icAspire} style={styles.logoAspire} />
        <AspireImage source={icVisa} style={styles.logoVisa} />
      </View>
    </View>
  );
};
