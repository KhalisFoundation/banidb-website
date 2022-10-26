import Head from "next/head";
import Image from "next/image";
import React from "react";

function khalisFoundation() {
  return (
    <>
      <Head>
        <title>LEARN SHUDH GURBANI - BaniDB.Com</title>
      </Head>
      <div className="container pt-5 px-4">
        <div className="row pt-5">
          <h1 className="text-center">LEARN SHUDH GURBANI</h1>
          <div className="col-12 offset-md-1 col-md-6 py-2 ">
            <p className="py-2">
              Khalis Foundation provides resources to Sikh youth and children
              and promotes the Sikhi spirit.
            </p>
            <p className="py-2">
              We strive to provide tools and resources much needed for the
              fostering of Gurmat within today’s Sikhs. Our goal is to serve the
              Sikh Sangat and entire humanity by spreading the message of Guru
              Nanak Dev Ji to the masses.
            </p>
            <p className="py-2">
              Khalis Foundation is helping to organize and coordinate the
              members of the alliance as well as facilitating technology and
              communication.
            </p>

            <span className="d-flex inline-block py-1">
              <p>
                <strong> Website : </strong>

                <a href="http://www.khalisfoundation.org">
                  http://www.khalisfoundation.org
                </a>
              </p>
            </span>
          </div>
          <div className="col-12 col-md-3 py-2 ">
            <Image
              src="/assets/khalis.jpeg" alt="IGhurbani"
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

export default khalisFoundation;

// export default ;
