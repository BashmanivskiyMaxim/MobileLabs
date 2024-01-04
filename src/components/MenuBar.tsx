import React, {FC} from 'react';
import GalleryScreen from './GalleryScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProfileScreen from './ProfileScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import News from './News';

const Tab = createBottomTabNavigator();

interface MenuBarIconInterface {
  iconName: string;
  color: string;
}

const MenuBar: FC = () => {
  const menuItems = [
    {
      title: 'Головна',
      icon: 'home',
      component: News,
      headerTitle: 'Новини',
    },
    {
      title: 'Фотогалерея',
      icon: 'photo',
      component: GalleryScreen,
      headerShown: false,
    },
    {
      title: 'Профіль',
      icon: 'male',
      component: ProfileScreen,
      headerTitle: 'Реєстрація',
    },
  ];
  const renderTabBarIcon = ({iconName, color}: MenuBarIconInterface) => (
    <Icon name={iconName} color={color} size={30} />
  );
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {fontSize: 24, fontWeight: 'bold', marginBottom: 5},
        tabBarStyle: {justifyContent: 'center', alignItems: 'center'},
      }}>
      {menuItems.map((item, index) => (
        <Tab.Screen
          name={item.title}
          key={index}
          component={item.component}
          options={{
            title: item.headerTitle,
            headerTitleAlign: 'center',
            headerTitleStyle: {fontSize: 24},
            tabBarLabel: item.title,
            tabBarLabelStyle: {fontSize: 12, fontWeight: 'bold'},
            headerShown: item.headerShown,
            tabBarIcon: ({color}) =>
              renderTabBarIcon({iconName: item.icon, color: color}),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default MenuBar;
