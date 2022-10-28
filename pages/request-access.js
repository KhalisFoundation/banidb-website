import React from "react";
import Head from "next/head";

const SignupForm = () => {
 
   
  return (
    <div>
      <Head>
        <title> Become A Member -- BANIDB.com</title>
      </Head>
      <div className="container px-4 py-5 ">
        <div className="container row pt-5">
          <h1 className="fs-3 py-3 text-center">BECOME A PARTNER</h1>
          <div className="row ">
          <iframe
          id="JotFormIFrame-222998906965074"
          title="Contact us"
          onload="window.parent.scrollTo(0,0)"
          allowTransparency="true"
          allowFullScreen="true"
          allow="geolocation; microphone; camera"
          src="https://form.jotform.com/223000615896049"
          frameBorder="0"
          style={{
            minWidth: "100%",
            height: "900px",
            border: "none",
          }}
          scrolling="on"
        ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;