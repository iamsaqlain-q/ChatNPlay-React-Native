import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import ConstantVars from '../constants/ConstantVars';
import Ionicons from 'react-native-vector-icons/Ionicons';

const TopBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.margn}>
        <Ionicons
          name="videocam-outline"
          size={ConstantVars.largeSize}
          color={ConstantVars.primary}
        />
      </View>
      <View>
        <Text style={styles.appName}>{ConstantVars.appName}</Text>
      </View>
      <View style={styles.margn}>
        <Ionicons
          name="search-outline"
          size={ConstantVars.largeSize}
          color={ConstantVars.primary}
        />
      </View>
    </View>
  );
};

export default TopBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: Dimensions.get('window').width,
    backgroundColor: ConstantVars.secondryColor,
  },
  margn: {
    margin: 10,
  },
  appName: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: ConstantVars.smallSize,
    color: ConstantVars.white,
  },
});
