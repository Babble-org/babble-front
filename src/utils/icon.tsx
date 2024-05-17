import { WithLocalSvg } from "react-native-svg/css";
import BabbleIconSVG from "../../assets/svg/babble_logo.svg";
import ProfileIconSVG from "../../assets/svg/profile.svg";
import BabbleTextSVG from "../../assets/svg/babble_text.svg";
import { IconProps } from "./index";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

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
const BabbleText = ({ height, width, color }: IconProps) => {
  return (
    <WithLocalSvg
      asset={BabbleTextSVG}
      height={height}
      width={width}
      fill={color}
    />
  );
};
const ChatBoxIcon = ({ size, color, outline }: IconProps) => {
  return (
    <Ionicons
      name={outline ? "chatbox-outline" : "chatbox"}
      size={size}
      color={color}
    />
  );
};
const RepeatIcon = ({ size, color, outline }: IconProps) => {
  return (
    <Ionicons
      name={outline ? "repeat-outline" : "repeat"}
      size={size}
      color={color}
    />
  );
};
const BookmarkIcon = ({ size, color, outline }: IconProps) => {
  return (
    <Ionicons
      name={outline ? "bookmark-outline" : "bookmark"}
      size={size}
      color={color}
    />
  );
};
const ShareIcon = ({ size, color, outline }: IconProps) => {
  return (
    <Ionicons
      name={outline ? "share-outline" : "share"}
      size={size}
      color={color}
    />
  );
};
const MoreIcon = ({ size, color }: IconProps) => {
  return <Feather name="more-horizontal" size={size} color={color} />;
};
const SettingIcon = ({ size, color, outline }: IconProps) => {
  return (
    <Ionicons
      name={outline ? "settings-outline" : "settings"}
      size={size}
      color={color}
    />
  );
};

declare var Icon: any;
export default Icon = {
  BabbleIcon,
  BabbleText,
  ProfileIcon,
  MailIcon,
  HomeIcon,
  SearchIcon,
  HeartIcon,
  MicIcon,
  ChatBoxIcon,
  RepeatIcon,
  BookmarkIcon,
  ShareIcon,
  MoreIcon,
  SettingIcon,
};
