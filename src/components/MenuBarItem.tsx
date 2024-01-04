import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface MenuBarItemInterface {
  title: string;
  icon: string;
}

const MenuBarItem: FC<MenuBarItemInterface> = ({title, icon}) => {
  return (
    <View style={styles.menuBarItem}>
      <Icon name={icon} size={30} />
      <Text>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  menuBarItem: {
    alignItems: 'center',
  },
  title: {
    marginTop: 5,
  },
});

export default MenuBarItem;
