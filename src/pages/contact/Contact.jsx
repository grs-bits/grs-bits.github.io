import "./contact.css";
import Sidebar from "../../components/sidebar/Sidebar";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contactWrapper">
        <h1 className="fontContact">We'd love to hear from you</h1>

        <img
          className="card-img-top"
          src="https://www.univ-smb.fr/scem/wp-content/uploads/sites/82/2022/03/contact.jpg"
          alt=""
        />
        <div className="card-body">
          <center>
            <h5 className="card-title">Any Queries?</h5>
            <p className="card-text">
              <b>Email Us:</b> abcd@xyz.com
            </p>
            <h5 className="card-title">Call Us At</h5>
            <p className="card-text">
              <b>Call:</b> +81-1234567892
            </p>
            <h5 className="card-title">Connect to Us</h5>
            <p>Building No. 21, Mahaveer Nagar II<br/>
            Opposite Arora Encave, U.P(281122)</p>
          </center>
        </div>
      </div>
      <Sidebar />
    </div>
  );
};

export default Contact;
