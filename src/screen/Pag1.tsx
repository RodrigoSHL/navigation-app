import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Button, Text, View} from 'react-native';
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> {}

const Pag1 = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pag1</Text>
      <Button title="Ir a pág. 2" onPress={() => navigation.navigate('Pag2')} />
    </View>
  );
};

export default Pag1;
