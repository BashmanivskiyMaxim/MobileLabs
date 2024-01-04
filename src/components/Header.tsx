import React from 'react';
import type {FC} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

interface HeaderProps {
  title: string;
}

const Header: FC<HeaderProps> = ({title}) => {
  return (
    <View style={styles.header}>
      <View style={styles.header}>
        <Image
          source={require('../assets/logo.png')}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    color: '#FFFFFF',
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightContainer: {
    flex: 1,
    marginLeft: 10,
  },
  image: {
    width: 150,
    height: 60,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Header;
