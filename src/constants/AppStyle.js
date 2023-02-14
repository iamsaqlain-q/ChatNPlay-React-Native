import {StyleSheet} from 'react-native';
import ConstantVars from './ConstantVars';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatlist: {
    flex: 1,
    padding: 5,
  },
  cardView: {
    margin: 5,
  },
  buttonView: {
    backgroundColor: ConstantVars.primary,
    borderWidth: 0,
  },
  buttonTxt: {
    color: ConstantVars.white,
    fontWeight: 'bold',
  },
  titleTxt: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: ConstantVars.secondryColor,
    margin: 5,
  },
  screenWidth: {
    width: '100%',
  },
  alignSelf: {
    alignSelf: 'center',
  },
});

export default styles;
