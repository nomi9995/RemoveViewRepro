import React from 'react';
import {View, Button, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Screen1 = () => {
  const navigation = useNavigation();
  const openModalHandler = () => {
    navigation.navigate('screen2');
  };
  return (
    <View style={styles.container}>
      <Button title="Open Modal" onPress={openModalHandler} />
    </View>
  );
};

export default Screen1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
});
