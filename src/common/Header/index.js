import { TitleHeader, HeaderContainer } from "./styled";

const Header = ({ title }) => (
  <HeaderContainer>
    <TitleHeader>{title}</TitleHeader>
  </HeaderContainer>
);

export default Header;