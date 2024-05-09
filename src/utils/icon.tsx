import { WithLocalSvg } from "react-native-svg/css";
import BabbleIconSVG from "../../assets/svg/babble_logo.svg";
import ProfileIconSVG from "../../assets/svg/profile.svg";
import { IconProps } from "./index";
import { Ionicons } from "@expo/vector-icons";

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

const ProfileIcon = ({ height, width, color }: IconProps) => {
  return (
    <WithLocalSvg
      asset={ProfileIconSVG}
      height={height}
      width={width}
      fill={color}
    />
  );
};

const MailIcon = ({ size, color, outline }: IconProps) => {
  return (
    <Ionicons
      name={outline ? "mail-outline" : "mail"}
      size={size}
      color={color}
    />
  );
};
const HomeIcon = ({ size, color, outline }: IconProps) => {
  return (
    <Ionicons
      name={outline ? "home-outline" : "home"}
      size={size}
      color={color}
    />
  );
};
const SearchIcon = ({ size, color, outline }: IconProps) => {
  return (
    <Ionicons
      name={outline ? "search-outline" : "search"}
      size={size}
      color={color}
    />
  );
};
const HeartIcon = ({ size, color, outline }: IconProps) => {
  return (
    <Ionicons
      name={outline ? "heart-outline" : "heart"}
      size={size}
      color={color}
    />
  );
};
const MicIcon = ({ size, color, outline }: IconProps) => {
  return (
    <Ionicons
      name={outline ? "mic-outline" : "mic"}
      size={size}
      color={color}
    />
  );
};

declare var Icon: any;
export default Icon = {
  BabbleIcon,
  ProfileIcon,
  MailIcon,
  HomeIcon,
  SearchIcon,
  HeartIcon,
  MicIcon,
};
