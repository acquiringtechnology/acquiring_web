/* eslint-disable @next/next/inline-script-id */
import { useEffect } from "react";
import "@/styles/globals.scss";
import "react-toastify/dist/ReactToastify.css";
import Script from "next/script";
import { ToastContainer, toast } from "react-toastify";
import store from "@/redux/store";
import { Provider } from "react-redux";
import '@/firebase';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
    // require("https://www.googletagmanager.com/gtag/js?id=G-E5KEXCT07F");
    // // const arguments;

    // window.dataLayer = window.dataLayer || [];
    // function gtag() {
    //   dataLayer.push(arguments);
    // }
    // gtag("js", new Date());
    // gtag("config", "G-E5KEXCT07F", {
    //   page_path: window.location.pathname,
    // });
  }, []);

  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-E5KEXCT07F"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-E5KEXCT07F', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script>
      <Provider store={store}>
        <ToastContainer />
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
