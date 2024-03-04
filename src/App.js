import logo from "./logo.svg";
import logo2 from "../src/Site-logo.svg";
import logo3 from "../src/banner-logo.png";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const toggleClass = () => {
    document.querySelector("#navbarNav").classList.toggle("show");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
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
              <li class="navbar-dropdown">
                <a href="#">Conpany</a>
                <div class="dropdown">
                  <a href="#">About Us</a>
                  <a href="#">Our Team</a>
                  <a href="#">Our Clients</a>
                  <a href="#">Vacancy</a>
                  <a href="#">Meeting Landscape</a>
                  <a href="#">Awards & Recognition</a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Hire Developers
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Portfolio
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
    </>
  );
}

export default App;
