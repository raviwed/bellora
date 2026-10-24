import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
  TouchableOpacityProps,
} from 'react-native';
import { BelloraColors } from '../assets/constants/enums';

type CommonButtonProps = {
  title: string;
  onPress: () => void;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  activeOpacity?: number;
} & Omit<
  TouchableOpacityProps,
  'style' | 'onPress' | 'activeOpacity'
>;

const CommonButton: React.FC<CommonButtonProps> = ({
  title,
  onPress,
  buttonStyle,
  textStyle,
  activeOpacity = 0.8,
  ...touchableProps
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, buttonStyle]}
      onPress={onPress}
      activeOpacity={activeOpacity}
      {...touchableProps}>
      <Text style={[styles.buttonText, textStyle]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 52,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: BelloraColors.cocoa,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: BelloraColors.white,
  },
});

export default CommonButton;