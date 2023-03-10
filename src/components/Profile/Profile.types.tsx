export type ProfileProps = {
  name: string;
  nickname: string;
  avatarUrl?: string;
  className?: string;
  isArrow?: boolean;
  onClick?: (value?: unknown) => void;
};
