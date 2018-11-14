import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

class Welcome extends Component {
  render() {
    return (
      <div>
        <div className="container text-center my-auto z-1">
          <h1 className="mb-1">WELCOME TO CHATR</h1>
          //carousel start
          <div
            id="carouselExampleControls"
            class="carousel slide"
            data-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  class="d-block w-100"
                  src="https://youinc.com/cached_images/stories/full/seven-super-successful-people-on-their-relationships-with-their-smartphones2-1920x800.jpg"
                />
                <div class="carousel-caption d-none d-md-block">
                  <p
                    style={{
                      fontFamily: "Impact, Charcoal, sans-serif",
                      fontSize: "60px",
                      fontWieght: "bold",
                      color: "rgb(128,128,128)"
                    }}
                  >
                    Stay Connected
                  </p>
                  <p
                    style={{
                      fontFamily: "Georgia Pro Cond Black",
                      fontSize: "35px",
                      fontWieght: "bold",
                      color: "rgb(169,169,169)"
                    }}
                  >
                    With your Loved ones
                  </p>
                </div>
              </div>
              <div class="carousel-item ">
                <img
                  class="d-block w-100"
                  src="https://images.fastcompany.net/image/upload/w_1280,f_auto,q_auto,fl_lossy/wp-cms/uploads/2018/05/p-1-how-ive-learned-to-get-someone-to-put-down-their-phone-and-listen.jpg"
                />
                <div class="carousel-caption d-none d-md-block">
                  <p
                    style={{
                      fontFamily: "Impact, Charcoal, sans-serif",
                      fontSize: "60px",
                      fontWieght: "bold",
                      color: "rgb(128,128,128)"
                    }}
                  >
                    Stay Connected
                  </p>
                  <p
                    style={{
                      fontFamily: "Georgia Pro Cond Black",
                      fontSize: "35px",
                      fontWieght: "bold",
                      color: "rgb(169,169,169)"
                    }}
                  >
                    With your Loved ones
                  </p>
                </div>
              </div>
              <div class="carousel-item">
                <img
                  class="d-block w-100"
                  src="https://i0.wp.com/www.intelligenthq.com/wp-content/uploads/2018/02/smarthpone-user.png"
                />
                <div class="carousel-caption d-none d-md-block">
                  <p
                    style={{
                      fontFamily: "Impact, Charcoal, sans-serif",
                      fontSize: "60px",
                      fontWieght: "bold",
                      color: "rgb(128,128,128)"
                    }}
                  >
                    Stay Connected
                  </p>
                  <p
                    style={{
                      fontFamily: "Georgia Pro Cond Black",
                      fontSize: "35px",
                      fontWieght: "bold",
                      color: "rgb(169,169,169)"
                    }}
                  >
                    With your Loved ones
                  </p>
                </div>
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
            >
              <span class="carousel-control-prev-icon" aria-hidden="true" />
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
            >
              <span class="carousel-control-next-icon" aria-hidden="true" />
              <span class="sr-only">Next</span>
            </a>
          </div>
          //carousel end
          {!this.props.user && (
            <div>
              <h3 className="mb-5">
                <em>You're gonna need to login to see the messages</em>
              </h3>
              <Link to="/login" className="btn btn-info btn-lg">
                Login
              </Link>
            </div>
          )}
        </div>
        <div className="overlay z-0" />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user
});

export default connect(mapStateToProps)(Welcome);
