import React from "react";

const Profile = () => {
  return (
    <div class="profile">
      <div class="description">
        <img
          src="https://www.pngmart.com/files/11/Hacker-PNG-Image.png"
          alt="User name"
          class="foto"
        />
        <h1 class="name">Boronov Azilet</h1>
        <p class="name">@__boronov </p>
        <h3 class="name">Kyrgyzstan , Jalal-Abad</h3>
      </div>

      <ul class="name2">
        <li class="Views">
          <span class="name2">Followers</span>
          <span class="name2">1000</span>
        </li>
        <li class="Views">
          <span class="name2">Views</span>
          <span class="name2">2000</span>
        </li>
        <li class="Views">
          <span class="name2">Likes</span>
          <span class="name2">3000</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
