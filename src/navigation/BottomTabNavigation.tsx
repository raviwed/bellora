import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import type {BottomTabParamList} from './types';

import HomeScreen from '../homeScreen/HomeScreen';
import ShopScreen from '../shopScreen/ShopScreen';
import WishListScreen from '../wishListScreen/WishListScreen';
import OrderScreen from '../orderScreen/OrderScreen';
import ProfileScreen from '../profileScreen/ProfileScreen';

import HomeIcon from '../../assets/svg/BottomTabNav/HomeIcon';
import OrdersIcon from '../../assets/svg/BottomTabNav/OrdersIcon';
import ProfileIcon from '../../assets/svg/BottomTabNav/ProfileIcon';
import ShopyIcon from '../../assets/svg/BottomTabNav/ShopyIcon';
import WishListIcon from '../../assets/svg/BottomTabNav/WhishListIcon';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Platform } from 'react-native';
import { BelloraColors } from '../../assets/constants/enums';



const Tab = createBottomTabNavigator<BottomTabParamList>();


type TabIconName = keyof BottomTabParamList;

type TabIconProps = {
  name: TabIconName;
  color: string;
  size?: number;
};
const  TAB_BAR_CONTENT_HEIGHT =56;
const TabIcon = ({
  name,
  color,
  size = 20,
}: TabIconProps) => {
  const iconProps = {
    width: size,
    height: size,
    color,
  };

  switch (name) {
    case 'Home':
      return <HomeIcon {...iconProps} />;

    case 'Shop':
      return <ShopyIcon {...iconProps} />;

    case 'WishList':
      return <WishListIcon {...iconProps} />;

    case 'Orders':
      return <OrdersIcon {...iconProps} />;

    case 'Profile':
      return <ProfileIcon {...iconProps} />;
    default:
      return null;
  }
};

const BottomTabNavigation = () => {
    const insets = useSafeAreaInsets();
    const bottomInset = Math.max(insets.bottom, Platform.OS === 'android' ? 10: 0);
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        headerShown: false,

        tabBarIcon: ({color, size}) => (
          <TabIcon
            name={route.name}
            color={color}
            size={size}
          />
        ),

        tabBarActiveTintColor: BelloraColors.primary,
        tabBarInactiveTintColor: BelloraColors.inactive,

        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '500',
          marginTop: 2,

        },

        tabBarStyle: {
          height: TAB_BAR_CONTENT_HEIGHT + bottomInset,
          paddingTop: 7,
          paddingBottom: 6,
          backgroundColor: BelloraColors.background,
          borderTopColor: BelloraColors.border,
          borderTopWidth: 1,
          elevation: 8,
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Shop" component={ShopScreen} />
      <Tab.Screen name="WishList" component={WishListScreen} />
      <Tab.Screen name="Orders" component={OrderScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;