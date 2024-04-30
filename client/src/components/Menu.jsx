import { Link } from "react-router-dom";
const menu = [
  {
    id: 1,
    title: "main",
    listItems: [
      {
        id: 1,
        title: "Histology",
        url: "/",
        icon: "home.svg",
      },
      {
        id: 2,
        title: "3DModels",
        url: "/users/1",
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
        url: "/users",
        icon: "user.svg",
      },
      {
        id: 2,
        title: "Gross Anatomy",
        url: "/products",
        icon: "product.svg",
      },

    ],
  },
];






function Menu() {
  return (
    <div className="menu">
          <img
          className="MenuImage"
          src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D"
          alt=""
        />
        <h4>Adam Smith</h4>
        <h5>2nd year medical student</h5>
        <div className="button-wrapper">
        <button  className="lButton">
            Forum
          </button>
          <button  className="lButton">
            Courses
          </button>
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

export default Menu