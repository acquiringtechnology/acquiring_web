import { useEffect } from "react";
import "@/styles/globals.scss";
import 'react-toastify/dist/ReactToastify.css';
import Script from "next/script";
import { ToastContainer, toast } from 'react-toastify';
import store from '@/redux/store';
import { Provider } from 'react-redux';
export default function App({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
 
      <Provider store={store}>
        <ToastContainer/>
      <Component {...pageProps} />
      </Provider>
     
  );
}
