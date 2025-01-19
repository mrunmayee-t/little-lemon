import footerImg from "../assets/images/small_logo.png";

const Footer = () => {
  return (
    <footer>
      {/* <div className="footer-div"> */}
      <img className="footer-img" src={footerImg} alt="footer" />
      <div className="footer-container">
        <ul className="footer-ul">
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/menu">Menu</a>
          </li>
          <li>
            <a href="/reservations">Reservastions</a>
          </li>
          <li>
            <a href="/order-online">Order Online</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
        </ul>
        <div>
          <p
            style={{
              color: "black",
              fontWeight: 700,
              textAlign: "center",
              color: "#495e57",
            }}
          >
            Contact
          </p>
          <ul className="footer-ul">
            <li>Adress</li>
            <li>Phone Number</li>
            <li>Email</li>
          </ul>
        </div>
        <div>
          <p
            style={{
              color: "black",
              fontWeight: 700,
              marginLeft: "2.5rem",
              color: "#495e57",
            }}
          >
            Social Media Links
          </p>
          <ul className="footer-ul">
            <li>Adress</li>
            <li>Phone Number</li>
            <li>Email</li>
          </ul>
        </div>
      </div>
      {/* </div> */}
    </footer>
  );
};

export default Footer;
