import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Firstpage.css";
import "./Secondpage";
import Discordsvg from "./Discordsvg";
import Twittersvg from "./Twittersvg";
import Instagramsvg from "./Instagramsvg";
import myvideo from "./videos/first.mp4";
import img1 from "./images/first-image-min.png";
import img2 from "./images/second-image-min.png";
import img3 from "./images/third-image-min.png";
import Navbar from "./Navbar";

function Firstpage() {
  const [imageSrc, setImageSrc] = useState(img3);

  const handleHeadingClick = (newImageSrc) => {
    setImageSrc(newImageSrc);
  };

  return (
    <div>
      <div className="navbar-section">
        <Navbar />
      </div>
      <div className="hero">
        <div className="video-background">
          <video autoPlay muted loop>
            <source src={myvideo} type="video/mp4" />
          </video>
          <div className="hero-content">
            <div className="hero-heading-box">
              <h1 className="hero-heading">
                Innovate Your File Storage with Decentralization
              </h1>
            </div>
            <h1 className="hero-subheading"> Your Data, Your Control</h1>
            <p className="hero__description">
              Join the movement towards a more decentralized web, where users
              own and control their data, and where censorship and surveillance
              are a thing of the past.
            </p>
            <button
              className="hero-button"
              onClick={() => {
                window.location.href = "/secondpage";
              }}
            >
              <Link className="hero-button-text" to="/secondpage">
                Click here to Upload the file
              </Link>
            </button>
          </div>
        </div>
      </div>

      {/* aninate section */}
      <div className="animate-section">
        <h2 className="animate-heading">What is UpShare ?</h2>
        <p className="animate-para">
          UpShare is a decentralized file storage system that uses
          blockchain technology to ensure secure and transparent data storage
          and retrieval. Users have complete control over their data and can
          share it with others using advanced encryption and access control
          mechanisms. It provides a secure and reliable platform for users to
          store and share files without compromising privacy or security. With
          UpShare, data management becomes decentralized and transparent, a
          revolutionary alternative to traditional centralized file storage
          systems.
        </p>
      </div>

      {/* Product section */}
      {/* Product section */}
      <div className="product-section">
        <h2 className="product-head">
          Benefits of Blockchain-based File Storage
        </h2>
        <div className="product-content">
          <div className="product-left">
            <div className="Para-1">
              <h3
                id="para1-heading"
                className="para1-heading"
                onClick={() => handleHeadingClick(img2)}
              >
                Immutability
              </h3>
              <p className="para1-detail">
                The blockchain provides a tamper-proof and immutable record of
                the file. Once a file is stored on the blockchain, it cannot be
                altered or deleted, ensuring the integrity of the data.
              </p>
            </div>
            <hr className="my-hr" />
            <div className="Para-2">
              <h3
                id="para2-heading"
                className="para2-heading"
                onClick={() => handleHeadingClick(img3)}
              >
                Decentralization
              </h3>
              <p className="para2-detail">
                The file is stored on a decentralized network of computers,
                meaning that there is no single point of failure or control.
                This ensures that the file remains accessible and secure even if
                one or more nodes fail.
              </p>
            </div>
            <hr className="my-hr" />
            <div className="Para-3">
              <h3
                id="para3-heading"
                className="para3-heading"
                onClick={() => handleHeadingClick(img1)}
              >
                Transparency
              </h3>
              <p className="para3-detail">
                All transactions on the blockchain are transparent and publicly
                visible. This means that anyone can view the transaction history
                of the file and verify its authenticity, providing a high level
                of trust and accountability.
              </p>
            </div>
          </div>
          <div className="product-right">
            <img src={imageSrc} alt="logo" />
          </div>
        </div>
      </div>

      {/* About section */}
      <div className="about">
        <h2 className="about-heading">About Us</h2>
        <p className="about-text">
          At UpShare, we believe that data ownership and privacy are
          fundamental rights that should be protected in the digital age.
          That&apos;s why we&apos;ve created a decentralized file storage system
          that puts you in control of your data. Our team of experienced
          developers and blockchain experts have designed a secure,
          decentralized network that allows you to store and access your files
          from anywhere, without relying on a central authority. By using
          blockchain technology, we ensure that your data is encrypted,
          tamper-proof, and always available, even in the face of network
          outages or attacks.
        </p>
      </div>

      {/* footer-section */}
      <div className="footer-section">
        <div className="column1">
          <h2 className="column1-heading">Contact Us</h2>
          <p className="column1-para">UpShare@gmail.com</p>
        </div>

        <div className="column2">
          <h2 className="column2-text">Get involved</h2>
          <div className="social-icons">
            <Discordsvg />
            <Twittersvg />
            <Instagramsvg />
          </div>
        </div>

        <div className="column3">
          <p className="Column3-text">
            © 2023 UpShare. All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
}

export default Firstpage;
