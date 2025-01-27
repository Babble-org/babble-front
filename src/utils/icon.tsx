import { WithLocalSvg } from "react-native-svg/css";
import BabbleIconSVG from "../../assets/svg/babble_logo.svg";
import ProfileIconSVG from "../../assets/svg/profile.svg";
import BabbleTextSVG from "../../assets/svg/babble_text.svg";
import { IconProps } from "./index";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

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
const PlusIcon = ({ size, color, outline }: IconProps) => {
  return (
    <Ionicons
      name={outline ? "add-outline" : "add"}
      size={size}
      color={color}
    />
  );
};
const MenuIcon = ({ size, color, outline }: IconProps) => {
  return (
    <Ionicons
      name={outline ? "menu-outline" : "menu"}
      size={size}
      color={color}
    />
  );
};
const SendIcon = ({ size, color }: IconProps) => {
  return <Feather name={"send"} size={size} color={color} />;
};
const TrashIcon = ({ size, color }: IconProps) => {
  return <Feather name={"trash-2"} size={size} color={color} />;
};
const RepeatIcon2 = ({ size, color }: IconProps) => {
  return <Feather name={"repeat"} size={size} color={color} />;
};
const PlayIcon = ({ size, color }: IconProps) => {
  return <FontAwesome6 name={"play"} size={size} color={color} />;
};
const DownIcon = ({ size, color }: IconProps) => {
  return <Ionicons name={"chevron-down"} size={size} color={color} />;
};
const UpIcon = ({ size, color }: IconProps) => {
  return <Ionicons name={"chevron-up"} size={size} color={color} />;
};
const BackIcon = ({ size, color }: IconProps) => {
  return <Ionicons name={"chevron-back"} size={size} color={color} />;
};
const NotInterestedIcon = ({ size, color }: IconProps) => {
  return <MaterialCommunityIcons name={"eye-off"} size={size} color={color} />;
};
const ReportIcon = ({ size, color }: IconProps) => {
  return <Feather name={"alert-circle"} size={size} color={color} />;
};
const PhotoIcon = ({ size, color }: IconProps) => {
  return <Ionicons name={"image"} size={size} color={color} />;
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
  PlusIcon,
  MenuIcon,
  SendIcon,
  TrashIcon,
  RepeatIcon2,
  PlayIcon,
  DownIcon,
  UpIcon,
  BackIcon,
  NotInterestedIcon,
  ReportIcon,
  PhotoIcon,
};
