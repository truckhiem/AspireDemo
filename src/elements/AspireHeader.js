import React, {useCallback} from 'react';
import {StyleSheet, View} from 'react-native';
import {AspireImage, AspireText} from 'elements';
import {COLORS} from 'utils/theme/Colors';
import {Header} from 'react-native-elements';
import * as RootNavigation from 'navigations/RootNavigation';

const icMenu = require('res/images/ic_menu.png');
const icBack = require('res/images/ic_back.png');

/**
 * @prop {string} title for Header
 */
type AspireHeaderProps = {
  title: string,
};

/**
 * The Header with Aspire logo on right side and back button on left side
 * @param {AspireHeaderProps} props for AspireHeader
 * @returns {React.Component} AspireHeader
 */
export const AspireHeader = (props: AspireHeaderProps) => {
  const {title} = props;
  const onBack = useCallback((text) => {
    RootNavigation.goBack();
  }, []);
  return (
    <View>
      <Header
        leftComponent={
          <AspireImage source={icBack} style={styles.icMenu} onPress={onBack} />
        }
        rightComponent={<AspireImage source={icMenu} style={styles.icMenu} />}
        containerStyle={styles.containerHeader}
      />
      <AspireText
        text={title}
        size={24}
        color={COLORS.white}
        isBold
        textStyle={styles.title}
      />
    </View>
  );
};

export const styles = StyleSheet.create({
  containerHeader: {
    backgroundColor: 'transparent',
    borderBottomWidth: 0,
    paddingHorizontal: 24,
    marginBottom: 10,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    marginLeft: 24,
  },
});
