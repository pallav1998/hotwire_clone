import React from "react";
import styles from "./LandingPage.module.css";

export const Footer = () => {
  return (
    <div>
      <div className={styles.footerFirst}>
        <div className={styles.footer}>
          <div>
            <h3>Travel with Hotwire</h3>
            <p>Deals</p>
            <p>Hotels</p>
            <p>Cars</p>
            <p>Flights</p>
            <p>Vacations</p>
            <p>Mobile app</p>
          </div>
          <div>
            <h3>Get to know Hotwire</h3>
            <p>About us</p>
            <p>Careers</p>
            <p>Press Room</p>
            <p>Site map</p>
            <p>Privacy</p>
            <p>Terms of use</p>
            <p>Blog</p>
          </div>
          <div>
            <h3>Customer service</h3>
            <p>Contact us</p>
            <p>Help center</p>
            <p>Feedback</p>
            <p>Manage subscriptions</p>
            <p>Do Not Sell My Personal Information</p>
          </div>
          <div>
            <h3>Partner with Hotwire</h3>
            <p>Affiliates</p>
            <p>Suppliers</p>
            <p>Advertisers</p>
            <p>Tech Blog</p>
          </div>
        </div>
        <div className={styles.copyRight}>
          <hr />
          <img
            src="https://ak-secure.hotwirestatic.com/current/static/images/core/partner-logos/expedia_group.svg"
            alt="loading"
          />
          <p>
            © 2021 Hotwire, Inc., an Expedia Group company. All rights reserved.
            Hotwire, Inc. is not responsible for content on external sites.
            Hotwire, the Hotwire logo, Hot Rate, and "4-star hotels. 2-star
            prices." are either registered trademarks or trademarks of Hotwire,
            Inc. in the US and/or other countries. Other logos or product and
            company names mentioned herein may be the property of their
            respective owners. CST 2053390-50; NST 20003-0209.
          </p>
        </div>
      </div>
    </div>
  );
};
