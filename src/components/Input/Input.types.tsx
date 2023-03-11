export type InputProps<T> = {
  value: T | T[];
  onChange: (e: React.InputHTMLAttributes<T>) => void;
  placeholder?: string;
  type?: InputType;
  isDisable?: boolean;
};

export type InputType = "input" | "textarea" | "double-input";
