import Sidebar from "../../components/sidebar/Sidebar";
import "./about.css";

export const About = () => {
  return (
    <div className="about">
      <div className="aboutWrapper">
        <h1 className="fontAbout">Our Story</h1>
        <img
          className="aboutImg"
          src="https://www.bkacontent.com/wp-content/uploads/2020/06/about-us.jpg"
          alt=""
        />
        <br />
        <h4 className="aboutSubhead">How it started</h4>
        <p>
         this is grs website
        </p>
        <h4 className="aboutSubhead">Milstones Covered</h4>
        <p>
          congratulations the website is ready, yeahfdfdf
        </p>
      </div>
      <Sidebar />
    </div>
  );
};
