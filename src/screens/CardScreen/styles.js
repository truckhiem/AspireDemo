import {StyleSheet, Dimensions} from 'react-native';
import {COLORS} from '../../utils/theme/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.blue,
    paddingHorizontal: 24,
  },
  scrollView: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    // height: Dimensions.get('screen').height,
  },
  contentContainerStyle: {
    // height: Dimensions.get('screen').height,
  },
  contentList: {
    paddingTop: 32,
    paddingBottom: 32
  },
  cardBackground: {
    position: 'absolute',
    backgroundColor: COLORS.white,
    bottom: 0,
    left: 0,
    right: 0,
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
  },
  title: {
    marginTop: 52,
    marginBottom: 24,
  },
  icMenu: {
    position: 'absolute',
    top: 36,
    right: 0,
  },
  textBalance: {
    marginBottom: 15,
  },
  groupBalance: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  unitBalance: {
    width: 40,
    height: 22,
    borderRadius: 4,
    backgroundColor: COLORS.green,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10
  },
});
