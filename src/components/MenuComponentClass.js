import React, { Component } from "react";
import { Media } from "reactstrap";

class MenuComponentClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: [
        {
          id: 0,
          name: "Uthappizza",
          image:
            "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
          category: "mains",
          label: "Hot",
          price: "4.99",
          description:
            "A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.",
        },
        {
          id: 1,
          name: "Zucchipakoda",
          image:
            "https://media.istockphoto.com/id/1424925019/photo/corn-pakoda.jpg?s=612x612&w=is&k=20&c=H39xd2vVw_CoMgOv5gb0W-yznPqvBWMDtmKBJIQrYa4=",
          category: "appetizer",
          label: "",
          price: "1.99",
          description:
            "Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce",
        },
        {
          id: 2,
          name: "Vadonut",
          image:
            "https://media.istockphoto.com/id/1468246024/photo/mini-cruller-doughnuts.jpg?s=612x612&w=is&k=20&c=0O-lOaThvsZm7f-n69dnN-rtg4KjTtIVyH7VbKk480U=",
          category: "appetizer",
          label: "New",
          price: "1.99",
          description:
            "A quintessential ConFusion experience, is it a vada or is it a donut?",
        },
        {
          id: 3,
          name: "ElaiCheese Cake",
          image:
            "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80",
          category: "dessert",
          label: "",
          price: "2.99",
          description:
            "A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms",
        },
      ],
    };
  }

  render() {
    let menu = this.state.dishes.map((dish) => {
      return (
        <div key={dish.id} className="col-12 mt-5">
          <Media tag="li" className="list-unstyled">
            <Media left middle>
              <Media
                object
                src={dish.image}
                alt={dish.name}
                style={{ height: "200px", width: "auto" }}
              />
            </Media>
            <Media body className="ml-5">
              <Media heading>{dish.name}</Media>
              <p>{dish.description}</p>
            </Media>
          </Media>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">
          <Media list> {menu}</Media>
        </div>
      </div>
    );
  }
}

export default MenuComponentClass;
