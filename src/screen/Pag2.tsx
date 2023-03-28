import { useNavigation } from '@react-navigation/core';
import React from 'react';
import {Button, Text, View} from 'react-native';
import {styles} from '../theme/appTheme';

const Pag2 = () => {
  const {navigate} = useNavigation();
  return (
    <View style={styles.globalMargin}>
      <Text>Pag2</Text>
      <Button title="Ir a pág. 3" onPress={() => navigate('Pag3')} />
    </View>
  );
};

export default Pag2;
