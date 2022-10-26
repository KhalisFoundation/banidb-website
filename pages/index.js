import Head from "next/head";
import Image from "next/image";

const Home = () => {
  return (
    <div>
      <Head>
        <title>BaniDB Alliance – Gurbani Applications API (BaniDB)</title>
      </Head>
      <div>
        <div className="container-fluid px-0 hero ">
          <div className="bg-dark bg-opacity-25 h-100">
            <div className="animate__animated animate__backInDown  hero-text text-center d-flex flex-column align-items-center justify-content-center">
              <p className="bg-primary rounded-3 h1 px-2 py-3 px-md-3 text-light">
                Single, Universally Accessible, Gurbani Database for Websites &
                Applications.
              </p>
              <p className="h5 px-3 py-3 text-dark fw-bold text-center">
                The BaniDB API provides a single source of truth for the next
                generation of Gurbani apps and websites, leaving developers to
                do what they do best: innovate.
              </p>
              <p></p>
            </div>
          </div>
        </div>
        {/* <div className="container-fluid px-0">
          <div className="">
            <img
              src="/assets/Art-The-Golden-temple-Punjab-India-city-river-night-lights-man-people-moon-1.jpg"
              className="responsive w-100 cover"
              style={{
                height: "100vh",
                width: "100vw",
              }}
            />
            <div className=" header-text ">
              <div className="animate__animated animate__backInDown carousel-caption text-center w-60 d-flex flex-column align-items-center justify-content-center">
                <p className="bg-primary rounded-3 h1 py-2 px-md-3">
                  Single, Universally Accessible, Gurbani Database for Websites
                  & Applications.
                </p>
                <p className="h5 header-content text-dark text-center">
                  The BaniDB API provides a single source of truth for the next
                  generation of Gurbani apps and websites, leaving developers to
                  do what they do best: innovate.
                </p>
                <p></p>
              </div>
            </div>
          </div>
        </div> */}
        {/* <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="/assets/Art-The-Golden-temple-Punjab-India-city-river-night-lights-man-people-moon-1.jpg"
                className="responsive w-100 cover"
                style={{
                  height: "90vh",
                  width: "100vw",
                }}
              />
              <div className="container ">
                <div className="carousel-caption text-top">
                  <h1 className="bg-primary">
                    Single, Universally Accessible, Gurbani Database for
                    Websites & Applications.
                  </h1>
                  <p className="h4">
                    The BaniDB API provides a single source of truth for the
                    next generation of Gurbani apps and websites, leaving
                    developers to do what they do best: innovate.
                  </p>
                  <p></p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="/assets/Art-The-Golden-temple-Punjab-India-city-river-night-lights-man-people-moon-1.jpg"
                className="responsive w-100 cover"
                style={{
                  height: "90vh",
                  width: "100vw",
                }}
              />
              <div className="container ">
                <div className="carousel-caption text-top">
                  <h1 className="bg-primary">
                    Single, Universally Accessible, Gurbani Database for
                    Websites & Applications.
                  </h1>
                  <p className="h4">
                    The BaniDB API provides a single source of truth for the
                    next generation of Gurbani apps and websites, leaving
                    developers to do what they do best: innovate.
                  </p>
                  <p></p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="/assets/Art-The-Golden-temple-Punjab-India-city-river-night-lights-man-people-moon-1.jpg"
                className="responsive w-100 cover"
                style={{
                  height: "90vh",
                  width: "100vw",
                }}
              />
              <div className="container ">
                <div className="carousel-caption text-top">
                  <h1 className="bg-primary">
                    Single, Universally Accessible, Gurbani Database for
                    Websites & Applications.
                  </h1>
                  <p className="h4">
                    The BaniDB API provides a single source of truth for the
                    next generation of Gurbani apps and websites, leaving
                    developers to do what they do best: innovate.
                  </p>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div> */}
        <div className="container px-4">
          <div className="row text-left py-4">
            <div className="col-12 col-md-6">
              <div className=" px-3">
                <h1 className="fw-bold">ABOUT</h1>
                <p>
                  The BaniDB Alliance is a group of app developers and
                  organizations that work together to create a single, accurate,
                  digital source for all gurbani, transliterations and
                  translations. Our goal is to serve all apps with an open API
                  that is updated and corrected and provides a variety of
                  options.
                </p>
              </div>
            </div>
            <div className="col-md-2 d-nono d-md-block"></div>
            <div className="col-12 col-md-4 px-3 d-flex justify-right  pt-2">
              <p className="px-3">
                © 2019 Khalis Foundation, a registered California non-profit
                organization
              </p>
            </div>
          </div>
        </div>
        {/* PARTNER */}
        <div className="container px-4 h-25">
          <div className="row py-3 ">
            <h1 className="fw-bold text-center ">MEMBERS</h1>
            <p className="h4 text-center py-3">
              Some of the apps and organizations currently working with the
              BaniDB API
            </p>
            <div className="col-12 col-md-6 col-lg-3  py-1">
              <div class="container1">
                <img
                  src="/assets/igurbani.png"
                  alt="Avatar"
                  class="image"
                  style={{ width: "100%" }}
                />
                <div class="middle">
                  <div class="middlemiddle">
                    <a
                      href="/partners/"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      <div className="text-center ">
                        <p className="h4  border-bottom border-3 border-light w-auto">
                          iGurbani
                        </p>

                        <p>
                         A humble effort by the Akal Design
                          team to bring the hard work of Baba Darshan Singh
                          (Mallehwal) int...Detail
                        </p>
                        <button className=" btn btn-sm btn-dark">
                          Details
                        </button>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3  py-1">
              <div class="container1">
                <img
                  src="/assets/SikhiToTheMax.png"
                  alt="Avatar"
                  class="image"
                  style={{ width: "100%" }}
                />
                <div class="middle">
                  <div class="middlemiddle">
                    <a
                      href="/partners/"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      <div className="text-center ">
                        <p className="h4  border-bottom border-3 border-light w-">
                          SIKHITOTHEMAX
                        </p>

                        <p>
                          Originally developed by Bhai Tarsem Singh of SHARE
                          charity UK, SikhiToTheMax has become a defacto st...
                        </p>
                        <button className=" btn btn-sm btn-dark">
                          Details
                        </button>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3  py-1">
              <div class="container1">
                <img
                  src="/assets/shudh_gurbani.png"
                  alt="Avatar"
                  class="image"
                  style={{ width: "100%" }}
                />
                <div class="middle">
                  <div class="middlemiddle">
                    <a
                      href="/partners/"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      <div className="text-center ">
                        <p className="h4  border-bottom border-3 border-light w-">
                          LEARN SHUDH GURBANI
                        </p>

                        <p>
                          Previously known as "Gurbani Unlimited". This app
                          showcases Bhai Jaswant Singh Ji's (a.k.a Bhagat Ji...
                        </p>
                        <button className=" btn btn-sm btn-dark">
                          Details
                        </button>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3  py-1">
              <div class="container1">
                <img
                  src="/assets/Gurbani_Khoji.png"
                  alt="Avatar"
                  class="image"
                  style={{ width: "100%" }}
                />
                <div class="middle">
                  <div class="middlemiddle">
                    <a
                      href="/partners/"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      <div className="text-center ">
                        <p className="h4  border-bottom border-3 border-light w-">
                          GURBANI KHOJ
                        </p>

                        <p>
                          Gurbani Khoj is an application that will provide you
                          with translations and transliterations of the...
                        </p>
                        <button className=" btn btn-sm btn-dark">
                          Details
                        </button>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* API Stats */}
        <div className="container-fluid api-section px-4 py-5 ">
          <div className="container px-4 bg-dark bg-opacity-50">
            <div className="row  px-4 text-light">
              <p className="fs-2 text-center py-3 "> API STATS</p>
              <div className="d-flex flex-column align-items-center col-12 col-md-6 col-lg-3 border border-4 border-info border-top-0">
                <p className="fs-1 fw-bold"> 141,730</p>
                <p className="fs-4 fw-bold"> LINES OF GURBANI</p>
              </div>
              <div className="d-flex flex-column align-items-center col-12 col-md-6 col-lg-3 border border-4 border-info border-top-0">
                <p className="fs-1 fw-bold"> 13,365 </p>
                <p className="fs-4 fw-bold"> SHABADS</p>
              </div>
              <div className="d-flex flex-column align-items-center col-12 col-md-6 col-lg-3 border border-4 border-info border-top-0">
                <p className="fs-1 fw-bold"> 982,085</p>
                <p className="fs-4 fw-bold"> INDIVIDUAL WORDS</p>
              </div>
              <div className="d-flex flex-column align-items-center col-12 col-md-6 col-lg-3 border border-4 border-info border-top-0">
                <p className="fs-1 fw-bold"> 1</p>
                <p className="fs-4 fw-bold"> GURU</p>
              </div>
            </div>
          </div>

          {/* Qoutes */}
        </div>
        <div className="container py-2">
          <div
            id="myCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#myCarousel"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#myCarousel"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#myCarousel"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner py-4  ">
              <div className="carousel-item  active">
                <div className="container ">
                  <div className="carousel-caption   bg-light">
                    <p className="text-dark fs-4 ">
                      ਬਾਣੀ ਗੁਰੂ ਗੁਰੂ ਹੈ ਬਾਣੀ ਵਿਚਿ ਬਾਣੀ ਅੰਮ੍ਰਿਤੁ ਸਾਰੇ ॥ The Word,
                      the Bani is Guru, and Guru is the Bani. Within the Bani,
                      the Ambrosial Nectar is contained.
                    </p>
                    <p className="text-dark fs-5 text-muted">
                      By Guru Ram Das Ji in Raag Nat Narayan on Panna 982
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel-item ">
                <div className="container ">
                  <div className="carousel-caption  bg-light">
                    <p className="text-dark fs-4 ">
                      ਬਾਣੀ ਗੁਰੂ ਗੁਰੂ ਹੈ ਬਾਣੀ ਵਿਚਿ ਬਾਣੀ ਅੰਮ੍ਰਿਤੁ ਸਾਰੇ ॥ The Word,
                      the Bani is Guru, and Guru is the Bani. Within the Bani,
                      the Ambrosial Nectar is contained.
                    </p>
                    <p className="text-dark fs-5 text-muted ">
                      By Guru Ram Das Ji in Raag Nat Narayan on Panna 982
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container ">
                  <div className="carousel-caption   bg-light">
                    <p className="text-dark fs-4 ">
                      Single, Universally Accessible, Gurbani Database for
                      Websites & Applications.
                    </p>

                    <p className="text-dark fs-5 text-muted">
                      By Guru Ram Das Ji in Raag Nat Narayan on Panna 982
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
