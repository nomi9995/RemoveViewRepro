import React, {useLayoutEffect} from 'react';
import {View, Button, StyleSheet, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Screen2 = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <Button title="goBack" onPress={goBack} />,
    });
  }, [navigation]);

  const goBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <Text>Screen 2</Text>
    </View>
  );
};

export default Screen2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
});
