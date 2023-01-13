import env from "../config"

const Header = () => {
    return (
      <header className="flex justify-between">
        <img src={env.LOGO_URL} alt="Food Villa Logo" className="logo" />
        <ul className="flex" style={{ fontFamily: "Segoe UI", fontSize: "14px" }}>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </header>
    );
}

export default Header