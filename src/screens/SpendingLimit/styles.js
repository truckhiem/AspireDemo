import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/theme/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.blue,
  },
  content: {
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
    backgroundColor: COLORS.white,
    marginTop: 40,
    flex: 1,
    paddingTop: 32,
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  groupInputInfo: {
    flex: 1,
  },
  groupTextDesc: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  iconSetLimit: {
    marginRight: 12,
  },
  unitBalance: {
    width: 40,
    height: 22,
    borderRadius: 4,
    backgroundColor: COLORS.green,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  inputContainerStyle: {
    paddingLeft: 0,
    marginLeft: 0,
    marginBottom: 12,
  },
  inputContainerStyle2: {
    borderBottomColor: COLORS.grey6,
  },
  inputLeftIconContainerStyle: {
    paddingLeft: 0,
    marginLeft: 0,
  },
  inputStyle: {
    color: COLORS.grey4,
    fontWeight: 'bold',
    fontSize: 24,
  },
  keyboardAware: {
    flex: 1,
  },
  groupSuggestion: {
    flexDirection: 'row',
    marginTop: 32,
  },
  itemSuggestion: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    height: 40,
    backgroundColor: COLORS.green2,
    borderRadius: 4,
  },
});
