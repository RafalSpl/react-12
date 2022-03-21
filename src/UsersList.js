import React from "react";
import {UsersItem} from "./UsersItem";

import './UsersList.css';

export const UsersList = (props) => {
    const url = 'https://raw.githubusercontent.com/pixelastic/fakeusers/master/pictures/'
    const [...usrList] = props.list;
    usrList.sort(function(a, b) {
        if (a.username < b.username) {
            return -1;
        }
        if (a.username > b.username) {
            return 1;
        }
        return 0;
    });
    console.log(usrList)
    return (
        <ul className="list">
            {usrList.map((item) => {
                return <UsersItem
                    key={item.email}
                    firstName={item.first_name}
                    lastName={item.last_name}
                    username={item.username}
                    picture={item.picture}
                />
            })}
        </ul>
    )
}