import { useEffect } from "react";
import Background from "../../components/Background";
const HomePage = () => {
  return (
    <div>
      <Background />
      <header>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                <img src="/images/logo.png" alt="" className="img-fluid"></img>
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Learn
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Contact Us
                    </a>
                  </li>
                </ul>
                <div className="ms-2">
                  <a href="#" className="home-btn-btn">
                    Get Started
                    <i className="fa-solid fa-arrow-right ms-3"></i>
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
      <section className="banner-wrapper">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="row justify-content-center align-items-center">
                <div className="col-md-7">
                  <h1>First impressions matter!</h1>
                  <p>
                    Elevate your brand with our captivating blend of print and
                    digital introductions. Experience the perfect synergy of
                    elegance and technology
                  </p>
                  <div className="mt-4">
                    <a href="#" className="home-btn-btn">
                      Get Started
                      <i className="fa-solid fa-arrow-right ms-3"></i>
                    </a>
                  </div>
                </div>
                <div className="col-md-5 text-center">
                  <img
                    src="/images/Mockup.png"
                    alt=""
                    className="img-fluid"
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="card-wrapper">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="row justify-content-center bg-box">
                <div className="col-md-4">
                  <div className="card-box h-100 text-center">
                    <div className="mb-3 bg-border">
                      <h4>
                        <i className="fa-solid fa-cart-shopping"></i>
                      </h4>
                    </div>
                    <h4>Innovative Digital Prints for Your Business Card</h4>
                    <p>
                      Always Accessible: Your Permanent Presence, Any Phone, Any
                      Place, Anytime Absolutely FREE!
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card-box h-100 text-center">
                    <div className="mb-3 bg-border">
                      <h4>
                        <i className="fa-solid fa-cart-shopping"></i>
                      </h4>
                    </div>
                    <h4>Innovative Digital Prints for Your Business Card</h4>
                    <p>
                      Always Accessible: Your Permanent Presence, Any Phone, Any
                      Place, Anytime Absolutely FREE!
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card-box h-100 text-center">
                    <div className="mb-3 bg-border">
                      <h4>
                        <i className="fa-solid fa-cart-shopping"></i>
                      </h4>
                    </div>
                    <h4>Innovative Digital Prints for Your Business Card</h4>
                    <p>
                      Always Accessible: Your Permanent Presence, Any Phone, Any
                      Place, Anytime Absolutely FREE!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-wrapper">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <h4>Trains Siri to find you</h4>
              <p>
                Cardbook gets you noticed cause it's built for you. Introducing
                our all-new device optimization engine with advanced
                meta-tagging.
              </p>
              <img src="/images/mobile.png" alt="" className="img-fluid"></img>
            </div>
          </div>
        </div>
      </section>
      <section className="team-wrapper">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <h4>Team blue</h4>
              <p>
                With every card you share, you're not just making connections -
                you're supporting Team Blue. Join us in our mission to empower
                and inspire, one card at a time. Together, we're making a
                difference.
              </p>
              <div className="pt-2 team-top-div text-center">
                <img
                  src="/images/blue-team.png"
                  alt=""
                  className="img-fluid team-img"
                ></img>
                <img
                  src="/images/Realtor-logo.png"
                  alt=""
                  className="img-fluid realtor-logo"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="faq-wrapper">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 text-center">
              <h4>Ready to order or still have questions?</h4>
              <ul className="faq-list list-unstyled mt-3">
                <li>
                  <a
                    data-bs-toggle="collapse"
                    className="collapsed"
                    data-bs-target="#faq1"
                  >
                    <div className="d-flex">
                      <h6 className="px-2 mt-1 ">How does this works?</h6>
                      <i className="fas fa-chevron-down icon-show"></i>
                      <i className="fas fa-chevron-up icon-close"></i>
                    </div>
                  </a>
                  <div
                    id="faq1"
                    className="collapse"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      Feugiat pretium nibh ipsum consequat. Tempus iaculis urna
                      id volutpat lacus laoreet non curabitur gravida.
                    </p>
                  </div>
                </li>
                <li>
                  <a
                    data-bs-toggle="collapse"
                    data-bs-target="#faq2"
                    className="collapsed"
                  >
                    <div className="d-flex">
                      <h6 className="px-2 mt-1 ">
                        What is team blue and how do i join it?
                      </h6>
                      <i className="fas fa-chevron-down icon-show"></i>
                      <i className="fas fa-chevron-up icon-close"></i>
                    </div>
                  </a>
                  <div
                    id="faq2"
                    className="collapse"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      Dolor sit amet consectetur adipiscing elit pellentesque
                      habitant morbi. Id interdum velit laoreet id donec
                      ultrices.
                    </p>
                  </div>
                </li>

                <li>
                  <a
                    data-bs-toggle="collapse"
                    data-bs-target="#faq3"
                    className="collapsed"
                  >
                    <div className="d-flex">
                      <h6 className="px-2 mt-1 ">
                        Do i have to pay for anything?
                      </h6>
                      <i className="fas fa-chevron-down icon-show"></i>
                      <i className="fas fa-chevron-up icon-close"></i>
                    </div>
                  </a>
                  <div
                    id="faq3"
                    className="collapse"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      Eleifend mi in nulla posuere sollicitudin aliquam ultrices
                      sagittis orci. Faucibus pulvinar elementum integer enim.
                    </p>
                  </div>
                </li>

                <li>
                  <a
                    data-bs-toggle="collapse"
                    data-bs-target="#faq4"
                    className="collapsed"
                  >
                    <div className="d-flex">
                      <h6 className="px-2 mt-1 ">How do i order my cards?</h6>
                      <i className="fas fa-chevron-down icon-show"></i>
                      <i className="fas fa-chevron-up icon-close"></i>
                    </div>
                  </a>
                  <div
                    id="faq4"
                    className="collapse"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      Dolor sit amet consectetur adipiscing elit pellentesque
                      habitant morbi. Id interdum velit laoreet id donec
                      ultrices.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section
        className="footer-wrapper"
        style={{
          background: `url(${"images/footer.png"}) no-repeat center`,
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-7 text-center">
              <h4>Embrace the Experience!</h4>
              <p>
                Ready to dive in? Get started by ordering now or download for
                free on Google Play Store or Apple Store.
              </p>
            </div>
            <div className="d-flex justify-content-center">
              <a href="#" className="home-btn-btn">
                Download on Play Store
                <i className="fa-brands fa-apple ms-3"></i>
              </a>
              <a href="#" className="home-btn-btn ms-3">
                Download on Apple Store
                <i className="fa-brands fa-apple ms-3"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
