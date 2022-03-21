import React from "react";

import './UserItem.css';

export const UsersItem = (props) => {

    return (
        <li className="list__item">
            <img className="list__item-img" src={`https://raw.githubusercontent.com/pixelastic/fakeusers/master/pictures/${props.picture}`} />
            <p className="list__item-name list__item-name-username">{props.username}</p>
            <p className="list__item-name">{props.firstName}</p>
            <p className="list__item-name">{props.lastName}</p>
        </li>
    )
}