import { ComponentType } from "react";

export type ButtonProps = {
  isDisable?: boolean;
  onClick: (value?: unknown) => void;
  children: React.ReactNode;
  align?: ButtonAlign;
  icon?: React.ReactNode;
  iconAlign?: IconAlign;
  className?: string;
};

export type ButtonAlign = "left" | "right" | "center";
export type IconAlign = "left" | "right";
