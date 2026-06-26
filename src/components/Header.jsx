import Search from "./Search";

const logoImg = new URL("../assets/culinarylogo.jpg", import.meta.url);

const Header = () => {
  return (
    <div className="header">
      <div className="sub-header">
        <img className="logo" src={logoImg} alt="Logo"></img>
        <Search />
      </div>
      <ul className="nav-items">
        <li>Cart</li>
        <li>Profile</li>
      </ul>
    </div>
  );
};

export default Header;