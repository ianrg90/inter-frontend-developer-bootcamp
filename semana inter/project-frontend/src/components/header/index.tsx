import useAuth from "../../hooks/useAuth";
import { HeaderContainer, HeaderWrapper, UserInfo } from "./styles";

import UserCircle from "../userCircle";
import logoInter from "../../assets/images/Inter-orange.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const {user} = useAuth()

  const initials = user.firstName.substring(0,1)+user.lastName.substring(0,1)

  const handleLogoff = () => {
    navigate("/");
  };
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <img src={logoInter} width={172} height={61} alt="logo inter" />
        <UserInfo>
          <UserCircle initials={initials} />
          <div>
            <p>
              Olá, <span className="primary-color font-bold">{user.firstName} {user.lastName}</span>
            </p>
            <strong>{user.accountNumber}{user.digit}</strong>
            <br />
            <a href="#" onClick={handleLogoff}>
              Sair
            </a>
          </div>
        </UserInfo>
      </HeaderWrapper>
    </HeaderContainer>
  );
};

export default Header;
