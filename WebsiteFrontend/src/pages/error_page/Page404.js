import React from "react";
import { Link } from "react-router-dom";
import Loader from "../../components/Loader/Loader";

const Page404 = () => (
  <Loader>
    <section className="vh-height white-bg">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="col-md-10 centerize-col text-center">
              <div className="four-zero-four-bg">
                <h1 className="dark-color">404 ERROR</h1>
              </div>
              <div className="content-box">
                <h2 className="cardo-font">Look like you're lost</h2>
                <p className="cardo-font dark-color lead">
                  the page you are looking for not available!
                </p>
                <p className="mt-30">
                  <Link to="/" className="btn btn-color btn-square">
                    GO TO HOME
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Loader>
);

export default Page404;
