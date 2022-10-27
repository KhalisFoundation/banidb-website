import Head from "next/head";
import Image from "next/image";
import React from "react";

function sikhitothemax() {
  return (
    <>
      <Head>
        <title>SIKHITOTHEMAX - BaniDB.Com</title>
      </Head>
      <div className="container pt-5 px-4">
        <div className="row pt-5">
          <h1 className="text-center">SIKHITOTHEMAX</h1>
          <div className="col-12 offset-md-1 col-md-6 py-2 ">
            <p className="py-2">
              Originally developed by Bhai Tarsem Singh of SHARE charity UK,
              SikhiToTheMax has become a defacto standard for keertan programs
              and Gurdwaras around the world to display Gurbani on screens for
              Sangat to join into the depth of Gurbani and translations.
            </p>
            <p className="py-2">
              SikhiToTheMax is now developed by Khalis Foundation as seva to the
              Panth and is working hard to ensure it lives up to its name.
            </p>
            <span className="d-flex inline-block py-1">
              <p className="fw-bold">
                Website : 
                <a href="http://www.SikhiToTheMax.org">
                  http://www.SikhiToTheMax.org
                </a>
              </p>
            </span>
            <span className="d-flex inline-block py-1">
              <p className="fw-bold">
                Developer : 
                <a href="http://www.khalisfoundation.org/">Khalis Foundation</a>
              </p>
            </span>
            <span className="d-flex  py-1">
              <p>
                <strong>Acknowledgements : </strong> BBhai Tarsem Singh UK, SHARE
                UK, Khalis Foundation, Khalsa Foundation UK, Dr. Sant Singh
                Khalsa, Dr. Kulbir Singh Thind
              </p>
            </span>
          </div>
          <div className="col-12 col-md-3 py-2 ">
            <Image
              src="/assets/SikhiToTheMax.png"
              width={300}
              height={300}
              alt="IGhurbani"
              className="py-2 px-2"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default sikhitothemax;
