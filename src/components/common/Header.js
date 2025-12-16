import Gnb from "./Gnb"
import logoImg from '../../assets/images/logo.png'
import { MdShoppingCartCheckout } from "react-icons/md"
import "./Header.scss"

const Header = () => {
  return (
    <header>
      <div className="header-top">
        <img src={logoImg} alt="luckydori 로고 이미지" />
        <MdShoppingCartCheckout className="cart-icon"/>
      </div>
      <Gnb />
    </header>
  )
}

export default Header