import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import "./sidebar.css"

export default function Sidebar() {
const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => 
    {
      const res = await axios.get("http://localhost:5000/api/categories");
      setCats(res.data)
    }
    getCats();
  }, [])

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg" 
        alt="Not found"/>
        <p>
            Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
            amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
        <div className="sidebarItem">
            <span className="sidebarTitle">CAREGORIES</span>
            <ul className="sidebarList">
                {cats.map((c) => (
                  <Link to={`/?cat=${c.name}`} className="link">
                    <li className="sidebarListItem">{c.name}</li>
                  </Link>
                ))}
            </ul>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">Follow us</span>
            <div className="sidebarSocial">
                <i className="sidebarIcon fa-brands fa-facebook-square"></i>
                <i className="sidebarIcon fa-brands fa-twitter-square"></i>
                <i className="sidebarIcon fa-brands fa-pinterest-square"></i>
                <i className="sidebarIcon fa-brands fa-instagram-square"></i>
            </div>
        </div>
      </div>
    </div>
  )
}
