import Svg, { Circle, Path } from "react-native-svg";
import { BelloraColors } from "../constants/enums";

type IconProps = { color?: string; size?: number }

export const CheckIcon = ({ color = BelloraColors.white, size = 12 }: IconProps) => (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <Path d="M5 12.5l4.5 4.5L19 7.5" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
)

export const MapPinIcon = ({ color = "rgba(201, 76, 46, 1)", size = 34 }: IconProps) => (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <Path d="M12 2a7.5 7.5 0 00-7.5 7.5C4.5 15 12 22 12 22s7.5-7 7.5-12.5A7.5 7.5 0 0012 2z" fill={color} />
        <Circle cx="12" cy="9.5" r="2.8" fill={BelloraColors.white} />
    </Svg>
)
