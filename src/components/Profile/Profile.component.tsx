import React from "react";
import styled from "styled-components";

import * as S from "./Profile.styles";
import * as T from "./Profile.types";

export function Profile({
  name,
  nickname,
  avatarUrl,
  className,
}: T.ProfileProps) {
  return (
    <S.Wrapper className={className}>
      <S.Avatar src={avatarUrl} />
      <S.Names>
        <S.Name>{name}</S.Name>
        <S.Nickname>{nickname}</S.Nickname>
      </S.Names>
    </S.Wrapper>
  );
}
