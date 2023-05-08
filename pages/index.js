import Image from "next/image";
import { Inter } from "next/font/google";
import InstagramProfile from "@/components/InstagramProfile";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [accessToken, setAccessToken] = useState();

  const handleFacebookLogin = () => {
    window.FB.login(
      (response) => {
        if (response.authResponse) {
          setLoggedIn(true);
          setAccessToken(response.authResponse.accessToken);
          // Here you can handle the response from Facebook and
          // authenticate the user in your application.
        } else {
          console.log("User cancelled login or did not fully authorize.");
        }
      },
      { scope: "public_profile,email" }
    );
  };

  return (
    <div>
      {loggedIn ? (
        <>
          <p>You are logged in with Facebook!</p>
          <InstagramProfile accessToken={accessToken} />
        </>
      ) : (
        <button onClick={handleFacebookLogin}>Log in with Facebook</button>
      )}
    </div>
  );
}
