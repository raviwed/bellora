import Svg, { Circle, Path } from "react-native-svg";
import { COLORS } from "../../src/singleProductPage/styles";

type IconProps = { color?: string; size?: number }

const Icon = ({ size = 20, children }: { size?: number; children: React.ReactNode }) => (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        {children}
    </Svg>
)

export const BackIcon = ({ color = COLORS.title, size }: IconProps) => (
    <Icon size={size}>
        <Path d="M19 12H5M11 6l-6 6 6 6" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </Icon>
)

export const SearchIcon = ({ color = COLORS.title, size }: IconProps) => (
    <Icon size={size}>
        <Circle cx="11" cy="11" r="7" stroke={color} strokeWidth="1.8" />
        <Path d="M20 20l-4-4" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    </Icon>
)

export const HeartIcon = ({ color = COLORS.title, size }: IconProps) => (
    <Icon size={size}>
        <Path
            d="M12 20s-7-4.5-7-10a4 4 0 017-2.6A4 4 0 0119 10c0 5.5-7 10-7 10z"
            stroke={color}
            strokeWidth="1.8"
            strokeLinejoin="round"
        />
    </Icon>
)

export const LeafIcon = ({ color = COLORS.title, size }: IconProps) => (
    <Icon size={size}>
        <Path d="M5 19c0-8 5-13 14-14 0 9-5 14-13 14" stroke={color} strokeWidth="1.8" strokeLinejoin="round" />
        <Path d="M5 19c3-4 6-6 9-8" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    </Icon>
)

export const ShieldIcon = ({ color = COLORS.title, size }: IconProps) => (
    <Icon size={size}>
        <Path d="M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6l7-3z" stroke={color} strokeWidth="1.8" strokeLinejoin="round" />
    </Icon>
)

export const CheckCircleIcon = ({ color = COLORS.title, size }: IconProps) => (
    <Icon size={size}>
        <Circle cx="12" cy="12" r="9" stroke={color} strokeWidth="1.8" />
        <Path d="M8 12.5l3 3 5-6" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </Icon>
)

export const StarIcon = () => (
    <Svg width={13} height={13} viewBox="0 0 24 24">
        <Path
            d="M12 2l3 6.6 7.2.8-5.4 4.8 1.5 7.1L12 17.7 5.7 21.3l1.5-7.1L1.8 9.4 9 8.6 12 2z"
            fill={COLORS.star}
        />
    </Svg>
)

export const MinusIcon = () => (
    <Svg width={14} height={14} viewBox="0 0 24 24" fill="none">
        <Path d="M5 12h14" stroke={COLORS.title} strokeWidth="2" strokeLinecap="round" />
    </Svg>
)

export const PlusIcon = () => (
    <Svg width={14} height={14} viewBox="0 0 24 24" fill="none">
        <Path d="M12 5v14M5 12h14" stroke={COLORS.title} strokeWidth="2" strokeLinecap="round" />
    </Svg>
)
