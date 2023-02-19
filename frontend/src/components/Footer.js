import React from "react";
import Link from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="pt-2 container-fluid FooterSectionCSS">
        <div className="row">
          <div className="col">
            <h1>LOGO</h1>
          </div>

          <div className=" col-5">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In libero
              neque, pellentesque vel erat id, tincidunt ultrices urna.
           
            </p>
          </div>

          <div className="col">
            <form>
              <h5>Subscribe to our newsletter</h5>
              <p>Monthly digest of what's new and exciting from us.</p>
              <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <label for="newsletter1" className="visually-hidden">
                  Email address
                </label>
                <input
                  id="newsletter1"
                  type="text"
                  className="form-control"
                  placeholder="Email address"
                />
                <button className="btn btn-primary" type="button">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="d-flex flex-column flex-sm-row justify-content-between pt-4 my-4 border-top">
          <p>© 2022 Company, Inc. All rights reserved.</p>
          <ul className="list-unstyled d-flex">
            <li className="ms-3">
              <a className="link-dark" href="#">
                <svg className="bi" width="24" height="24"></svg>
              </a>
            </li>
            <li className="ms-3">
              <a className="link-dark" href="#">
                <svg className="bi" width="24" height="24"></svg>
              </a>
            </li>
            <li className="ms-3">
              <a className="link-dark" href="#">
                <svg className="bi" width="24" height="24"></svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;
