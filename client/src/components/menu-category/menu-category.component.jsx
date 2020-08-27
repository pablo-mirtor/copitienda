import React from "react";
import "./menu-category.styles.scss";
import {withRouter} from 'react-router-dom';

const MenuCategory = ({title, imgURL, size, history, match, linkUrl}) => (
    <div className={`${size} category`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div className="background-image" style=
            {{backgroundImage: `url(${imgURL})`}}>
        </div>
        <div className="category-content">
            <h3 className="category-name">{title.toUpperCase()}</h3>
            <span className="subtitle">COMPRAR AHORA</span>
        </div>
</div>
);

export default withRouter(MenuCategory);