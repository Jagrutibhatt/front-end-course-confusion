import React, { useState } from "react";
import { Media } from "reactstrap";

const MenuComponentFunction = (props) => {
  let menu = props.dishes;
  let [dishes, setDishes] = useState(menu);

  return (
    <>
      <div className="container">
        <div className="row">
          {" "}
          {dishes.map((dish) => (
            <Media key={dish.id}>
              <p>{dish.name}</p>
              <p>{dish.description}</p>
            </Media>
          ))}
        </div>
      </div>
    </>
  );
};

export default MenuComponentFunction;
