import { useState } from "react";

import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const HomePageList = () => {
  const [listItems, setListItems] = useState([
    {
      title: "Fish",
      type: "Saltwater, Freshwater",
    },
    {
      title: "Dogs",
      type: "Various Breeds",
    },
    {
      title: "Cats",
      type: "Various breeds, exotic varieties",
    },
    {
      title: "Reptiles",
      type: "Lizards, Turtles, Snakes",
    },
    {
      title: "Birds",
      type: "Exotic varieties",
    },
  ]);

  return (
    <div>
      <ListGroup none>
        {listItems.map((item, idx) => {
          return (
            <Link
              key={idx}
              to={"/catalogue/" + item.title}
              className="text-align-left p-0"
            >
              <ListGroup.Item
                key={idx}
                as="li"
                className="d-flex justify-content-between align-items-start border-none"
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold">{item.title}</div>
                  {item.type}
                </div>
              </ListGroup.Item>
            </Link>
          );
        })}
      </ListGroup>
    </div>
  );
};

export default HomePageList;
