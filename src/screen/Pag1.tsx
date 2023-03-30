import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Button, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> {}

const Pag1 = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pag1</Text>
      <Button
        title="Go to page 2"
        onPress={() => navigation.navigate('Pag2')}
      />

      <Button
        title="Go to person"
        onPress={() => navigation.navigate('PersonScreen')}
      />
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('PersonScreen', {id: 1, name: 'Pepe'})
        }>
        <Text>navigation with arguments</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Pag1;
