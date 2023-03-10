export type ProfileProps = {
  name: string;
  nickname: string;
  avatarUrl?: string;
  className?: string;
  onClick?: (value?: unknown) => void;
};
