import React, { useState, useEffect } from "react";
import axios from "axios";

const InstagramProfile = ({ accessToken }) => {
  const apiUrl = `https://graph.instagram.com/me?fields=id,username,account_type,name,profile_picture_url,followers_count,media_count&access_token=${accessToken}`;
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // Here you can handle the response from the Instagram Basic Display API.
    })
    .catch((error) => {
      console.error(error);
      // Here you can handle any errors that occur during the API request.
    });

  return null;
};

export default InstagramProfile;
