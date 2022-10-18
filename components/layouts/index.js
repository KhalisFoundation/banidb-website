import Head from "next/head";
import Navigation from "./navigation";
import Footer from "./footer";
import { useRouter } from "next/router";

function PageTemplate({ children }) {
  const router = useRouter();

  return (
    <>
      <div className="ccontainer-fluid">
        <Navigation />
        {children}
        <Footer />
      </div>
    </>
  );
}

export default PageTemplate;
