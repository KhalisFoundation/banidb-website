import Head from "next/head";
import Image from "next/image";
import React from "react";

function gurbaniUnlimited() {
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
              SHARE is a charity focused on sharing the universal message of
              Guru Nanak, through the creation of versatile & innovative
              resources, utilising a forward thinking & collaborative approach.
            </p>
            <p className="py-2">
              SHARE was established in the 1990’s & has had many successes in
              the form of smartphone applications & publications, not to mention
              the worldwide phenomenon that is SikhiToTheMax.
            </p>
            <p className="py-2">
              SHARE does not have a leader or rigid hierarchy. All those with a
              thirst & drive to create inspirational & educational resources,
              that share Sikh spiritual teachings with others, are welcome to
              work with us.
            </p>

            <span className="d-flex inline-block py-1">
              <p>
                <strong> Website : </strong>

                <a href="http://sharecharityuk.com/">
                  http://sharecharityuk.com/
                </a>
              </p>
            </span>
            <span className="d-flex inline-block py-1">
              <p>
                <strong> Download : </strong>

                <a href="https://play.google.com/store/apps/details?id=com.gurbani.unlimited&hl=en_US">
                  khalsa@sharecharityuk.com
                </a>
              </p>
            </span>
         
          </div>
          <div className="col-12 col-md-3 py-2 ">
            <Image
              src="/assets/share-1.png"
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

export default gurbaniUnlimited;

// export default gurbaniUnlimited;

// export default shareCharity
