import "@/styles/globals.css";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script
        id="fb"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `window.fbAsyncInit = function() {
    FB.init({
      appId      : '613731087296538',
      cookie     : true,
      xfbml      : true,
      version    : 'v16.0'
    });
      
    FB.AppEvents.logPageView();   
      
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) return;
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));`,
        }}
      />
      <Component {...pageProps} />{" "}
    </>
  );
}
