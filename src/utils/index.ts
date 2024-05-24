import { Dispatch, SetStateAction } from "react";

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
  mainLogoOnPress: () => void | undefined;
  postOnPress: () => void | undefined;
  menuOnPress: () => void | undefined;
}
export interface IconProps {
  height?: number;
  width?: number;
  size?: number;
  color?: string;
  outline?: boolean;
}
export interface NestedCommentProps {
  id: string;
  nick_name: string;
  content: string;
  inserted_at: string;
  img: string[];
}
export interface CommentProps {
  id: string;
  nick_name: string;
  content: string;
  inserted_at: string;
  img: string[];
  n_comment: NestedCommentProps[];
}
export interface BabbProps {
  id?: string;
  nick_name: string;
  content: string;
  inserted_at: string;
  img?: string[] | undefined;
  comment?: CommentProps[];
}

export interface DetailImageProps {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
  img: string;
}

export interface MenuProps {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
}
