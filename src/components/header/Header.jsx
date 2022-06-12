import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Discover stories, thinking, and expertise from writers on any topic</span>
        <span className="headerTitleLg">Stay Curious always.</span>
      </div>
      <img
        className="headerImg"
        src="https://images.pexels.com/photos/9150212/pexels-photo-9150212.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
      />
    </div>
  );
}