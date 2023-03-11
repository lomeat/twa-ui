import React from "react";
import styled from "styled-components";

import * as S from "./Profile.styles";
import * as T from "./Profile.types";
import { ArrowIcon } from "../../assets/arrow-icon";

/**
 * Profile minification.
 * Example at header to navigate to the profile page
 * or open dropdown menu.
 *
 * Configuration:
 * - name: string
 * - nickname: string
 * - avatarUrl: string (image)
 * - onClick: callback
 * - hotkey: e.key of keyboard (also it calls onClick callback)
 * - className for the custom css styles
 *
 * @returns
 */
export function Profile({
  name,
  nickname,
  avatarUrl,
  className,
  onClick,
  hotkey,
}: T.ProfileProps) {
  const Wrapper = onClick ? S.WrapperClickable : S.Wrapper;

  function handleKeyDown(e: any) {
    if (e.key === hotkey) {
      onClick?.();
    }
  }

  React.useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <Wrapper className={className} onClick={onClick}>
      <S.Container>
        <S.Avatar src={avatarUrl} />
        <S.Names>
          <S.Name>{name}</S.Name>
          <S.Nickname>{nickname}</S.Nickname>
        </S.Names>
      </S.Container>
      <S.ClickableContainer>
        <S.Hotkey>{hotkey?.toUpperCase()}</S.Hotkey>
        {onClick && <ArrowIcon />}
      </S.ClickableContainer>
    </Wrapper>
  );
}
