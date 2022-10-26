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
            <p className="py-2">Previously known as “Gurbani Unlimited”.</p>
            <p className="py-2">
              This app showcases Bhai Jaswant Singh Ji’s (a.k.a Bhagat Ji)
              decade of work in placing the pauses in Guru Granth Sahib Ji’s
              text and recording complete and correct pronunciation (Shudh
              Ucharan) without leaving out the sound of any letter. Bhagat Ji is
              one of the oldest living and most experienced Gurbani Santhya
              teachers who has learnt from Sant Gurbachan Singh Ji (Damdami
              Taksaal). Bhagat Ji spent 30 years in writing deep meanings of
              various sections of Gurbani and are available to download for free
              on our website.
            </p>
            <span className="d-flex inline-block py-1">
              <p>
                <strong>Youtube Channel : </strong>
                <a
                  className="text-justify"
                  href="https://www.youtube.com/user/Gursevak96/playlists"
                >
                  https://www.youtube.com/user/Gursevak96/playlists
                </a>
              </p>
            </span>
            <span className="d-flex inline-block py-1">
              <p>
                <strong> Website : </strong>

                <a href="http://www.gursevak.com">http://www.gursevak.com</a>
              </p>
            </span>
            <span className="d-flex inline-block py-1">
              <p>
                <strong> Download : </strong>
                <a href="https://apps.apple.com/ca/app/gurbani-unlimited/id937224618">
                <strong>  iOS </strong>
                </a> |
                <a href="https://play.google.com/store/apps/details?id=com.gurbani.unlimited&hl=en_US">
                <strong>  Android </strong>
                  
                  </a>
              </p>
            </span>
            <span className="d-flex  py-1">
              <p>
                <strong>Acknowledgements : </strong> BBhai Tarsem Singh UK,
                SHARE UK, Khalis Foundation, Khalsa Foundation UK, Dr. Sant
                Singh Khalsa, Dr. Kulbir Singh Thind
              </p>
            </span>
          </div>
          <div className="col-12 col-md-3 py-2 ">
            <Image
              src="/assets/shudh_gurbani.png"alt="IGhurbani"
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

export default gurbaniUnlimited;

// export default gurbaniUnlimited;
