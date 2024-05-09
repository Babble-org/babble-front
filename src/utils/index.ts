export interface Insets {
  bottom: number;
  top: number;
  left: number;
  right: number;
}
export interface InsetsContextInterface {
  insets: Insets;
  setInsets: (insets: Insets) => void;
}
export interface MainHeaderProps {
  mainLogoOnPress: void;
  profileOnPress: void;
}
export interface IconProps {
  height?: number;
  width?: number;
  size?: number;
  color?: string;
  outline?: boolean;
}
