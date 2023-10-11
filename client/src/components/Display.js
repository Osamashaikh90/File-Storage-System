import React,{ useState } from "react";
import PropTypes from "prop-types";
import "./Secondfile.css";

const Display = ({ contract, account }) => {
  const [data, setData] = useState("");
  const [showData, setShowData] = useState(false);

  const getdata = async () => {
    let dataArray;
    const addressInput = document.querySelector(".address");
    const Otheraddress = addressInput ? addressInput.value : "";
    try {
      if (Otheraddress) {
        dataArray = await contract.display(Otheraddress);
        console.log(dataArray);
      } else {
        dataArray = await contract.display(account);
      }
    } catch (e) {
      alert("You don't have access");
    }
    const isEmpty = Object.keys(dataArray).length === 0;

    if (!isEmpty) {
      const str = dataArray.toString();
      const str_array = str.split(",");
      console.log(str);
      console.log(str_array);
      const images = str_array.map((item, i) => {
        return (
          <div key={i} className="image-container">
            <button className="delete-button" onClick={() => deleteFile(i)}>
              <i className="fa-solid fa-trash fa-beat" style={{color:"#007bff"}}></i>
            </button>
            <a href={item} target="_blank" rel="noreferrer">
              <img
                src={`https://gateway.pinata.cloud/ipfs/${item.substring(6)}`}
                alt="File"
                className="image-list"
                width={300}
                height={300}
                onError={(e) => {
                  e.target.style.display = "none"; // Hide the failed image
                  e.target.nextSibling.style.display = "block"; // Show the video tag
                }}
              />
              <video
                src={`https://gateway.pinata.cloud/ipfs/${item.substring(6)}`}
                alt="File"
                className="image-list"
                width={200}
                height={150}
                style={{ display: "none" }} // Initially hide the video tag
                controls
              />
            </a>
          </div>
        );
      });

      setData(images);
      setShowData(true);
    } else {
      alert("No image to display");
    }
  };

  const deleteFile = async (index) => {
    try {
      await contract.deleteUrl(index);
      alert("Image deleted successfully");
      getdata();
    } catch (e) {
      alert("Error deleting image");
    }
  };

  const toggleData = () => {
    setShowData(!showData);
  };

  const closeContainer = () => {
    setShowData(false);
  };

  return (
    <>
      <div className="search-bar">
        <input
          type="text"
          className="address"
          placeholder="Enter the Account address"
        />
        <button
          className="search-button"
          onClick={() => {
            getdata();
            toggleData(true);
          }}
        >
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      {showData && data.length > 0 && (
        <div className="blank-container">
          <div className="image-grid">
            {data}
            <button className="close-container" onClick={closeContainer}>
              <i className="fa-sharp fa-solid fa-circle-xmark fa-2xl"></i>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

Display.propTypes = {
  contract: PropTypes.shape({
    display: PropTypes.string, // Update the prop type according to the expected type
    deleteUrl: PropTypes.string, // Update the prop type according to the expected type
  }),
  account: PropTypes.string, // Update the prop type according to the expected type
};
export default Display;

