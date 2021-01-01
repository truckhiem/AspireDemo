import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/theme/Colors';

export const styles = StyleSheet.create({
  container: {},
  cardContainer: {
    marginHorizontal: 24,
    height: 220,
    borderRadius: 10,
    backgroundColor: COLORS.green,
  },
  logoAspire: {
    position: 'absolute',
    top: 24,
    right: 24,
  },
  logoVisa: {
    position: 'absolute',
    bottom: 24,
    right: 24,
  },
  info: {
    marginLeft: 24,
    marginTop: 70,
  },
  thruGroup: {
    flexDirection: 'row',
  },
  textCVV: {
    marginLeft: 32,
  },
  textName: {
    marginBottom: 24,
  },
  textCardNumber: {
    marginBottom: 12,
    marginRight: 24,
    letterSpacing: 3.46
  },
  cardNumberGroup: {
    flexDirection: 'row',
  },
  cvvGroup: {
    flexDirection: 'row',
  },
  cvvHiddenText: {
    lineHeight: 26,
    textAlign: 'center',
  },
  buttonShowCardGroup: {
    height: 44,
    backgroundColor: COLORS.white,
    borderTopRightRadius: 6,
    borderTopLeftRadius: 6,
    alignSelf: 'flex-end',
    marginRight: 24,
    marginBottom: -10,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 8,
    paddingHorizontal: 12
  },
  iconEye:{
    marginRight: 6
  }
});
