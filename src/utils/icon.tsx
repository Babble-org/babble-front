import { WithLocalSvg } from "react-native-svg/css";
import BabbleIconSVG from "../../assets/svg/babble_logo.svg";

interface IconProps {
  height?: number;
  width?: number;
  size?: number;
  color?: string;
}

const BabbleIcon = ({ height, width, color }: IconProps) => {
  return (
    <WithLocalSvg
      asset={BabbleIconSVG}
      height={height}
      width={width}
      fill={color}
    />
  );
};

declare var Icon: any;
export default Icon = {
  BabbleIcon,
};
