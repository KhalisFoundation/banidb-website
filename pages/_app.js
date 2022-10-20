import "../styles/styles.scss";
import Layout from "../components/layouts";
import { useEffect } from "react";
import "animate.css";
function MyApp({ Component, pageProps }) {
  //   useEffect(()=>{
  //     import("bootstrapp");
  // },[])
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
export default MyApp;
