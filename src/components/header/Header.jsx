
import "./header.css"

export default function Header() {
  return (
    <div className="header">
        <div className="headerTitle">
            <span className="headerTitleSm">React & Node</span>
            <span className="headerTitleLg">Blog</span>
        </div>
        <img 
          className="headerImg"
          src="./Assets/mern.jpg"
          alt="Not found"
        />
    </div>
  )
}
