import Head from "next/head";

const Home = () => {
  return (
    <div>
      <Head>
        <title>BaniDB Alliance – Gurbani Applications API (BaniDB)</title>
      </Head>

      <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
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
              height="600px"
            />
            <div className="container">
              <div className="carousel-caption text-top">
                <h1>
                  Single, Universally Accessible, Gurbani Database for Websites
                  & Applications.
                </h1>
                <p>
                  The BaniDB API provides a single source of truth for the next
                  generation of Gurbani apps and websites, leaving developers to
                  do what they do best: innovate.
                </p>
                <p></p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="/assets/Art-The-Golden-temple-Punjab-India-city-river-night-lights-man-people-moon-1.jpg"
              className="responsive w-100 cover"
              height="600px"
            />

            <div className="container">
              <div className="carousel-caption">
                <h1>Another example headline.</h1>
                <p>
                  Some representative placeholder content for the second slide
                  of the carousel.
                </p>
                <p></p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="/assets/Art-The-Golden-temple-Punjab-India-city-river-night-lights-man-people-moon-1.jpg"
              className="responsive w-100 cover"
              height="600px"
            />

            <div className="container">
              <div className="carousel-caption text-end">
                <h1>One more for good measure.</h1>
                <p>
                  Some representative placeholder content for the third slide of
                  this carousel.
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
      </div>
    </div>
  );
};

export default Home;
