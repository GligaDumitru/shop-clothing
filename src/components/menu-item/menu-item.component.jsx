import React from "react";
import "./menu-item.styles.scss";
export default function MenuItem(props) {
  return (
    <div className="menu-item">
      <div
        className="containerForMenuItem"
        style={{
          backgroundImage: `url(${props.section.imageUrl})`
        }}
        >
        <div className="content">
          <h1 className="title">{props.section.title}</h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>
    </div>

  );
}
