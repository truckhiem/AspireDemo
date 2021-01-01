import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/theme/Colors';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    marginTop: 26,
  },
  groupAbove: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  groupBelow: {
    height: 15,
    borderRadius: 7.5,
    backgroundColor: COLORS.green2,
    overflow: 'hidden',
  },
  groupTextLimit: {
    flexDirection: 'row',
  },
  verticalDash: {
    marginHorizontal: 5,
  },
});
