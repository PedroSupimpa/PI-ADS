import {
  BrandLogo,
  CopyrigthText,
  FooterBottom,
  FooterContainer,
  LinkOptions,
  LinksTerms,
} from "./styles";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterBottom>
          <BrandLogo />
          <CopyrigthText>
            {`© Copyright 2023 - All Ondemand - Todos os direitos reservados All Ondemand com Agência de Restaurantes Online S.A.

CNPJ 00.000.000/0000-00 /  Taguatinga, Brasilia/DF - CEP 00.000-000`}
          </CopyrigthText>
          <LinksTerms>
            <LinkOptions>{"Termos e condições de uso"}</LinkOptions>
            <LinkOptions>{"Código de conduta"}</LinkOptions>
            <LinkOptions>{"Privacidade"}</LinkOptions>
            <LinkOptions>{"Dicas de segurança"}</LinkOptions>
          </LinksTerms>
        </FooterBottom>
      </FooterContainer>
    </>
  );
};

export default Footer;
