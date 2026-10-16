
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Platform } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import type { BottomTabParamList } from "./types";

import HomeScreen from "../homeScreen/HomeScreen";
import ShopScreen from "../shopScreen/ShopScreen";
import WishListScreen from "../wishListScreen/WishListScreen";
import OrderScreen from "../orderScreen/OrderScreen";
import ProfileScreen from "../profileScreen/ProfileScreen";

import HomeIcon from "../../assets/svg/BottomTabNav/HomeIcon";
import OrdersIcon from "../../assets/svg/BottomTabNav/OrdersIcon";
import ProfileIcon from "../../assets/svg/BottomTabNav/ProfileIcon";
import ShopyIcon from "../../assets/svg/BottomTabNav/ShopyIcon";
import WishListIcon from "../../assets/svg/BottomTabNav/WhishListIcon";

import { BelloraColors } from "../../assets/constants/enums";

const Tab = createBottomTabNavigator<BottomTabParamList>();

const TAB_BAR_CONTENT_HEIGHT = 56;

type TabIconName = keyof BottomTabParamList;

type TabIconProps = {
  name: TabIconName;
  color: string;
  size?: number;
};

const TAB_CONFIG = [
  { name: "Home", component: HomeScreen },
  { name: "Shop", component: ShopScreen },
  { name: "WishList", component: WishListScreen },
  { name: "Orders", component: OrderScreen },
  { name: "Profile", component: ProfileScreen },
] satisfies {
  name: TabIconName;
  component: React.ComponentType;
}[];

const TAB_ICONS = {
  Home: HomeIcon,
  Shop: ShopyIcon,
  WishList: WishListIcon,
  Orders: OrdersIcon,
  Profile: ProfileIcon,
} satisfies Record<
  TabIconName,
  React.ComponentType<{
    width?: number;
    height?: number;
    color?: string;
  }>
>;

const TabIcon = ({
  name,
  color,
  size = 20,
}: TabIconProps) => {
  const Icon = TAB_ICONS[name];

  return <Icon width={size} height={size} color={color} />;
};

const BottomTabNavigation = () => {
  const insets = useSafeAreaInsets();

  const bottomInset = Math.max(
    insets.bottom,
    Platform.OS === "android" ? 10 : 0,
  );

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarIcon: ({ color, size }) => (
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
          fontWeight: "500",
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
      {TAB_CONFIG.map(({ name, component }) => (
        <Tab.Screen
          key={name}
          name={name}
          component={component}
        />
      ))}
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
