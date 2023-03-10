import React from "react";
import styled from "styled-components";

import * as S from "./Profile.styles";
import * as T from "./Profile.types";
import { ArrowIcon } from "../../assets/arrow-icon";

export function Profile({
  name,
  nickname,
  avatarUrl,
  className,
  onClick,
}: T.ProfileProps) {
  const Wrapper = onClick ? S.WrapperClickable : S.Wrapper;

  return (
    <Wrapper className={className} onClick={onClick}>
      <S.Container>
        <S.Avatar src={avatarUrl} />
        <S.Names>
          <S.Name>{name}</S.Name>
          <S.Nickname>{nickname}</S.Nickname>
        </S.Names>
      </S.Container>
      {onClick && <ArrowIcon />}
    </Wrapper>
  );
}
