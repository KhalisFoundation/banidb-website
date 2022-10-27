import Head from "next/head";
import Image from "next/image";
import React from "react";

function igurbani() {
  return (
    <>
      <Head>
        <title>IGHURBANI - BaniDB.Com</title>
      </Head>
      <div className="container pt-5 px-4">
        <div className="row pt-5">
          <h1 className="text-center">IGURBANI</h1>
          <div className="col-12 offset-md-1 col-md-6 py-2 ">
            <p className="py-2">
              A humble effort by the Akal Design team to bring the hard work of
              Baba Darshan Singh (Mallehwal) into a Gurbani Search app. At the
              heart of the implementation is a focus on the correct places to do
              a vishraam denoted with colors. This innovative approach helps you
              to read Gurbani with the correct pauses.
            </p>
            <span className="d-flex inline-block py-1">
              <p className="fw-bold">
                Website :
                <a href="http://www.igurbani.com">http://www.igurbani.com</a>
              </p>
            </span>
            <span className="d-flex inline-block py-1">
              <p className="fw-bold">
                Developer : Akal Design
                <a href="http://www.igurbani.com">http://www.akaldesign.com</a>
              </p>
            </span>
            <span className="d-flex  py-1">
              <p>
                <strong>Acknowledgements :</strong> Baba Darshan Singh Ji
                (Mallehwal) and SearchGurbani.com
              </p>
            </span>
          </div>
          <div className="col-12 col-md-3 py-2 ">
            <Image
              src="/assets/igurbani.png"              alt="IGhurbani"

              width={300}
              height={300}
             
              className="py-2 px-2"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default igurbani;
