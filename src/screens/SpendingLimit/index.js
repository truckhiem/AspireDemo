import React, {useState, useCallback, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {useDispatch} from 'react-redux';
import {Input} from 'react-native-elements';
import {AspireImage, AspireText, AspireHeader} from 'elements';
import {COLORS} from '../../utils/theme/Colors';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {CurrencyFormat, ReCurrencyFormat} from '../../utils/Functions';
import {AspireButton} from '../../elements';
import {
  setSpendingLimit,
  setIsSpendingLimitEnable,
} from '../../stores/CreditStore/actions';
import {useSpendingLimit} from '../../stores/CreditStore/selectors';
import * as RootNavigation from 'navigations/RootNavigation';

const icSetLimit = require('res/images/ic_set_limit_spending.png');

export const SpendingLimit = () => {
  const dispatch = useDispatch();
  const spendingLimit = useSpendingLimit();
  const [inputValue, setInputValue] = useState(
    CurrencyFormat(`${spendingLimit}`),
  );
  const [isDisableSave, setIsDisableSave] = useState(true);
  const onTextChange = useCallback((text) => {
    const formatted = CurrencyFormat(text);
    setInputValue(formatted);
  }, []);
  const onPressSave = () => {
    dispatch(setSpendingLimit(ReCurrencyFormat(inputValue)));
    RootNavigation.goBack();
  };
  useEffect(() => {
    return () => {
      console.log('-------------spendingLimit', spendingLimit);
      if (spendingLimit === 0) {
        dispatch(setIsSpendingLimitEnable(false));
      }else{
        dispatch(setIsSpendingLimitEnable(true));
      }
    };
  }, [spendingLimit]);

  useEffect(() => {
    setIsDisableSave(inputValue.length === 0 || inputValue === '0');
  }, [inputValue]);
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        scrollEnabled={false}
        contentContainerStyle={styles.keyboardAware}
        keyboardShouldPersistTaps={'never'}>
        <AspireHeader title="Spending limit" />
        <View style={styles.content}>
          <View style={styles.groupInputInfo}>
            <View style={styles.groupTextDesc}>
              <AspireImage source={icSetLimit} style={styles.iconSetLimit} />
              <AspireText
                text="Set a weekly debit card spending limit"
                size={14}
                color={COLORS.grey4}
              />
            </View>
            <Input
              leftIcon={
                <View style={styles.unitBalance}>
                  <AspireText text="S$" size={12} color={COLORS.white} isBold />
                </View>
              }
              containerStyle={styles.inputContainerStyle}
              inputContainerStyle={styles.inputContainerStyle2}
              leftIconContainerStyle={styles.inputLeftIconContainerStyle}
              inputStyle={styles.inputStyle}
              keyboardType="number-pad"
              onChangeText={onTextChange}
              value={inputValue}
            />
            <AspireText
              text="Here weekly means the last 7 days - not the calendar week"
              size={13}
              color={COLORS.grey2}
            />
            <View style={styles.groupSuggestion}>
              <TouchableOpacity
                style={styles.itemSuggestion}
                onPress={() => onTextChange('5000')}>
                <AspireText text="S$ 5,000" size={12} color={COLORS.green} />
              </TouchableOpacity>
              <TouchableOpacity
                style={{...styles.itemSuggestion, marginHorizontal: 12}}
                onPress={() => onTextChange('10000')}>
                <AspireText text="S$ 10,000" size={12} color={COLORS.green} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.itemSuggestion}
                onPress={() => onTextChange('15000')}>
                <AspireText text="S$ 15,000" size={12} color={COLORS.green} />
              </TouchableOpacity>
            </View>
          </View>
          <AspireButton
            text="Save"
            isDisable={isDisableSave}
            onPress={onPressSave}
          />
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};
