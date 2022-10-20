import "../styles/styles.scss";
import Layout from "../components/layouts";
import { useEffect } from "react";
import "animate.css";
function MyApp({ Component, pageProps }) {
  useEffect(()=>{
    import("bootstrap/dist/js/bootstrap");
},[])
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
export default MyApp;
