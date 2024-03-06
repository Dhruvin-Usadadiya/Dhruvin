import logo from "./logo.svg";
import logo2 from "../src/Site-logo.svg";
import logo3 from "../src/banner-logo.png";
import logo4 from "../src/header-down.png";
import logo5 from "../src/ic-coma-who.png";
import logo6 from "../src/torrance.png";
import logo7 from "../src/torrance_logo1-1-1.png";
import logo8 from "../src/feelbrand.png";
import logo9 from "../src/kiwi_image.png";
import logo10 from "../src/feelbrand-logo.png";
import logo11 from "../src/kiwi_logo-1.png";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const toggleClass = () => {
    document.querySelector("#navbarNav").classList.toggle("show");
  };
  var settings = {
    dots: true,
    infinite: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo2} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={toggleClass}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse justify-content-md-end navbar-collapse show w-100"
            id="navbarNav"
          >
            <ul className="navbar-links">
              <li className="navbar-dropdown">
                <a href="#" className="d-flex align-items-center">
                  Conpany <img className="down-icon" src={logo4} width={20} />
                </a>
                <div className="dropdown">
                  <a href="#">About Us</a>
                  <a href="#">Our Team</a>
                  <a href="#">Our Clients</a>
                  <a href="#">Vacancy</a>
                  <a href="#">Meeting Landscape</a>
                  <a href="#">Awards & Recognition</a>
                </div>
              </li>
              <li className="nav-item">
                <a href="#" className="d-flex align-items-center">
                  Services <img className="down-icon" src={logo4} width={20} />
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="d-flex align-items-center">
                  Hire Developers{" "}
                  <img className="down-icon" src={logo4} width={20} />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Resources
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
            <div className="nav-btn-main">
              <div className="nav-btn">
                <a href="#">Get Quote</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* banner-section */}
      <section className="banner-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="banner-title-main">
                <div className="banner-title">
                  <h2>Insurance Software Development</h2>
                  <h1>
                    Transforming Ideas into Reality Through Custom Software
                    Development
                  </h1>
                </div>
              </div>
              <div className="stage">
                <a href="#" className="btn">
                  Let's Get Started
                </a>
              </div>
            </div>
            <div className="col col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="banner-images-main">
                <div className="banner-images">
                  <img src={logo3} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* who-are-we-section */}
      <section className="who-are-we-section">
        <div className="container">
          <div className="row">
            <div className="col col-lg-7 col-12">
              <div className="who-are-title-main">
                <div className="who-are-title">
                  <h2>Who are we?</h2>
                  <p>
                    We take pride in our ability to leverage a diverse range of
                    technologies to create robust and scalable solutions.{" "}
                    <strong>Our team</strong> stays up-to-date with the latest
                    advancements in Healthcare, Insurance, and Custom Web
                    Solution technology enabling us to deliver forward-thinking
                    solutions that keep our clients ahead of the curve.
                  </p>
                  <div className="stage">
                    <a href="#" className="btn">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col col-lg-5 col-12">
              <div className="icon-sign-main">
                <div className="icon-sign">
                  <img src={logo5} />
                </div>
                <div className="modern-design">
                  <h4>“Technologize your desire’’</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* reality-section */}
      <section className="reality-section">
        <div className="container">
          <div className="row">
            <div className="col col-12">
              <div className="reality-title-main">
                <div className="reality-title">
                  <h4>What can we do for you?</h4>
                  <h2>
                    We Empower Brands By Applying Our Curiosity, Agility, And
                    Ideas.
                  </h2>
                </div>
              </div>
              <Slider {...settings}>
                <div className="reality-slider">
                  <h4>Digital Marketing</h4>
                  <p>
                    At MegaMinds, we like using digital transformation to scale
                    up your company. We produce long-lasting solutions, operate
                    transparently, and continually innovate.
                  </p>
                  <a href="#">Read More</a>
                </div>

                <div className="reality-slider">
                  <h4>Web Design</h4>
                  <p>
                    With a unique website design that converts, we'll make sure
                    that your website becomes the heart of your digital
                    strategy.
                  </p>
                  <a href="#">Read More</a>
                </div>

                <div className="reality-slider">
                  <h4>Web Development</h4>
                  <p>
                    Create cost-effective, high-quality web solutions that will
                    increase your website's visibility and traffic.{" "}
                  </p>
                  <a href="#">Read More</a>
                </div>

                <div className="reality-slider">
                  <h4>Mobile Apps</h4>
                  <p>
                    Provided customized, user-friendly, secure, and
                    cost-effective smart mobile app solutions across a variety
                    of mobile platforms.
                  </p>
                  <a href="#">Read More</a>
                </div>

                <div className="reality-slider">
                  <h4>System Maintainance</h4>
                  <p>
                    Allow our professionals to maintain backups, updates,
                    security upgrades, and more to keep your website working
                    smoothly.
                  </p>
                  <a href="#">Read More</a>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
      {/* review-section */}
      <section className="review-wrapper">
        <div className="container">
          <div className="row">
            <div className="col col-md-6 col-sm-12 col-12">
              <div className="review-title-main">
                <div className="review-title">
                  <h4>Why Trust Us?</h4>
                  <h2>Recognition & Awards</h2>
                  <p>
                    We are pleased to be a Microsoft Partner and Top-Rated on
                    Upwork in order to provide our clients with the value of
                    thejob they deserve. Furthermore, our engineers are
                    Microsoft certified as well as Google Analytics, Digital
                    Garage, App Campaigns, Digital Marketing and{" "}
                    <a>Ecommerce Analytics</a>
                    to ensure that our clients receive only the highest quality
                    of work.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 col-12 right-wrap align-items-center">
              <div className="review-images-main d-flex justify-content-center align-items-center">
                <div className="col1">
                  <span className="box zoom1">
                    <a href="#">
                      <img
                        src="https://megamindstechnologies.com/oolidros/2023/04/logo-1.png"
                        className="lazyloading"
                        alt="what is service"
                        width="111"
                        height="96"
                        data-no-retina=""
                      />
                    </a>
                  </span>
                  <span className="box zoom3">
                    <a href="#">
                      <img
                        src="https://megamindstechnologies.com/oolidros/2023/04/logo-2.png"
                        className="lazyloading"
                        alt="google germany"
                        width="100"
                        height="100"
                        data-no-retina=""
                      />
                    </a>
                  </span>
                </div>
                <div className="col2">
                  <span className="box zoom5">
                    <a href="#">
                      <img
                        src="https://megamindstechnologies.com/oolidros/2021/02/Glassdoor.png"
                        className="lazyloading"
                        alt="portfolio investment"
                        width="105"
                        height="97"
                        data-no-retina=""
                      />
                    </a>
                  </span>
                </div>
                <div className="col1">
                  <span className="box zoom4">
                    <a href="#">
                      <img
                        src="https://megamindstechnologies.com/oolidros/2021/02/dsf.png"
                        className="lazyloading"
                        alt="portfolio architecture"
                        width="105"
                        height="97"
                        data-no-retina=""
                      />
                    </a>
                  </span>
                  <span className="box zoom2">
                    <a href="#">
                      {" "}
                      <img
                        src="https://megamindstechnologies.com/oolidros/2021/02/Up-work.png"
                        className="lazyloading"
                        alt="what is branding"
                        width="86"
                        height="57"
                        data-no-retina=""
                      />{" "}
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* portfolio-section */}
      <section className="portfolio-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="portfolio-title-main">
                <div className="portfolio-title">
                  <h4>Portfolio</h4>
                  <h2>Have A Look At Our Work For Our Esteem Clients</h2>
                </div>
              </div>
            </div>
            <div className="section-main">
              <div className="main-col">
                <div className="portfolio-box-image">
                  <img src={logo6} />
                </div>
                <div className="portfolio-box-main">
                  <div className="portfolio-sub-box">
                    <img src={logo7} />
                    <p>
                      Best in UK's Interior design industry, provide bespoke
                      design & build solutions made to meet your highest
                      standards.
                    </p>
                  </div>
                </div>
              </div>
              <div className="main-col">
                <div className="portfolio-box-image">
                  <img src={logo8} />
                </div>
                <div className="portfolio-box-main">
                  <div className="portfolio-sub-box">
                    <img src={logo10} />
                    <p>
                      The best application to create & share posts for every
                      occasion with ready-to-use posters.
                    </p>
                  </div>
                </div>
              </div>
              <div className="main-col">
                <div className="portfolio-box-image">
                  <img src={logo9} />
                </div>
                <div className="portfolio-box-main">
                  <div className="portfolio-sub-box">
                    <img src={logo11} />
                    <p>
                      Kiwi provides insurance based on different activities like
                      Running, Cycling, Climbing..etc.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="portfolio-btn-main text-center mt-5">
              <div class="stage">
                <a href="#" class="btn">All Portfolio</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* testimonial-section */}
      <section className="testimonial-section">
        <div className="container">
          <div className="row">
            <div className="testimonial-title-main">
              <div className="testimonial-title">
                <h4>Testimonial</h4>
                <h2>What Our Client Say</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
