"use client";

import { useCallback, useState } from "react";
import * as S from "./styles";
import C from "@/constants";

export default () => {
  const [open, setOpen] = useState(false);
  const { navigation } = C.data;

  const handleClick = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  return (
    <>
      <S.Header>
        <S.Wrapper>
          <S.Logo />

          <S.ListDesktop>
            {navigation.items.map(({ title, href }) => (
              <S.Item key={title} href={href}>
                {title}
              </S.Item>
            ))}
          </S.ListDesktop>

          <S.CtaButton {...C.cta} />

          <S.Button onClick={handleClick}>
            <S.MenuLine />
            <S.MenuLine />
            <S.MenuLine />
          </S.Button>
        </S.Wrapper>
      </S.Header>

      <S.Overlay $open={open}>
        <S.Modal>
          <S.WrapperFooter>
            <S.HeaderModal>
              <S.TextModal>{C.data.navigation.menu}</S.TextModal>
              <S.Close onClick={handleClick} />
            </S.HeaderModal>
            <S.Container>
              <S.List>
                {navigation.items.map(({ title, href }, index) => (
                  <S.Item key={index} href={href}>
                    {title}
                  </S.Item>
                ))}
              </S.List>
            </S.Container>
            <S.Line />
            <S.Footer>
              <S.TextFooter>
                Fale conosco
                <br />
                agora mesmo!
              </S.TextFooter>
              <S.CtaButtonFooter {...C.cta} />
            </S.Footer>
          </S.WrapperFooter>
        </S.Modal>
        <S.Black onClick={handleClick} />
      </S.Overlay>
    </>
  );
};
