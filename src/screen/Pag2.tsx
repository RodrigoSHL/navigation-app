import {StackScreenProps} from '@react-navigation/stack';
import React, { useEffect } from 'react';
import {Button, Text, View} from 'react-native';
import {styles} from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> {}

const Pag2 = ({navigation}: Props) => {

  useEffect(() => {
    navigation.setOptions({
      title: 'HelloWorld',
      headerBackTitle: "Back"
    })
  }, [])

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pag2</Text>
      <Button title="Ir a pág. 3" onPress={() => navigation.navigate('Pag3')} />
    </View>
  );
};

export default Pag2;
