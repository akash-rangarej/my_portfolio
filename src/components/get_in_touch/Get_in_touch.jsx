import React from "react";
import "./Get_in_touch.css";
import githubIcon from "../../assets/get_intouch/github.png";
import xIcon from "../../assets/get_intouch/x.webp";
import gmailIcon from "../../assets/get_intouch/gmail.svg";
import linkedinIcon from "../../assets/get_intouch/linkdin.png";

function Get_in_touch() {
  return (
    <>
      <section className="get-in-touch">
        <h1>Get In Touch</h1>
        <div className="social-links">
          <a
            href="https://github.com/akash-rangarej"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubIcon} alt="github" />
          </a>
          <a
            href="https://x.com/akash_rangarej?t=hilYFxYEVSZ-j-fpWKjuRg&s=09"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={xIcon} alt="x" />
          </a>
          <a
            href="https://mail.google.com/mail/u/3/#inbox"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={gmailIcon} alt="gmail" />
          </a>
          <a
            href="https://www.linkedin.com/in/akash-r-93239a295"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedinIcon} alt="linkdin" />
          </a>
        </div>
        <div className="footer-text">
          created and developed by Akash Rangarej
        </div>
      </section>
    </>
  );
}

export default Get_in_touch;
