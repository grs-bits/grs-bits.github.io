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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus et
          amet atque reiciendis accusantium fugit, recusandae quia quo tempora
          soluta, ut rem maiores voluptatem voluptatibus neque voluptas esse
          deleniti perferendis.
        </p>
        <h4 className="aboutSubhead">Milstones Covered</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis tempore
          incidunt a voluptas libero explicabo at vitae, possimus tenetur dicta,
          neque illo quae enim soluta? A commodi asperiores aliquam velit? Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Vero saepe impedit
          pariatur aliquid voluptas, eius explicabo veniam nihil rem ratione
          porro enim aspernatur nisi eaque corrupti id architecto doloribus et.
        </p>
      </div>
      <Sidebar />
    </div>
  );
};
