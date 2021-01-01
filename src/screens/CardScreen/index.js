import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, ScrollView, View} from 'react-native';
import {CARD_LIST_MENU} from '../../../res/data/card_list_menu';
import {DebitCardListItem, DebitCard, DebitCardLimit} from 'components';
import {AspireText, AspireImage} from 'elements';
import {styles} from './styles';
import {CARD_INFORMATION} from 'data/card_info';
import {COLORS} from '../../utils/theme/Colors';
import * as RootNavigation from '../../navigations/RootNavigation';
import {
  useIsSpendingLimitEnable,
  useSpendingLimit,
} from '../../stores/CreditStore/selectors';
import {useDispatch} from 'react-redux';
import {
  setSpendingLimit,
  setIsSpendingLimitEnable,
} from '../../stores/CreditStore/actions';
import {useFocusEffect} from '@react-navigation/native';

const icMenu = require('res/images/ic_menu.png');

export const CardScreen = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState(CARD_LIST_MENU);
  const [headerHeight, setHeaderHeight] = useState(250);
  const spendingLimit = useSpendingLimit();
  const isLimitEnable = useIsSpendingLimitEnable();
  const onSwitch = useCallback(
    (item) => {
      setData((exData) =>
        exData.map((itemData) => {
          if (item.title === itemData.title) {
            itemData.isEnable = !itemData.isEnable;
          }
          return itemData;
        }),
      );
      if (item.navigation === 'SpendingLimit') {
        if (item.isEnable) {
          RootNavigation.navigate(item.navigation);
          dispatch(setIsSpendingLimitEnable(true));
        } else {
          dispatch(setSpendingLimit(0));
          dispatch(setIsSpendingLimitEnable(false));
        }
      }
    },
    [data],
  );
  const onLayoutHeader = useCallback((event) => {
    setHeaderHeight(event.nativeEvent.layout.height + 8);
  }, []);

  console.log('isLimitEnable', isLimitEnable);
  console.log('spendingLimit', spendingLimit);
  useEffect(() => {
    console.log('isLimitEnable2', isLimitEnable);
    setData((exData) =>
      exData.map((itemData) => {
        if (itemData.navigation === 'SpendingLimit') {
          itemData.isEnable = isLimitEnable;
        }
        return itemData;
      }),
    );
  }, [isLimitEnable]);
  return (
    <View style={styles.container}>
      <View onLayout={onLayoutHeader}>
        <AspireImage source={icMenu} style={styles.icMenu} />
        <AspireText
          text="Debit Card"
          size={24}
          color={COLORS.white}
          isBold
          textStyle={styles.title}
        />
        <AspireText
          text="Available balance"
          size={14}
          color={COLORS.white}
          textStyle={styles.textBalance}
        />
        <View style={styles.groupBalance}>
          <View style={styles.unitBalance}>
            <AspireText text="S$" size={12} color={COLORS.white} isBold />
          </View>
          <AspireText text="3,000" size={14} color={COLORS.white} isBold />
        </View>
      </View>
      <ScrollView
        contentContainerStyle={{
          paddingTop: headerHeight,
          ...styles.contentContainerStyle,
        }}
        style={styles.scrollView}>
        <View style={{top: headerHeight + 90, ...styles.cardBackground}} />
        <DebitCard
          name={CARD_INFORMATION.name}
          cardNumber={CARD_INFORMATION.number}
          thru={CARD_INFORMATION.thru}
          cvv={CARD_INFORMATION.cvv}
        />
        <DebitCardLimit value={200} total={spendingLimit} />
        <FlatList
          scrollEnabled={false}
          style={styles.contentList}
          data={data}
          keyExtractor={(item) => item.title}
          renderItem={({item}) => (
            <DebitCardListItem
              icon={item.icon}
              title={item.title}
              description={
                item.isHaveSwitch
                  ? item.isEnable
                    ? item.descEnable
                    : item.descDisable
                  : item.desc
              }
              isHaveSwitch={item.isHaveSwitch}
              isEnable={item.isEnable}
              onSwitch={() => onSwitch(item)}
            />
          )}
        />
      </ScrollView>
    </View>
  );
};
