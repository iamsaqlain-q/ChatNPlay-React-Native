import {Dimensions, StyleSheet} from 'react-native';
import ConstantVars from './ConstantVars';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width,
  },
  flatlist: {
    flex: 1,
    padding:10,
    width: Dimensions.get('window').width,
  },
  cardContent: {
    flexDirection:'row',
    backgroundColor: ConstantVars.secondryColor,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  videoTag: {
    backgroundColor: ConstantVars.backColor,
  },
  cardView: {
    marginVertical: 5,
  },
  buttonView: {
    alignSelf: 'flex-start',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: ConstantVars.primary,
    padding: 10,
    margin: 5,
    borderRadius: 15,
    borderWidth: 0,
  },
  buttonTxt: {
    color: ConstantVars.white,
    fontWeight: 'bold',
  },
  titleTxt: {
    alignSelf: 'flex-start',
    textAlign: 'center',
    fontWeight: 'bold',
    color: ConstantVars.white,
    margin: 5,
  },
  screenWidth: {
    width: '100%',
    padding: 10,
    backgroundColor: ConstantVars.backColor,
    alignSelf: 'center',
  },
  iconsView: {
    width: '100%',
    backgroundColor: ConstantVars.secondryColor,
    flexDirection: 'row',
    alignSelf: 'flex-start',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
  },
});

export default styles;
