import { Link } from "react-router-dom";
import { selectAuth } from "../redux/authSlice"; 
import { useSelector } from "react-redux";
const menu = [
  {
    id: 1,
    title: "main",
    listItems: [
      {
        id: 1,
        title: "Histology",
        url: "/histology",
        icon: "home.svg",
      },
      {
        id: 2,
        title: "3DModels",
        url: "/three",
        icon: "user.svg",
      },
      
    ],
  },
  {
    id: 2,
    title: "lists",
    listItems: [
      {
        id: 1,
        title: "Embryology",
        url: "/embryology",
        icon: "user.svg",
      },
      {
        id: 2,
        title: "Gross Anatomy",
        url: "/gross",
        icon: "product.svg",
      },

    ],
  },
  
];


function Menu() {
  const { fullname, current_status} = useSelector(selectAuth);

  const userDetails = localStorage.getItem('userDetails') ? JSON.parse(localStorage.getItem('userDetails')) : null;
  
  return (
    <div className="menu">
      <img className="MenuImage" src={userDetails?.profileImager} alt="Profile" />
      <h4>{userDetails?.fullname}</h4>
      <h5 style={{marginTop:5,color:" #0071c2"}}>{userDetails?.current_status}</h5>
      <div className="button-wrapper">
        <Link to ="/forum">
          <button  className="lButton">
            Forum
          </button>
        </Link>
        <Link to ="/quiz">
          <button  className="lButton">
            Quiz
          </button>
        </Link>
      </div>
      {menu.map((item) => (
        <div className="item" key={item.id}>
          {item.listItems.map((listItem) => (
            <Link to={listItem.url} className="listItem" key={listItem.id}>
              <span className="listItemTitle">{listItem.title}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Menu;
