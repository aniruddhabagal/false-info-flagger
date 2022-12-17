import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./Home.css";
import heroImg from "./images/hero2.png";
import logo from "./images/logo.png";

function Home() {
  const [copied, setCopied] = useState(false);
  const discount = "https://www.w3schools.com/css/css_form.asp";
  return (
    <div className="webpage">
      <img className="hero-img" src={heroImg} alt="img" />
      <header className="head">
        <img
          className="logo"
          src={logo}
          alt="logo"
          width="100px"
          height="100px"
        />
        <ul>
          <li>
            <a href="#">HOME</a>
          </li>
          <li>
            <a href="#">ABOUT US</a>
          </li>
          <li>
            <a href="#">API</a>
          </li>
          <li>
            <a href="#">DOCKER</a>
          </li>
        </ul>
      </header>
      <section className="hero-cont">
        <h1>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CAPTURE THE{" "}
          <span style={{ color: "darkblue" }}>FLAG!</span>
        </h1>
        <p>
          According to latest report,214% rise in cases releated to false
          information and fake news. <br />
          Organisations publish reports which are not aligned with the intrests
          of the Union government .<br />
          This is a THREAT!! to YOUR Freedom of Speech and Freedom of Press,
          which is already shrinking in the country.
          <br />
          <span style={{ fontSize: "34px" }}>
            U gotta watch out your back!!!
          </span>
        </p>
      </section>
      <section className="about">
        <h1>About Us</h1>
        <div className="u-line"></div>
        <p>
          We Flag! We Verify if the information your browsing is genuine or not,
          This chrome extension will help you identify fake data that a
          particular website or organisation provides. When such content is
          noticed we report it to the related government officials who inturn
          take necessary actions.
        </p>
      </section>
      <section className="cards">
        <div className="card">
          <ion-icon name="logo-web-component"></ion-icon>
          <h2>Website</h2>
          <p style={{ fontSize: "14px" }}>
            Open the website you want to access. Organisations give you
            information about their policies.
          </p>
        </div>
        <div className="card">
          <ion-icon name="speedometer-outline"></ion-icon>
          <h2>Extension</h2>
          <p style={{ fontSize: "14px" }}>
            Just Download our extension. Open it on the desired browser it does
            the work for you.
          </p>
        </div>
        <div className="card">
          <ion-icon name="warning-outline"></ion-icon>
          <h2>Warning</h2>
          <p style={{ fontSize: "14px" }}>
            Gotcha!! The information on the website turned out to be false or
            fake. Dont't worry we will alert you.
          </p>
        </div>
        <div className="card">
          <ion-icon name="sparkles-outline"></ion-icon>
          <h2>No Worries</h2>
          <p style={{ fontSize: "14px" }}>
            Yesssss!!! The Website has no intentions of fooling you.
          </p>
        </div>
      </section>
      <section className="api">
        <h1>API</h1>
        <div className="u-line u-2"></div>
        <div
          className={
            copied ? "discount-code discount-applied" : "discount-code"
          }
        >
          <div className="black-code">{discount}</div>
          {copied ? (
            <div className=" c-btn discount-copied">Copied!</div>
          ) : (
            <CopyToClipboard text={discount} onCopy={() => setCopied(true)}>
              <div className="c-btn copy">Copy the link</div>
            </CopyToClipboard>
          )}
        </div>
      </section>
    </div>
  );
}

export default Home;
