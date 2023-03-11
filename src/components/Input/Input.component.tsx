import React from "react";

import * as S from "./Input.styles";
import * as T from "./Input.types";

function getInput(type?: T.InputType) {
  switch (type) {
    case "input":
      return S.Input;
    case "textarea":
      return S.Textarea;
    default:
      return S.Input;
  }
}

/**
 * Input and Textarea.
 *
 * value - standart input value (string)
 * onChange - standart onchange (callback)
 * placeholder (string)
 * type - type of container ('input' / 'textarea')
 * isDisable - disabled (boolean)
 *
 * @returns - Wrapped result-input of chosen type
 */
export function Input<T>({
  value,
  onChange,
  placeholder,
  type,
  isDisable,
}: T.InputProps<T>) {
  const Result: any = getInput(type);

  return (
    <S.Wrapper>
      <Result
        placeholder={placeholder}
        value={value as string | number | string[]}
        onChange={onChange}
        isDisable={isDisable}
        disabled={isDisable}
      />
    </S.Wrapper>
  );
}
