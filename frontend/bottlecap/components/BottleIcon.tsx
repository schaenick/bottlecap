import Svg, { Path } from "react-native-svg"
import { SvgXml } from 'react-native-svg'
import BottleIcon from 'frontend\bottlecap\assets\BottleIcon.svg';

interface BottleIconProps {
    color: string
}

export default function BottleIcon({ color }: BottleIconProps) {
    return (
        <Svg width={60} height={100} viewBox="0 0 100 100">
            <Path
                d="M 35,0 L 65,0 L 65,12 C 78,15 85,22 85,35 L 85,88 C 85,95 78,100 70,100 L 30,100 C 22,100 15,95 15,88 L 15,35 C 15,22 22,15 35,12 Z"
                fill={color}
            />
        </Svg>
    )

}
