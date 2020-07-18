import React from "react";
import "./menu-category.styles.scss";

const MenuCategory = ({title, imgURL, size}) => (
    <div className={`${size} category`} >
        <div className="background-image" style=
            {{backgroundImage: `url(${imgURL})`}}>
        </div>
        <div className="category-content">
            <h3 className="category-name">{title.toUpperCase()}</h3>
            <span className="subtitle">COMPRAR AHORA</span>
        </div>
</div>
);

export default MenuCategory;