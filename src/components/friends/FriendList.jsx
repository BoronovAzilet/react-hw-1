import React from "react";
import "./FriendList.css";

function FriendList({ friends }) {
  return (
    <div>
      <ul class="friend-list">
        {friends.map((item) => (
          <li class="item">
            <span className={item.isOnline ? "green" : "red"}></span>
            <img
              class="avatar"
              src={item.avatar}
              alt="User avatar"
              width="48"
            />
            <p class="name">{item.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FriendList;
