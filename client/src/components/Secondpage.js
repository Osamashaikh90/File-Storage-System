import Upload from "./artifacts/contracts/Upload.sol/Upload.json";
import React from "react";
import { ethers } from "ethers";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import "./Secondfile.css";
import "./FileUpload.css";
import FileUpload from "./FileUpload";
import Modal from "./Modal";
import Display from "./Display";
import Discordsvg from "./Discordsvg";
import Twittersvg from "./Twittersvg";
import Instagramsvg from "./Instagramsvg";
import SecureUpload from "./images/Secure Upload.png";
import ShareShield from "./images/Share Shield.png";
import AccessLock from "./images/Acesslock.png";


const Secondpage = () => {
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState(null);
  const [provider, setProvider] = useState(null);
  const [data, setData] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    let isRequestingAccounts = false;
    const loadProvider = async () => {
      if (provider) {
        window.ethereum.on("chainChanged", () => {
          window.location.reload();
        });

        window.ethereum.on("accountsChanged", () => {
          window.location.reload();
        });

        if (!isRequestingAccounts) {
          isRequestingAccounts = true;
          try {
            // await provider.send("eth_requestAccounts", []);
            const signer = provider.getSigner();
            const address = await signer.getAddress();
            setAccount(address);
            let contractAddress = "0x3d2aAecF743e62C202F0Ef1189B7A49C65d038ed";
            const contract = new ethers.Contract(contractAddress, Upload.abi, signer);
            setContract(contract);
            setProvider(provider);
          } catch (error) {
            console.error("Error requesting accounts:", error);
          } finally {
            isRequestingAccounts = false;
          }
        }
      } else {
        console.error("Metamask is not installed");
      }
    };

    provider && loadProvider();
  }, []);



  const [currentButton, setCurrentButton] = useState("upload");

  const handleUploadClick = () => {
    setCurrentButton("upload");
  };

  const handleShareClick = () => {
    setCurrentButton("share");
  };

  return (
    <>
      {/* Navbar section */}
      <div className="navbar-section">
        <Navbar />
      </div>

      <div className="file-container">
        <h1> Store and Share Your Files with Ease</h1>
        <FileUpload
          account={account}
          provider={provider}
          contract={contract}
        ></FileUpload>
      </div>

      <div className="brief-detail">
        <h1 className="brief-head">What Services We Provide</h1>
        <div className="container">
          <div className="card">
            <img src={SecureUpload} alt="logo" />
            <h3>Secure Upload</h3>
            <p>
              A feature that allows users to upload files to the platform
              securely and with ease.
            </p>
            <a href="#" className="btn">
              More info
            </a>
          </div>
          <div className="card">
            <div className="icon standard">
              <img src={ShareShield} alt="logo" />
            </div>
            <h3>Share Shield</h3>
            <p>
              A feature that enables users to share files with others on the
              network while maintaining complete control over who can access
              them.
            </p>
            <a href="#" className="btn standard">
              More info
            </a>
          </div>
          <div className="card">
            <div className="icon premium">
              <img src={AccessLock} alt="logo" />
            </div>
            <h3>Acess Lock</h3>
            <p>
              A feature that provides advanced access control mechanisms,
              allowing users to revoke permissions from anyone they have shared
              their files with.
            </p>
            <a href="#" className="btn premium">
              More info
            </a>
          </div>
        </div>
      </div>

      <div className="upload-check-section">
        <h2 className="check-head">My Uploads</h2>
        <p className="check-para">
          The &apos;My Uploads &apos; section of our decentralized image storage platform
          allows you to view all the images you have uploaded by clicking the
          search button. If someone has shared an image with you, you can also
          view it by entering the account address of the user who shared it into
          the search bar field. This will display all the images that have been
          shared with you by that user.
        </p>
        <Display contract={contract} account={account}></Display>
      </div>

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
    </>
  );
};

export default Secondpage;
