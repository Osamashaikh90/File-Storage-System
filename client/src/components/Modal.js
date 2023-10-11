import React ,{ useEffect } from "react";
import PropTypes from "prop-types"; 

const Modal = ({ contract }) => {
  const sharing = async () => {
    const address = document.querySelector(".address").value;
    await contract.allow(address);
  };
  const removeallow = async () => {
    const address = document.querySelector(".address").value;
    await contract.disallow(address);
  };
  useEffect(() => {
    const accessList = async () => {
      const addressList = await contract.shareAccess();
      let select = document.querySelector("#selectNumber");
      const options = addressList;

      for (let i = 0; i < options.length; i++) {
        let opt = options[i];
        let e1 = document.createElement("option");
        e1.textContent = opt;
        e1.value = opt;
        select.appendChild(e1);
      }
    };
    contract && accessList();
  }, [contract]);
  return (
    <>
      <div className="modalBackground">
        <div className="modalContainer">
          <div id="myForm" className="myform">
            <input
              type="text"
              className="address"
              placeholder="Enter Address"
            ></input>

            <div className="footer">
              <button onClick={() => sharing()} className="share-btn">Share</button>
              <button onClick={() => removeallow()} className="disallow-btn">Disallow</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Modal.propTypes = {
  contract: PropTypes.shape({
    allow: PropTypes.any, 
    disallow: PropTypes.any, 
    shareAccess: PropTypes.any, 
  }),
};

export default Modal;
