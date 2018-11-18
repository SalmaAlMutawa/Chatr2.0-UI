import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

class Welcome extends Component {
  render() {
    return (
      <div>
        <div className="container text-center my-auto z-1">
          <div className="container fluid p-5">
            <h1
              className="mb-1"
              style={{
                backgroundColor: "rgb(0,191,255)",
                color: "white",
                fontSize: "90px",
                fontFamily: "Marker Felt, fantasy"
              }}
            >
              WELCOME TO CHATR 2.0
            </h1>
          </div>
          <div />
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
                      fontSize: "80px",
                      fontWieght: "bold",
                      color: "rgb(128,128,128)",
                      verticalAlign: "middle"
                    }}
                  >
                    Stay Connected
                  </p>
                  <p
                    style={{
                      fontFamily: "Georgia Pro Cond Black",
                      fontSize: "45px",
                      fontWieght: "bold",
                      color: "white",
                      backgroundColor: "rgba(255,192,203,1)"
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
                      fontSize: "80px",
                      fontWieght: "bold",
                      color: "white",
                      verticalAlign: "middle"
                    }}
                  >
                    Be updated
                  </p>
                  <p
                    style={{
                      fontFamily: "Georgia Pro Cond Black",
                      fontSize: "45px",
                      fontWieght: "bold",
                      color: "white",
                      backgroundColor: "rgb(169,169,169)"
                    }}
                  >
                    With the Latest news
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
                      fontSize: "80px",
                      fontWieght: "bold",
                      color: "white"
                    }}
                  >
                    Stay Linked
                  </p>
                  <p
                    style={{
                      fontFamily: "Georgia Pro Cond Black",
                      fontSize: "45px",
                      fontWieght: "bold",
                      color: "white",
                      backgroundColor: "rgb(135,206,250)"
                    }}
                  >
                    With Chatr
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

          {!this.props.user && (
            <div className="container p-5">
              <Link to="/login" className="btn btn-outline-info btn-block">
                Get Connected
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
