import logo from "../assets/img/Logo.png";
import navIcon from "../assets/icon/navIcon.png";
import "../styles/components/header.css";

const Header = () => {
  return (
    <div className="Header">
      <div>
        <a href="/">
          <img src={logo} alt="Colog Icon" />
        </a>
      </div>
      <div>
        <img src={navIcon} alt="Colog Icon" />
      </div>
    </div>
  );
};

export default Header;
