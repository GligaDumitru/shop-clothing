import React, { Component } from "react";
import MenuItem from "../menu-item/menu-item.component";
export default class Directory extends Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "HATS",
          imageUrl: "https://source.unsplash.com/1600x900/?nature",
          id: 1
        },
        {
          title: "HATS2",
          imageUrl: "https://source.unsplash.com/1600x900/?car",
          id: 2
        },
        {
          title: "HATS3",
          imageUrl: "https://source.unsplash.com/1600x900/?water",
          id: 3
        },
        {
          title: "HATS24",
          imageUrl: "https://source.unsplash.com/1600x900/?wild",
          id: 4
        },
        {
          title: "HATS25",
          imageUrl: "https://source.unsplash.com/1600x900/?sun",
          id: 5
        }
      ]
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(section => {
          return <MenuItem key={section.id} section={section} />;
        })}
      </div>
    );
  }
}
