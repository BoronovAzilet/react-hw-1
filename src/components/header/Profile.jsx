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
        <li>
          <span class="name">Followers</span>
          <span class="name">1000</span>
        </li>
        <li>
          <span class="name">Views</span>
          <span class="name">2000</span>
        </li>
        <li>
          <span class="name">Likes</span>
          <span class="name">3000</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
